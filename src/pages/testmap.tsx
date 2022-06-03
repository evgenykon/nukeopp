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
import { MovementParameters } from "../geosimulation/MovementSimulator";
import { toRadians } from "ol/math";
import SimGeolocationCoordinates from "../geosimulation/SimGeolocationCoordinates";


//const center = fromLonLat([2.364, 48.82]);
const initialGeolocation = new SimGeolocation(55.750, 37.616, 0, 0, new MovementParameters());
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
    const [movement, setMovement] = React.useState<MovementParameters>(new MovementParameters());
    const [geoSimCoords, setGeoSimCoords] = React.useState<SimGeolocationCoordinates>(new SimGeolocationCoordinates(0,0,0,0));
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
        //console.log('onMapChange');
    }
    const onMapClick = (e: MapBrowserEvent<UIEvent>) => {
        const coords = e.map.getCoordinateFromPixel(e.pixel);
        const lonlat = toLonLat(coords);
        console.log('click coords:', {long_x: lonlat[0], lat_y: lonlat[1]}, view);
        flashRadius();
    }
    const onGeopositionChange = (e: BaseEvent) => {
        const lat = e.target.position_[1];
        const long = e.target.position_[0];
        const position = e.target.simulatedPosition;
        const coords = fromLonLat([long, lat]);
        setCenter(coords);
        setView({ center: coords, zoom: 16, rotation: toRadians(position.coords.heading) }); 
        console.log('geolocationsim change', toRadians(position.coords.heading) / 2);
        setMovement(e.target.movement.movement);
        setGeoSimCoords(e.target.calculator.current);
    }

    return (
        
        <React.Fragment>
            <RMapCustom
                width={"100%"} height={"100vh"} 
                
                /* extent={extent} */
                initial={view} 
                view={[view, setView]} 
                noDefaultControls={true}
            
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
            <div style={{position: 'absolute', width: '100%', top: 0, height: '30px', backgroundColor: 'rgb(54 54 54 / 80%)', 
            display: 'grid', gridTemplateColumns: '1fr 1fr 1fr 1fr 1fr', color: '#fff', padding: '0.1rem', boxSizing: 'border-box'}}>
                <div>Gea {movement.gear}</div>
                <div>Trt {movement.throttle}</div>
                <div>Spd {Math.round(movement.speed)}</div>
                <div>Dmg {movement.damage}</div>
                <div>Dir {movement.direction} / {geoSimCoords.heading}</div>
            </div>
        </React.Fragment>
    );
}