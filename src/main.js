// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import Vue from 'vue';

import Buefy from 'buefy'
import 'buefy/dist/buefy.css'
Vue.use(Buefy)

// import { LMap, LTileLayer, LMarker } from 'vue2-leaflet';
// import 'leaflet/dist/leaflet.css';

// Vue.component('l-map', LMap);
// Vue.component('l-tile-layer', LTileLayer);
// Vue.component('l-marker', LMarker);


import DefaultLayout from '~/layouts/Default.vue'

export default function (Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)
}
