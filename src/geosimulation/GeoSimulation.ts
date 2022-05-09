/**
 * @module ol/Geolocation
 */
 import BaseObject from 'ol/Object.js';
 import {circular as circularPolygon} from 'ol/geom/Polygon.js';
 import {
   get as getProjection,
   getTransformFromProjections,
   identityTransform,
   TransformFunction,
 } from 'ol/proj.js';
 import {toRadians} from 'ol/math.js';
import SimGeolocation from './SimGeolocation';
import MovementSimulator from './MovementSimulator';
import GeoSimulationError from './GeoSimulationError';
import { Coordinate } from 'ol/coordinate';
import SimulationTimers from './SimulationTimers';
import GeoPositionCalculator from './GeoPositionCalculator';


 /**
  * @enum {string}
  */
const Property = {
  ACCURACY: 'accuracy',
  ACCURACY_GEOMETRY: 'accuracyGeometry',
  ALTITUDE: 'altitude',
  ALTITUDE_ACCURACY: 'altitudeAccuracy',
  HEADING: 'heading',
  POSITION: 'position',
  PROJECTION: 'projection',
  SPEED: 'speed',
  TRACKING: 'tracking',
  TRACKING_OPTIONS: 'trackingOptions',
};

 
 /**
  * @typedef {Object} Options
  * @property {boolean} [tracking=false] Start Tracking right after
  * instantiation.
  * @property {PositionOptions} [trackingOptions] Tracking options.
  * See https://www.w3.org/TR/geolocation-API/#position_options_interface.
  * @property {import("./proj.js").ProjectionLike} [projection] The projection the position
  * is reported in.
  */
 
 /**
  * @typedef {import("./ObjectEventType").Types|'change:accuracy'|'change:accuracyGeometry'|'change:altitude'|
  *    'change:altitudeAccuracy'|'change:heading'|'change:position'|'change:projection'|'change:speed'|'change:tracking'|
  *    'change:trackingOptions'} GeolocationObjectEventTypes
  */
 
 /***
  * @template Return
  * @typedef {import("./Observable").OnSignature<import("./Observable").EventTypes, import("./events/Event.js").default, Return> &
  *   import("./Observable").OnSignature<GeolocationObjectEventTypes, import("./Object").ObjectEvent, Return> &
  *   import("./Observable").OnSignature<'error', GeolocationError, Return> &
  *   import("./Observable").CombinedOnSignature<import("./Observable").EventTypes|GeolocationObjectEventTypes|
  *     'error', Return>} GeolocationOnSignature
  */

interface IGeoSimulation {

}
 
 /**
  * @classdesc
  * Helper class for providing HTML5 Geolocation capabilities.
  * The [Geolocation API](https://www.w3.org/TR/geolocation-API/)
  * is used to locate a user's position.
  *
  * To get notified of position changes, register a listener for the generic
  * `change` event on your instance of {@link module:ol/Geolocation~Geolocation}.
  *
  * Example:
  *
  *     var geolocation = new Geolocation({
  *       // take the projection to use from the map's view
  *       projection: view.getProjection()
  *     });
  *     // listen to changes in position
  *     geolocation.on('change', function(evt) {
  *       window.console.log(geolocation.getPosition());
  *     });
  *
  * @fires module:ol/events/Event~BaseEvent#event:error
  * @api
  */
class GeoSimulation extends BaseObject implements IGeoSimulation {

  simulatedPosition: SimGeolocation | null;
  movement: MovementSimulator;
  timers: SimulationTimers;
  calculator: GeoPositionCalculator;
  
  // The unprojected (EPSG:4326) device position.
  position_: Coordinate | null;
  transform_: TransformFunction;
  watchId_: number | undefined;
  startPosition: Coordinate;


