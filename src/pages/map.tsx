import React, { useState, useEffect, useRef } from 'react';
import { Map, View } from 'ol';
import {Tile as TileLayer, Vector as VectorLayer} from 'ol/layer';
import { graphql } from 'gatsby';
import Feature from 'ol/Feature';
import {Circle as CircleStyle, Fill, Icon, IconImage, Stroke, Style} from 'ol/style';
import {OSM, Vector as VectorSource} from 'ol/source';
import Zoom from 'ol/control/Zoom';
import Rotate from 'ol/control/Rotate';
import {fromLonLat} from 'ol/proj';
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
                lg
                lt
              }
              allowedStartPoints {
                lg
                lt
              }
            }
          }
        }
    }
}
`;

function MapPage({data}) {

    const [map, setMap] = useState();
    const [view, setView] = useState({
        center: fromLonLat([0,0]),
        zoom: 0,
        enableRotation: true
    });
    const [controls, setControlsFlag] = useState<MapPageControls>({
        flagNewButton: true,
        flagStartDialog: false,
        mainContainerClass: ''
    });
    const mapElement = useRef();
    const mapRef = useRef();
    const [target, setTarget] = useState<StrategyTarget>();
    const [geolocation, setGeolocation] = useState();
    const [accuracyFeature, setAccuracyFeature] = useState();
    const [positionFeature, setPositionFeature] = useState();
    const [vectorSource, setVectorSource] = useState({
        features: [
            //accuracyFeature, positionFeature
        ],
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
        locateView([target.center.lt, target.center.lg], 10);

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

    const mousePositionControl = new MousePosition({
        coordinateFormat: createStringXY(4),
        projection: 'EPSG:4326',
    });


    useEffect(() => {
        
        console.log('MapPage.init');
        const initialMap = new Map({
            target: mapElement.current,
            layers: [
                new TileLayer({
                    source: new OSM({}),
                })
            ],
            view: new View(view),
            controls: defaultControls().extend([mousePositionControl]),
        });

        /* -- GEOLOCATION SIMULATION
        const geolocation = new GeoSimulation({
            projection: view.getProjection(),
            tracking: true
        });
        geolocation.run(56, 37, 5000);*/

        //geolocation.on('change', function () {
            //el('accuracy').innerText = geolocation.getAccuracy() + ' [m]';
            //el('altitude').innerText = geolocation.getAltitude() + ' [m]';
            //el('altitudeAccuracy').innerText = geolocation.getAltitudeAccuracy() + ' [m]';
            //el('heading').innerText = geolocation.getHeading() + ' [rad]';
            //el('speed').innerText = geolocation.getSpeed() + ' [m/s]';
            //console.log('change', geolocation.position_);
        //});

        // -- car
        /*const positionFeature = new Feature();
        positionFeature.setStyle(
            new Style({
                image: new Icon(({
                    anchor: [0.5, 46],
                    anchorXUnits: 'fraction',
                    anchorYUnits: 'pixels',
                    scale: 0.07,
                    src: 'https://cdn-icons-png.flaticon.com/512/0/798.png'
                }))
            })
        );*/

        /*const accuracyFeature = new Feature();
        geolocation.on('change:accuracyGeometry', function () {
            accuracyFeature.setGeometry(geolocation.getAccuracyGeometry());
        });

        geolocation.on('change:position', function () {
            const coordinates = geolocation.getPosition();
            positionFeature.setGeometry(coordinates ? new Point(coordinates) : null);
            view.setCenter(coordinates);
        });*/

        

        new VectorLayer({
            map: initialMap,
            source: new VectorSource(vectorSource),
        });

        const select = new Select({});
        initialMap.addInteraction(select);
        const selectedFeatures = select.getFeatures();
        selectedFeatures.on(['add', 'remove'], function () {
            /*const names = selectedFeatures.getArray().map(function (feature) {
              return feature.get('ECO_NAME');
            });
            if (names.length > 0) {
              infoBox.innerHTML = names.join(', ');
            } else {
              infoBox.innerHTML = 'None';
            }*/
            const names = selectedFeatures.getArray().map(function (feature) {
                return feature.get('ECO_NAME');
              })
            console.log('feature', names);
        });


        setMap(initialMap);

    }, []);

    let dialog = null;
    if (controls.flagStartDialog) {
        console.log('data', data);
        dialog = <StartDialog onDialogClose={startDialogClose} onDialogSubmit={startDialogHandler}></StartDialog>
    }

    return (
        <main>
            <div id="main-wrapper" className={controls.mainContainerClass}>
                <div style={{height:'100vh',width:'100%'}} ref={mapElement} className="map-container" />
                <BaseMapTopPanel 
                    flagNewBtn={controls.flagNewButton} 
                    onClickNew={clickNewSimulationBtn}></BaseMapTopPanel>
            </div>
            {dialog}
        </main>
    );
}

export default MapPage;
