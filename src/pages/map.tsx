import React, { useState, useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import { Map, Overlay, View } from 'ol';
import {Tile as TileLayer, Vector as VectorLayer} from 'ol/layer';
import { graphql } from 'gatsby';
import Feature from 'ol/Feature';
import {Circle as CircleStyle, Fill, Icon, IconImage, Stroke, Style} from 'ol/style';
import {OSM, Vector, Vector as VectorSource} from 'ol/source';
import Stamen from 'ol/source/Stamen';

import Zoom from 'ol/control/Zoom';
import Rotate from 'ol/control/Rotate';
import {fromLonLat, Projection} from 'ol/proj';
import Point from 'ol/geom/Point';
import GeoSimulation from '../geosimulation/GeoSimulation';
import MousePosition from 'ol/control/MousePosition';

import 'ol/ol.css';
import "../styles/map.scss"
import { IMapPageControls, MapPageControls } from '../interfaces/MapPageControls';
import BaseMapTopPanel from '../components/BaseMapTopPanel';
import StartDialog from '../components/dialogs/StartDialog';
import {StrategyTarget} from '../interfaces/StrategyTarget';
import SimGeolocationCoordinates from '../geosimulation/SimGeolocationCoordinates';
import { Coordinate } from 'ol/coordinate';
import {createStringXY} from 'ol/coordinate';
import {defaults as defaultControls} from 'ol/control';
import {Select} from 'ol/interaction';
import GeoJSON from 'ol/format/GeoJSON';
import {unByKey} from 'ol/Observable';
import {getVectorContext} from 'ol/render';
import {easeOut} from 'ol/easing'; 
import { EventsKey } from 'ol/events';
import { ITelemetryData, TelemetryData } from '../geosimulation/TelemetryData';
import Calculations from '../helpers/Calculations';
import ImageLayer from 'ol/layer/Image';
import Static from 'ol/source/ImageStatic';



export const query  = graphql`
query sim {
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
                lt
                lg
              }
              center {
                long
                lat
              }
              allowedStartPoints {
                dist
                lg
                lt
              },
              geojson {
                areas
                safety
              }
            }
          }
        }
    }
}
`;

function MapPage({data}) {

    const [map, setMap] = useState();
    const [view, setView] = useState(new View({
        center: fromLonLat([0,0]),
        zoom: 0,
        enableRotation: true
    }));
    const [controls, setControlsFlag] = useState<MapPageControls>({
        flagNewButton: true,
        flagStartDialog: false,
        mainContainerClass: ''
    });
    const mapElement = useRef();
    const mapRef = useRef();
    const [target, setTarget] = useState<StrategyTarget>();
    const [geolocation, setGeolocation] = useState<GeoSimulation>();
    const [accuracyFeature, setAccuracyFeature] = useState();
    const [positionFeature, setPositionFeature] = useState();
    const [markerOverlay, setMarkerOverlay] = useState<Overlay>();
    const [pointOpacity, setPointOpacity] = useState({opacity: 0});

    const [tileLayer, setTileLayer] = useState(new TileLayer({
        source: new Stamen({
            layer: 'watercolor',
          }), //new OSM({}),
    }));
    const [flashSource, setFlashSource] = useState(new VectorSource({
        wrapX: false,
    }));
    const [flashLayer, setFlashLayer] = useState(new VectorLayer({
        source: flashSource,
    }));
    const [listenerKey, setListenerKey] = useState<EventsKey>();
    const [telemetry, setTelemetry] = useState<ITelemetryData>({
        isEnable: false,
        sensors: null
    });
    
    const clickNewSimulationBtn = () => {
        const changes = {
            flagNewButton: false,
            flagStartDialog: true,
            mainContainerClass: 'overlayed'
        };
        setControlsFlag({...controls, ...changes});
    };

    /**
     * Старт симуляции
     * @param payload 
     */
    const startDialogHandler = (payload) => {
        const changes = {
            flagNewButton: false,
            flagStartDialog: false,
            mainContainerClass: ''
        };
        setControlsFlag({...controls, ...changes});
        const target = data.targets.edges.filter(item => item.node.frontmatter.code === payload.location)[0].node.frontmatter;
        setTarget(new StrategyTarget(
            target.code,
            target.name,
            new SimGeolocationCoordinates(target.center.lt, target.center.lg),
            [new SimGeolocationCoordinates(0,0),], // @todo calculate area
            new SimGeolocationCoordinates(0,0) // @todo calculate start point
        ));
        //console.log('startDialogHandler', target);
        addAreasGeojson(target.geojson.areas);
        addSafetyZonesGeojson(target.geojson.safety);
        showTelemetry();
        startGeoposition(payload, target);
        //startTimers();
        
    }
    const startDialogClose = () => {
        console.log('startDialogClose');
        const changes = {
            flagNewButton: false,
            flagStartDialog: false,
            mainContainerClass: ''
        };
        setControlsFlag({...controls, ...changes});
    }
    const locateView = (viewPosition:Coordinate, zoom:number) => {
        // [37, 56]; // Zelenograd
        map.getView().animate({zoom: zoom, center: fromLonLat(viewPosition)});
        setMap(map);
    }
    const addAreasGeojson = (source: string) => {
        const geoJsonSource = new Vector({
            url: source,
            format: new GeoJSON(),
        });
        const layer = new VectorLayer({
            source: geoJsonSource,
            minZoom: 8,
            style: new Style({
                stroke: new Stroke({color: '#000'}),
            })
        });
        map.addLayer(layer);
        setMap(map);
    }
    const addSafetyZonesGeojson = (source:string) => {
        const geoJsonSource = new Vector({
            url: source,
            format: new GeoJSON(),
        });
        const layer = new VectorLayer({
            source: geoJsonSource,
            minZoom: 8,
            style: new Style({
                stroke: new Stroke({color: '#0cc500'}),
            })
        });
        map.addLayer(layer);
        setMap(map);
    }

    const mousePositionControl = new MousePosition({
        coordinateFormat: createStringXY(4),
        projection: 'EPSG:4326',
    });

    const onFlashPostrender = function(event, start, duration, flashGeom, map) {
      const frameState = event.frameState;
      const elapsed = frameState.time - start;
      if (elapsed >= duration && listenerKey) {
        unByKey(listenerKey);
        return;
      }
      const vectorContext = getVectorContext(event);
      const elapsedRatio = elapsed / duration;
      // radius will be 5 at start and 30 at end.
      const radius = easeOut(elapsedRatio) * 45 + 5;
      const opacity = easeOut(1);
  
      const style = new Style({
        image: new CircleStyle({
          radius: radius,
          stroke: new Stroke({
            color: 'rgba(255, 0, 0, ' + opacity + ')',
            width: 0.25 + opacity,
          }),
        }),
      });
  
      vectorContext.setStyle(style);
      vectorContext.drawGeometry(flashGeom);
      // tell OpenLayers to continue postrender animation
      map.render();
    }


    const flash = function(feature, duration, map) {
        const start = Date.now();
        const flashGeom = feature.getGeometry().clone();
        const eventKey = flashLayer.on('postrender', (e) => onFlashPostrender(e, start, duration, flashGeom, map));
        setListenerKey(eventKey);
    }

    const getFlashPoint = () => {
        const x = Math.random() * 0.01;
        const y = Math.random() * 0.01;
        return new Point(fromLonLat([37.616 + x, 55.750 + y]));
    }

    const runFlash = function(flashSource) {
        const geom = getFlashPoint();
        const feature = new Feature(geom);
        flashSource.addFeature(feature);
    }

    const showTelemetry = () => {
        setTelemetry(new TelemetryData())
    }


    const startGeoposition = (formData, payload) => {
        console.log('startGeoposition formData', formData);
        console.log('startGeoposition payload', payload);
        let startPosition = null;
        if (formData.distance !== 'random') {
            const formDataDistance = parseInt(formData.distance);
            const filteredPositions = payload.allowedStartPoints.filter(pos => pos.dist == formDataDistance);
            if (filteredPositions.length > 0) {
                startPosition = filteredPositions[Calculations.getRandomIntegerFromRange(0, filteredPositions.length-1)];
            }
        }
        if (!startPosition) {
            startPosition = payload.allowedStartPoints[Calculations.getRandomIntegerFromRange(0, payload.allowedStartPoints.length-1)];
        }
        console.log('startGeoposition filter', startPosition);

        const geoSim = new GeoSimulation({
            projection: view.getProjection(),
            tracking: true,
            startPosition: {
                long: startPosition.lg,
                lat: startPosition.lt,
                heading: 0 // @todo
            },
            tickTimeout: 100,
            pauseBeforeStart: 5000
        });
        locateView([startPosition.lg, startPosition.lt], 16);
        setTimeout(() => {
            setPointOpacity({opacity: 1});
        }, 5000)

        geoSim.on('change', function () {
            //el('accuracy').innerText = geolocation.getAccuracy() + ' [m]';
            //el('altitude').innerText = geolocation.getAltitude() + ' [m]';
            //el('altitudeAccuracy').innerText = geolocation.getAltitudeAccuracy() + ' [m]';
            //el('heading').innerText = geolocation.getHeading() + ' [rad]';
            //el('speed').innerText = geolocation.getSpeed() + ' [m/s]';
            //console.log('change', geolocation.position_);
            //console.log('speed/heading', geolocation.getSpeed(), geolocation.getHeading());
        });

        const accuracyFeature = new Feature();
        geoSim.on('change:accuracyGeometry', function () {
            accuracyFeature.setGeometry(geoSim.getAccuracyGeometry());
        });

        geoSim.on('change:position', function () {
            const coordinates = geoSim.getPosition();
            console.log('geoSim change:position', coordinates);
            map.getView().setCenter(coordinates);
            if (geoSim.getHeading() !== 0) {
                map.getView().setRotation(geoSim.getHeading());
            }
            
            setPointOpacity({opacity: 1});
        });
        
        setGeolocation(geoSim);
        new VectorLayer({
            map: map,
            source: new VectorSource({
                features: [accuracyFeature,] //positionFeature]
            }),
        });
    }
    
    useEffect(() => {
        
        console.log('MapPage.init');

        const initialMap = new Map({
            target: mapElement.current,
            layers: [
                tileLayer,
                new TileLayer({
                    source: new Stamen({
                      layer: 'terrain-labels',
                    }),
                }),
                flashLayer
            ],
            view: view,
            controls: defaultControls().extend([mousePositionControl]),
        });

        // const select = new Select({});
        // initialMap.addInteraction(select);
        // const selectedFeatures = select.getFeatures();
        // selectedFeatures.on(['add', 'remove'], function () {
        //     const names = selectedFeatures.getArray().map(function (feature) {
        //         console.log('selected', feature);
        //         return feature.get('ECO_NAME');
        //       })
        //     console.log('feature', names);
        // });

        // flashSource.on('addfeature', function (e) {
        //     console.log('addfeature', e);
        //     flash(e.feature, 5000, initialMap);
        // });

        initialMap.render();

        //console.log('add overlay');
        //markerElement.current.src = 'https://raw.githubusercontent.com/eygen-ff/nukeopp/master/src/images/car_png.png';
        //setMarkerOverlay();
        // const markerOverlay = new Overlay({
        //     positioning: 'center-center',
        //     position: [0,0],
        //     element: ReactDOM.findDOMNode(document).querySelector('#geo-marker'),
        //     stopEvent: false,
        // });
        // initialMap.addOverlay(markerOverlay);

        setMap(initialMap);

    }, []);

    

    let dialog = null;
    if (controls.flagStartDialog) {
        dialog = <StartDialog onDialogClose={startDialogClose} onDialogSubmit={startDialogHandler}></StartDialog>
    }


    return (
        <main>
            <div id="main-wrapper" className={controls.mainContainerClass}>
                <div style={{height:'100vh',width:'100%'}} ref={mapElement} className="map-container" />
                <div id="geo-marker" style={pointOpacity}>
                    <img src="https://raw.githubusercontent.com/eygen-ff/nukeopp/master/src/images/car.svg" alt="car" />
                </div>
                <BaseMapTopPanel 
                    flagNewBtn={controls.flagNewButton} 
                    onClickNew={clickNewSimulationBtn}
                    telemetry={telemetry}
                ></BaseMapTopPanel>
            </div>
            {dialog}
        </main>
    );
}



export default MapPage;
