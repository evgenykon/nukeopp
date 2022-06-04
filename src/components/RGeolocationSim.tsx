import React from 'react';
import BaseEvent from 'ol/events/Event';

import {RlayersBase} from 'rlayers/REvent';
import {RContextType} from 'rlayers/context';
import GeoSimulation from '../geosimulation/GeoSimulation';
import { Coordinate } from 'ol/coordinate';
import SimGeolocation from '../geosimulation/SimGeolocation';

export interface RGeolocationSimProps {
    /** Continuous tracking
     * @default false */
    tracking?: boolean;
    /** Tracking options (W3C standard) */
    trackingOptions?: {
        enableHighAccuracy?: boolean;
        timeout?: number;
        maximumAge?: number;
    };
    /** Projection for the returned coordinates
     * @default viewProjection */
    projection?: string;

    startPosition?: SimGeolocation;

    /** Called on every change */
    onChange?: (this: RGeolocationSim, e: BaseEvent) => void;
    /** Called on error */
    onError?: (this: RGeolocationSim, e: BaseEvent) => void;
}

/**
 * A wrapper around the OpenLayers Geolocation helper
 *
 * Must have an `RMap` parent
 */
export default class RGeolocationSim extends RlayersBase<RGeolocationSimProps, Record<string, never>> {
    ol: GeoSimulation;

    constructor(props: Readonly<RGeolocationSimProps>, context: React.Context<RContextType>) {
        super(props, context);
        if (!this?.context?.map) throw new Error('A Geolocation must be part of a map');
        const projection = props.projection ?? this.context.map.getView().getProjection();
        //console.log('RGeolocationSim', props);
        this.ol = new GeoSimulation({...props, projection});
    }
}
