import React,{ useCallback } from "react";
import "../styles/map.scss"

import { fromLonLat, toLonLat } from "ol/proj";
import "ol/ol.css";

import { MapBrowserEvent, RFeature, RGeolocation, RLayerStamen, RLayerTile, RLayerVector, RMap, ROSM, ROverlay, RStyle } from "rlayers";
import { RLayerTileWebGL, ROSMWebGL, RControl } from "rlayers";


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
import { graphql } from 'gatsby';
import GeoJSON from "ol/format/GeoJSON";
import GeoJsonGeometriesLookup from 'geojson-geometries-lookup';


export const query  = graphql`
query 
sim {
    targets: allMdx(
        filter: {frontmatter: {tag: {eq: "simulation"}}}
      ) {
        edges {
          node {
            id
            frontmatter {
              code
              name
              targets {
                bomb
                delay
                long
                lat
              }
              center {
                long
                lat
              }
              allowedStartPoints {
                heading
                lat
                long
              },
              geojson {
                areas
                safety
              }
            }
          }
        }
    }
    geo: allFile(filter: {name: {}, extension: {eq: "geojson"}}) {
          edges {
            node {
              name
              relativePath
              childrenGeoJson {
                features {
                  type
                  geometry {
                    coordinates
                    type
                  }
                }
              }
            }
          }
        }
}
`;


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
+ 3. Geojson
+ 4. Watercolor tiles
+ 5. Circle animation + Flashes
+ 6. GraphQL
+ 7. Set car icon
+ 8. Rotation
+ 9. Fix driving calculation
  10 Flash 
+ 11 Collisions
  12 Full area map
  13 Rescue zones
 
*/




export default function TestMapView(gatsbyParams): JSX.Element {
    const data = gatsbyParams.data.targets.edges[0].node.frontmatter;
    const geo = gatsbyParams.data.geo.edges[1].node.childrenGeoJson;
    const targetCenter = fromLonLat([data.targets[0].long, data.targets[0].lat]);
    const initialGeolocation = new SimGeolocation(
        data.allowedStartPoints[0].lat, 
        data.allowedStartPoints[0].long,
        0, 
        data.allowedStartPoints[0].heading, 
        new MovementParameters()
    );
    const initialCenter = [initialGeolocation.coords.longitude, initialGeolocation.coords.latitude];
    const lookup = new GeoJsonGeometriesLookup({type: 'FeatureCollection', features: geo[0].features});

    // ===== States =====
    const [center, setCenter] = React.useState(fromLonLat(initialCenter));
    const [view, setView] = React.useState<RViewCustom>({ center: center, zoom: 16, rotation: 0 });
    const [movement, setMovement] = React.useState<MovementParameters>(new MovementParameters());
    const [geoSimCoords, setGeoSimCoords] = React.useState<SimGeolocationCoordinates>(new SimGeolocationCoordinates(0,0,0,0));
    const flashRef = React.useRef() as React.RefObject<RFeature>;

    // ===== On mount component =====
    React.useEffect(() => {
        console.log('onMount', data);
            
        const center = fromLonLat([data.allowedStartPoints[0].long, data.allowedStartPoints[0].lat]);
        setView({ center: center, zoom: 16, rotation: toRadians(-data.allowedStartPoints[0].heading) });
    
    }, []);


    // ===== Methods ======

    // Enlarge flash circle radius
    const flashRadius = () => {
        const radius = flashRef.current?.props.geometry.getRadius();
        flashRef.current?.props.geometry.setRadius(radius + 10);
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
        const movement = e.target.movement.movement;
        let zoom = 17;
        setView({ center: coords, zoom: zoom, rotation: toRadians(-position.coords.heading) }); 
        setMovement(movement);
        setGeoSimCoords(e.target.calculator.current);
        
        const collisionPoint = {type: "Point", coordinates: [long, lat]};
        if (lookup.hasContainers(collisionPoint)) {
            window.dispatchEvent(new Event('collision'));
        }
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
                {/*
                <RLayerTile properties={{label: "Watercolor",}} url="https://stamen-tiles.a.ssl.fastly.net/watercolor/{z}/{x}/{y}.jpg" />
    <RLayerStamen layer="terrain-labels" />*/}
    
    <ROSMWebGL properties={{ label: "OSM" }} />
          {/*<RLayerTileWebGL properties={{ label: "OpenTopo" }} url="https://{a-c}.tile.opentopomap.org/{z}/{x}/{y}.png"  />*/}

<RLayerTileWebGL properties={{ label: "OpenStreetMaps" }} url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"  />

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
                        geometry={new Circle(targetCenter, 100)} 
                        style={new Style({
                            fill: new Fill({
                                color: 'rgba(255, 100, 50, 0.7)'
                            })
                        })}
                    />
                </RLayerVector>

                {/* GeoJSON */}
                <RLayerVector zIndex={5} format={new GeoJSON({ featureProjection: "EPSG:3857" })} url="/geojson/moscow-areas.geojson">
                <RStyle.RStyle>
                    <RStyle.RFill color="rgba(0,0,0,0.3)" />
                </RStyle.RStyle>
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