  /**
    * @param {Options} [opt_options] Options.
    */
  constructor(opt_options: any) {
    super();

    /***
    * @type {GeolocationOnSignature<import("./events").EventsKey>}
    */
    this.on;

    /***
    * @type {GeolocationOnSignature<import("./events").EventsKey>}
    */
    this.once;

    /***
    * @type {GeolocationOnSignature<void>}
    */
    this.un;

    const options = opt_options || {};

    this.simulatedPosition = null;

    this.movement = new MovementSimulator();

    this.position_ = null;

    this.transform_ = identityTransform;

    this.watchId_ = undefined;

    this.addChangeListener(Property.PROJECTION, this.handleProjectionChanged_);
    this.addChangeListener(Property.TRACKING, this.handleTrackingChanged_);

    if (options.projection !== undefined) {
      this.setProjection(options.projection);
    }
    if (options.trackingOptions !== undefined) {
      this.setTrackingOptions(options.trackingOptions);
    }

    this.setTracking(options.tracking !== undefined ? options.tracking : false);


    console.log('GeoSim start', options);
    if (options.startPosition !== undefined) {
      console.log('GeoSim start pos', options.startPosition);
      this.simulatedPosition = new SimGeolocation(options.startPosition.lat, options.startPosition.long, 0, options.startPosition.heading);
    } else {
      this.simulatedPosition = new SimGeolocation(0, 0, 0, 0);
    }

    this.calculator = new GeoPositionCalculator(this.movement.getParameters(), this.simulatedPosition.coords);

    this.timers = new SimulationTimers(
      options.tickTimeout !== undefined ? options.tickTimeout : 1000,
      options.pauseBeforeStart !== undefined ? options.pauseBeforeStart : 0,
      () => {
        this.tick();
      }
    );
  }
   

  /**
   * Simulation step
   */
  tick() {
    if (!this.simulatedPosition) {
      return;
    }
    this.movement.tick();
    if (this.movement.speed <= 0) {
      return;
    }
    this.handleTrackingChanged_();
    this.calculator = new GeoPositionCalculator(this.movement.getParameters(), this.simulatedPosition.coords);
    // calculate next coords according to movement parameters
    const coordinates = this.calculator.getNextStepCoordinates()
    this.simulatedPosition = new SimGeolocation(coordinates.latitude, coordinates.longitude, coordinates.speed ?? 0, coordinates.heading ?? 0);
    this.positionChange_(this.simulatedPosition);
  }
 
   /**
    * Clean up.
    */
  disposeInternal() {
    this.timers.stop();
    this.setTracking(false);
    super.disposeInternal();
  }
 
  /**
  * @private
  */
  handleProjectionChanged_() {
    const projection = this.getProjection();
    if (projection) {
      this.transform_ = getTransformFromProjections(getProjection('EPSG:4326'), projection);
      if (this.position_) {
        this.set(Property.POSITION, this.transform_(this.position_));
      }
    }
  }
 
  /**
  * @private
  */
  handleTrackingChanged_() {
    const tracking = this.getTracking();
    if (tracking && this.watchId_ === undefined && this.simulatedPosition) {
      this.watchId_ = 1;
    }
  }
 

  positionChange_(position: SimGeolocation) {
    const coords = position.coords;
    this.set(Property.ACCURACY, coords.accuracy);
    this.set(
      Property.ALTITUDE,
      coords.altitude === null ? undefined : coords.altitude
    );
    this.set(
      Property.ALTITUDE_ACCURACY,
      coords.altitudeAccuracy === null ? undefined : coords.altitudeAccuracy
    );
    this.set(
      Property.HEADING,
      coords.heading === null ? undefined : toRadians(coords.heading)
    );
    if (!this.position_) {
      this.position_ = [coords.longitude, coords.latitude];
    } else {
      this.position_[0] = coords.longitude;
      this.position_[1] = coords.latitude;
    }
    const projectedPosition = this.transform_(this.position_);
    this.set(Property.POSITION, projectedPosition);
    this.set(Property.SPEED, coords.speed === null ? undefined : coords.speed);
    const geometry = circularPolygon(this.position_, coords.accuracy);
    geometry.applyTransform(this.transform_);
    this.set(Property.ACCURACY_GEOMETRY, geometry);
    this.changed();
  }
 

  positionError_(error: GeolocationPositionError) {
    this.dispatchEvent(new GeoSimulationError(error));
  }
 
