import BaseEvent from "ol/events/Event";
import EventType from 'ol/events/EventType.js';

 /**
  * @classdesc
  * Events emitted on GeoSimulation error.
  */
  class GeoSimulationError extends BaseEvent {
    /**
     * @param {GeolocationPositionError} error error object.
     */
    constructor(error) {
      super(EventType.ERROR);
  
      /**
       * @type {number}
       */
      this.code = error.code;
  
      /**
       * @type {string}
       */
      this.message = error.message;
    }
  }

  export default GeoSimulationError;