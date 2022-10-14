<template>
  <Layout>

    <div class="container">

      <Headbar></Headbar>

      <div class="content mt-4">

        <h3>War targets</h3>

        <!-- l-map v-bind:zoom="3" v-bind:center="mapParams.center" style="height: 80vh; width: 100%" ref="map1" v-on:click="onMapClick">
            <l-tile-layer v-bind:url="mapParams.url" v-bind:attributionControl="false" />
            <l-marker v-if="mapParams.position" v-bind:lat-lng="mapParams.position" ></l-marker>
        </l-map -->

        <div class="box">
            Collecting information
        </div>

      </div>

    </div>
  </Layout>
</template>

<script>
// https://hi-news.ru/eto-interesno/kakie-goroda-rossii-i-ssha-postradayut-v-sluchae-yadernoj-vojny.html
// https://www.nytimes.com/2015/12/23/us/politics/1950s-us-nuclear-target-list-offers-chilling-insight.html
// https://survival-mastery.com/category/skills/evacuation


import Headbar from "../components/headbar.vue";

// import { latLng, icon } from "leaflet";
// import { Icon } from 'leaflet';

// delete Icon.Default.prototype._getIconUrl;
// Icon.Default.mergeOptions({
//   iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
//   iconUrl: require('leaflet/dist/images/marker-icon.png'),
//   shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
// });

export default {
  components: {
    Headbar
  },
  data() {
    return {
      mapParams: {
        zoom: 13,
        center: null,
        url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
        position: null
      },
      currentDateTime: new Date(),
    }
  },
  methods: {
    onMapClick(e) {
      console.log(e);
    }
  }
}
</script>