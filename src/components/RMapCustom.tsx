import React, {PropsWithChildren} from 'react';
import {Map, View, MapBrowserEvent, MapEvent} from 'ol';
import RenderEvent from 'ol/render/Event';
import BaseEvent from 'ol/events/Event';
import {Extent} from 'ol/extent';

import {Coordinate} from 'ol/coordinate';

import {RContext} from 'rlayers/context';
import {RlayersBase} from 'rlayers/REvent';

/** Center and zoom level */
export type RViewCustom = {
    center: Coordinate;
    zoom: number;
    rotation: number;
};

export interface RMapCustomProps extends PropsWithChildren<unknown> {
    /** The initial view parameters - {center, zoom}, reset only on full component reload */
    initial: RViewCustom;
    /** External view state with React semantics */
    view?: [RViewCustom, (view: RViewCustom) => void];
    /** CSS class */
    className?: string;
    /** Width when not using CSS */
    width?: number | string;
    /** Height when not using CSS */
    height?: number | string;
    /** Do not include any default controls
     * @default false
     */
    noDefaultControls?: boolean;
    /** Do not include any default interactions
     * @default false
     */
    noDefaultInteractions?: boolean;
    /** View projection
     * @default 'ESPG:3857'
     */
    projection?: string;
    /** Called immediately on click */
    onClick?: (this: RMapCustom, e: MapBrowserEvent<UIEvent>) => boolean | void;
    /** Called on single click when the double click timer has expired */
    onSingleClick?: (this: RMapCustom, e: MapBrowserEvent<UIEvent>) => boolean | void;
    /** Called on double click */
    onDblClick?: (this: RMapCustom, e: MapBrowserEvent<UIEvent>) => boolean | void;
    /** Called when the user starts panning the map */
    onMoveStart?: (this: RMapCustom, e: MapBrowserEvent<UIEvent>) => boolean | void;
    /** Called when the user stops panning the map */
    onMoveEnd?: (this: RMapCustom, e: MapBrowserEvent<UIEvent>) => boolean | void;
    /** Called on every pointer move when dragging, `e.preventDefault()`
     * can be used to stop OpenLayers from also panning the map */
    onPointerDrag?: (this: RMapCustom, e: MapBrowserEvent<UIEvent>) => boolean | void;
    /** Called on every pointer movement, use with care */
    onPointerMove?: (this: RMapCustom, e: MapBrowserEvent<UIEvent>) => boolean | void;
    onPostRender?: (this: RMapCustom, e: MapEvent) => boolean | void;
    onPreCompose?: (this: RMapCustom, e: RenderEvent) => boolean | void;
    onPostCompose?: (this: RMapCustom, e: RenderEvent) => boolean | void;
    onRenderComplete?: (this: RMapCustom, e: RenderEvent) => boolean | void;
    /** Called on every change */
    onChange?: (this: RMapCustom, e: BaseEvent) => void;
    /** A set of properties that can be accessed later by .get()/.getProperties() */
    properties?: Record<string, unknown>;
    /** Extent of the map, cannot be dynamically modified
     * @default world
     */
    extent?: Extent;
    /** Minimum resolution, cannot be dynamically modified */
    minResolution?: number;
    /** Maximum resolution, cannot be dynamically modified */
    maxResolution?: number;
    /** Minimum zoom level */
    minZoom?: number;
    /** Maximum zoom level */
    maxZoom?: number;
    /** Rotation in radians */
    rotation?: number;
}

/**
 * Main map component
 *
 * All other components, except `RStyle` should be part of an `RMap`
 */
export default class RMapCustom extends RlayersBase<RMapCustomProps, Record<string, never>> {
    ol: Map;
    target: React.RefObject<HTMLDivElement>;

    constructor(props: Readonly<RMapCustomProps>) {
        super(props);
        this.target = React.createRef();
        console.log('RMapCustom.constructor', props);
        this.ol = new Map({
            controls: props.noDefaultControls ? [] : undefined,
            interactions: props.noDefaultInteractions ? [] : undefined,
            view: new View({
                projection: props.projection,
                center: props.initial.center,
                zoom: props.initial.zoom,
                extent: props.extent,
                minResolution: props.minResolution,
                maxResolution: props.maxResolution,
                minZoom: props.minZoom,
                maxZoom: props.maxZoom,
                rotation: props.rotation
            })
        });
        if (this.props.view) this.ol.on('moveend', this.updateView);
    }

    componentDidMount(): void {
        super.componentDidMount();
        this.ol.setTarget(this.target.current);
    }

    updateView = (e: MapEvent): void => {
        const view = this.ol.getView();
        if (typeof this.props?.view[1] === 'function')
            this.props.view[1]({center: view.getCenter(), zoom: view.getZoom(), rotation: view.getRotation()});
    };

    refresh(prevProps?: RMapCustomProps): void {
        super.refresh(prevProps);
        const view = this.ol.getView();
        for (const p of ['minZoom', 'maxZoom']) {
            const m = p.charAt(0).toUpperCase() + p.substring(1);
            if (!prevProps || this.props[p] !== prevProps[p]) view['set' + m](this.props[p]);
        }
        if (this.props.view) {
            view.setCenter(this.props.view[0].center);
            view.setZoom(this.props.view[0].zoom);
            view.setRotation(this.props.view[0].rotation);
        }
        if (this.props.properties) this.ol.setProperties(this.props.properties);
        if (this.props.view) this.ol.on('moveend', this.updateView);
        else this.ol.un('moveend', this.updateView);
    }

    render(): JSX.Element {
        return (
            <div
                className={this.props.className}
                style={{width: this.props.width, height: this.props.height}}
                ref={this.target}
            >
                <RContext.Provider value={{map: this.ol}}>{this.props.children}</RContext.Provider>
            </div>
        );
    }
}
