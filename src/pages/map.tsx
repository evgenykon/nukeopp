import React, { useState, useEffect, useRef } from 'react';
import { Map, View } from 'ol';
import {Tile as TileLayer, Vector as VectorLayer} from 'ol/layer';
import Feature from 'ol/Feature';
import {Circle as CircleStyle, Fill, Icon, IconImage, Stroke, Style} from 'ol/style';
import {OSM, Vector as VectorSource} from 'ol/source';
import Zoom from 'ol/control/Zoom';
import Rotate from 'ol/control/Rotate';
import {fromLonLat} from 'ol/proj';
import Point from 'ol/geom/Point';
import GeoSimulation from '../geosimulation/GeoSimulation';

import 'ol/ol.css';
import "../styles/map.scss"
import { IMapPageControls, MapPageControls } from '../interfaces/MapPageControls';
import BaseMapTopPanel from '../components/BaseMapTopPanel';
import BaseMapDialog from '../components/BaseMapDialog';
import BaseInputRow from '../components/BaseInputRow';


function MapPage() {

    const [map, setMap] = useState();
    const mapElement = useRef();
    const mapRef = useRef();
    const [controls, setControlsFlag] = useState<MapPageControls>({
        flagNewButton: true,
        flagStartDialog: false,
        mainContainerClass: ''
    });


    const clickNewBtn = () => {
        console.log('clickNewBtn');
        const changes = {
            flagNewButton: false,
            flagStartDialog: true,
            mainContainerClass: 'overlayed'
        };
        setControlsFlag({...controls, ...changes});
        //setControlsFlag({...controls, flagStartDialog: true});
    };


    useEffect(() => {

        const view = new View({
            center: fromLonLat([37, 56]),
            zoom: 18,
            enableRotation: true
        });

        const initialMap = new Map({
            target: mapElement.current,
            layers: [
                new TileLayer({
                    source: new OSM({}),
                })
            ],
            view: view,
            controls: [
                /*new Zoom({
                    delta: 3,
                }),
                new Rotate({
                    autoHide: false,
                })*/
            ],
        });

        const geolocation = new GeoSimulation({
            projection: view.getProjection(),
            tracking: true
        });

        console.log('MapPage.init');
        geolocation.run(56,37, 5000);

        /*const geolocation = new Geolocation({
            // enableHighAccuracy must be set to true to have the heading value.
            trackingOptions: {
              enableHighAccuracy: true,
            },
            projection: view.getProjection(),
            tracking: true
        });*/

        geolocation.on('change', function () {
            //el('accuracy').innerText = geolocation.getAccuracy() + ' [m]';
            //el('altitude').innerText = geolocation.getAltitude() + ' [m]';
            //el('altitudeAccuracy').innerText = geolocation.getAltitudeAccuracy() + ' [m]';
            //el('heading').innerText = geolocation.getHeading() + ' [rad]';
            //el('speed').innerText = geolocation.getSpeed() + ' [m/s]';
            //console.log('change', geolocation.position_);
        });

        const positionFeature = new Feature();
        positionFeature.setStyle(
            new Style({
                image: new Icon(/** @type {module:ol/style/Icon~Options} */ ({
                    anchor: [0.5, 46],
                    anchorXUnits: 'fraction',
                    anchorYUnits: 'pixels',
                    scale: 0.07,
                    src: 'https://cdn-icons-png.flaticon.com/512/0/798.png'
                }))
            })
        );

        const accuracyFeature = new Feature();
        geolocation.on('change:accuracyGeometry', function () {
            accuracyFeature.setGeometry(geolocation.getAccuracyGeometry());
        });

        geolocation.on('change:position', function () {
            const coordinates = geolocation.getPosition();
            positionFeature.setGeometry(coordinates ? new Point(coordinates) : null);
            view.setCenter(coordinates);
        });

        

        new VectorLayer({
            map: initialMap,
            source: new VectorSource({
              features: [accuracyFeature, positionFeature],
            }),
          });


        setMap(initialMap);

    }, []);

    const startDialogHandler = () => {
        console.log('startDialogHandler');
    }
    const startDialogClose = () => {
        console.log('startDialogClose');
    }

    let dialog = null;
    if (controls.flagStartDialog) {
        dialog = <BaseMapDialog title='New nuclear explosion simulation' flagShowClose={true} onClose={startDialogClose}>
        <BaseInputRow label='Location'>
            <select name="location-select">
                <option value="msk">Moscow</option>
                <option value="pentagon">Pentagon</option>
                <option value="london">London</option>
            </select>
        </BaseInputRow>
        <BaseInputRow label='Time to escape'>
            <select name="escape-time">
                <option value="3">3 min</option>
                <option value="5">5 min</option>
                <option value="10">10 min</option>
                <option value="random">Random (1-10)</option>
            </select>
        </BaseInputRow>
        <BaseInputRow label='Survive time'>
            <select name="survive-time">
                <option value="3">3 min</option>
                <option value="5">5 min</option>
                <option value="10">10 min</option>
                <option value="random">Random (1-10)</option>
                <option value="unlimit">Unlimit</option>
            </select>
        </BaseInputRow>
        <BaseInputRow label='Bunkers'>
            <input type='checkbox' />
        </BaseInputRow>
        <BaseInputRow label='Auto services'>
            <input type='checkbox' />
        </BaseInputRow>
        <div className='input-row' style={{paddingTop: '10px'}}>
            <div className='input-label'></div>
            <div className='input-control'>
                <button type='button' onClick={startDialogHandler}>Start</button>
            </div>
        </div>
    </BaseMapDialog>
    }

    return (
        <main>
            <div id="main-wrapper" className={controls.mainContainerClass}>
                <div style={{height:'100vh',width:'100%'}} ref={mapElement} className="map-container" />
                <BaseMapTopPanel 
                    flagNewBtn={controls.flagNewButton} 
                    onClickNew={clickNewBtn}></BaseMapTopPanel>
            </div>
            {dialog}
        </main>
    );
}

export default MapPage;
