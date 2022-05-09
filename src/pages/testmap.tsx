import React,{ useCallback } from "react";

import { fromLonLat, toLonLat } from "ol/proj";
import "ol/ol.css";

import { MapBrowserEvent, RFeature, RGeolocation, RLayerStamen, RLayerTile, RLayerVector, RMap, ROSM, ROverlay, RStyle } from "rlayers";
import { boundingExtent } from "ol/extent";
import { Circle, Point } from "ol/geom";
import RMapCustom, { RViewCustom } from "../components/RMapCustom";
import CircleStyle from "ol/style/Circle";
import { Fill, Style } from "ol/style";
import RGeolocationSim from "../components/RGeolocationSim";
import BaseEvent from "ol/events/Event";
import SimGeolocation from "../geosimulation/SimGeolocation";


//const center = fromLonLat([2.364, 48.82]);
const initialGeolocation = new SimGeolocation(37.616, 55.750, 0, 0);
const initialCenter = [initialGeolocation.coords.longitude, initialGeolocation.coords.latitude];

// Границы зоны 
// const extent = boundingExtent([
//     fromLonLat([37.250, 55.720]), // top left
//     fromLonLat([38.000, 58.100]), // bottom right
//   ]);



/*
MAN: https://mmomtchev.github.io/rlayers/#/simple
API: https://mmomtchev.github.io/rlayers/api/

TODO: 
  1. Dialog
+ 2. Geopos + correct moving
  3. Geojson
+ 4. Watercolor tiles
+ 5. Circle animation + Flashes
  6. GraphQL
+ 7. Set car icon
+ 8 Rotation
+ 9 Fix driving calculation

*/


export default function TestMapView(): JSX.Element {
    // ===== States =====
    const [center, setCenter] = React.useState(fromLonLat(initialCenter));
    const [view, setView] = React.useState<RViewCustom>({ center: center, zoom: 15, rotation: 0 });
    const flashRef = React.useRef() as React.RefObject<RFeature>;

    // ===== On mount component =====
    React.useEffect(() => {
        console.log('onMount'); // , toLonLat(view.center)

      }, []);

    // ===== Methods ======

    // Enlarge flash circle radius
    const flashRadius = () => {
        const radius = flashRef.current?.props.geometry.getRadius();
        flashRef.current?.props.geometry.setRadius(radius + 10);
    }

    // Map rotation
    const rotateLeft = () => {
        console.log('rotation', view.rotation);
        setView({ center: center, zoom: 16, rotation: view.rotation + Math.PI / 60 });
    }

    

    // ===== Events ======
    const onMapChange = () => {
        console.log('onMapChange');
    }
    const onMapClick = (e: MapBrowserEvent<UIEvent>) => {
        const coords = e.map.getCoordinateFromPixel(e.pixel);
        const lonlat = toLonLat(coords);
        console.log('click coords:', {long_x: lonlat[0], lat_y: lonlat[1]}, view);
        //setCenter(coords);
        //setView({ center: coords, zoom: 16, rotation: view.rotation }); 
        flashRadius();
    }
    const onGeopositionChange = (e: BaseEvent) => {
        console.log('geolocationsim change', e);
        // Note the use of function instead of an arrow lambda which does not have this
        /*const geoloc = e.target as OLGeoLoc;
        setPos(new Point(geoloc.getPosition()));
        setAccuracy(geoloc.getAccuracyGeometry());
        this.context.map.getView().fit(geoloc.getAccuracyGeometry(), {
            duration: 250,
            maxZoom: 15,
        });*/
    }


    return (
        <React.Fragment>
            <RMapCustom
                width={"100%"} height={"100vh"} 
                maxZoom={16}
                minZoom={15}
                /* extent={extent} */
                initial={view} 
                view={[view, setView]} 
                noDefaultControls={true}
                noDefaultInteractions={true}
                onClick={useCallback((e: MapBrowserEvent<UIEvent>) => onMapClick(e), [])}
                onMoveEnd={useCallback((e) => onMapChange(e), [])}
            >
                {/* -- Basic map layer --*/}
                <RLayerTile properties={{label: "Watercolor",}} url="https://stamen-tiles.a.ssl.fastly.net/watercolor/{z}/{x}/{y}.jpg" />
                <RLayerStamen layer="terrain-labels" />

                {/* -- Car icon --*/}
                <RLayerVector zIndex={10}>
                    <RFeature geometry={new Point(center)}>
                        <ROverlay className="no-interaction">
                            <img
                            src="https://raw.githubusercontent.com/eygen-ff/nukeopp/master/src/images/car_png.png"
                            style={{
                                position: "relative",
                                top: -24,
                                left: -24,
                                userSelect: "none",
                                pointerEvents: "none",
                            }}
                            width={48}
                            height={48}
                            alt="animated icon"
                            />
                        </ROverlay>
                    </RFeature>
                </RLayerVector>


                {/* Flash circle */ }
                <RLayerVector zIndex={10}>
                    <RFeature
                        ref={flashRef}
                        geometry={new Circle(center, 100)} 
                        style={new Style({
                            fill: new Fill({
                                color: 'rgba(255, 100, 50, 0.7)'
                            })
                        })}
                    />
                </RLayerVector>

                <RGeolocationSim
                    tracking={true}
                    trackingOptions={{ enableHighAccuracy: true }}
                    startPosition={initialGeolocation}
                    onChange={React.useCallback(e => onGeopositionChange(e), [])}
                />
            </RMapCustom>
        </React.Fragment>
    );
}