  /**
  * Get the accuracy of the position in meters.
  * @return {number|undefined} The accuracy of the position measurement in
  *     meters.
  * @observable
  * @api
  */
  getAccuracy() {
    return /** @type {number|undefined} */ (this.get(Property.ACCURACY));
  }
 
  /**
  * Get a geometry of the position accuracy.
  * @return {?import("./geom/Polygon.js").default} A geometry of the position accuracy.
  * @observable
  * @api
  */
  getAccuracyGeometry() {
    return /** @type {?import("./geom/Polygon.js").default} */ (
      this.get(Property.ACCURACY_GEOMETRY) || null
    );
  }
 
  /**
  * Get the altitude associated with the position.
  * @return {number|undefined} The altitude of the position in meters above mean
  *     sea level.
  * @observable
  * @api
  */
  getAltitude() {
    return /** @type {number|undefined} */ (this.get(Property.ALTITUDE));
  }
 
  /**
  * Get the altitude accuracy of the position.
  * @return {number|undefined} The accuracy of the altitude measurement in
  *     meters.
  * @observable
  * @api
  */
  getAltitudeAccuracy() {
    return /** @type {number|undefined} */ (
      this.get(Property.ALTITUDE_ACCURACY)
    );
  }
 
  /**
  * Get the heading as radians clockwise from North.
  * Note: depending on the browser, the heading is only defined if the `enableHighAccuracy`
  * is set to `true` in the tracking options.
  * @return {number|undefined} The heading of the device in radians from north.
  * @observable
  * @api
  */
  getHeading() {
    return /** @type {number|undefined} */ (this.get(Property.HEADING));
  }

  /**
  * Get the position of the device.
  * @return {import("./coordinate.js").Coordinate|undefined} The current position of the device reported
  *     in the current projection.
  * @observable
  * @api
  */
  getPosition() {
    return /** @type {import("./coordinate.js").Coordinate|undefined} */ (
      this.get(Property.POSITION)
    );
  }

  /**
  * Get the projection associated with the position.
  * @return {import("./proj/Projection.js").default|undefined} The projection the position is
  *     reported in.
  * @observable
  * @api
  */
  getProjection() {
    return /** @type {import("./proj/Projection.js").default|undefined} */ (
      this.get(Property.PROJECTION)
    );
  }

  /**
  * Get the speed in meters per second.
  * @return {number|undefined} The instantaneous speed of the device in meters
  *     per second.
  * @observable
  * @api
  */
  getSpeed() {
    return /** @type {number|undefined} */ (this.get(Property.SPEED));
  }

  /**
  * Determine if the device location is being tracked.
  * @return {boolean} The device location is being tracked.
  * @observable
  * @api
  */
  getTracking() {
    return /** @type {boolean} */ (this.get(Property.TRACKING));
  }

  /**
  * Get the tracking options.
  * See https://www.w3.org/TR/geolocation-API/#position-options.
  * @return {PositionOptions|undefined} PositionOptions as defined by
  *     the [HTML5 Geolocation spec
  *     ](https://www.w3.org/TR/geolocation-API/#position_options_interface).
  * @observable
  * @api
  */
  getTrackingOptions() {
    return /** @type {PositionOptions|undefined} */ (
      this.get(Property.TRACKING_OPTIONS)
    );
  }

  /**
  * Set the projection to use for transforming the coordinates.
  * @param {import("./proj.js").ProjectionLike} projection The projection the position is
  *     reported in.
  * @observable
  * @api
  */
  setProjection(projection) {
    this.set(Property.PROJECTION, getProjection(projection));
  }

  /**
  * Enable or disable tracking.
  * @param {boolean} tracking Enable tracking.
  * @observable
  * @api
  */
  setTracking(tracking) {
    this.set(Property.TRACKING, tracking);
  }

  /**
  * Set the tracking options.
  * See http://www.w3.org/TR/geolocation-API/#position-options.
  * @param {PositionOptions} options PositionOptions as defined by the
  *     [HTML5 Geolocation spec
  *     ](http://www.w3.org/TR/geolocation-API/#position_options_interface).
  * @observable
  * @api
  */
  setTrackingOptions(options) {
    this.set(Property.TRACKING_OPTIONS, options);
  }
}
 
export default GeoSimulation;
 