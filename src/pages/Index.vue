<template>
  <Layout>


    <div class="container">

      <b-navbar>
        <template #brand>
          <b-navbar-item tag="router-link" :to="{ path: '/' }">
            <strong>☢️ Nuclear opposition</strong>
              <!-- g-image alt="Example image" src="~/images/evgeny-kon-500x500.jpg" width="30" / -->
          </b-navbar-item>
        </template>
        <template #start>
          <b-navbar-item>🗺️ Global target map</b-navbar-item>
          <b-navbar-item>📜 War scenarios</b-navbar-item>
          <b-navbar-item>💼 Alarm Case</b-navbar-item>
          <b-navbar-item>❤️ First aid</b-navbar-item>
          <b-navbar-item>📋 Cheatsheet</b-navbar-item>
        </template>
        <template #end>
            <b-navbar-dropdown label="Languages">
                <b-navbar-item>English</b-navbar-item>
                <!-- b-navbar-item>Russian</b-navbar-item -->
            </b-navbar-dropdown>
        </template>

      </b-navbar>

      <div class="content">

        <div class="notification is-link">Nuclear opposition is all of us.</div>

        <h4>General Important Information</h4>
        <ol>
          <li>Last information update was at <strong class="tag">October 11, 2022</strong>. At this moment we are on the brink of nuclear war.</li>
          <li>It is <strong class="tag">100 seconds</strong> to midnight according to <a href="https://thebulletin.org/doomsday-clock/">Doomsday Clock</a> since <strong class="tag">January 20, 2022</strong></li>
          <li>There are several signals from russian leaders of readiness to use Nuclear Weapon. Thats why we should expect main threat from Russia. Another source of threat is North Korea who conducts missile tests at this moment.</li>
          <li>I hope this project helps us to avoid the threat. And will help to find a way to survive in other case.</li>
        </ol>

        <h4><a href="#">Before the War starts</a></h4>
        <p>There are some simple steps that should be done before something happens.</p>

        <ol>
          <li>
            Check your home location for distance from <a href="#">🗺️ potential targets</a>. If its too close to you then you should try to find any opportunities to move 
            further away BEFORE everything happens.
            <!-- l-map v-bind:zoom="2" v-bind:center="mapParams.center" style="height: 500px; width: 100%" ref="map1" v-on:click="onMapClick">
              <l-tile-layer v-bind:url="mapParams.url" v-bind:attributionControl="false" />
              <l-marker v-if="mapParams.position" v-bind:lat-lng="mapParams.position" ></l-marker>
            </l-map -->  
          </li>
          <li>Prepare <a href="#">💼 "Alarm case"</a>.</li>
          <li>Learn about <a href="#">❤️ first aid</a>.</li>
          <li>Print a <a href="#">📋 Nuclear War Cheatsheet</a>. Discuss with family and friends about your actions during and after explosions.</li>
          <li>Think about what will you do with your pets. </li>
          <li>Try to find out something about your closest shelters. Some information may appear in a few days or hours before attack. </li>
          <li>Learn about <a href="#">📜 probable war scenarios</a>. May be it helps you determine what stage the world is at.</li>
        </ol>
        
        <h4><a href="#">After first explosion</a></h4>
        <p>Each sentence in this chapter are based on some probability, but it doesn't have to happen.  
          But you probably won't be able to read this AFTER. So please print out <a href="#">📋 cheatsheet</a> now. 
          And read just in case at least ones. In critical moment you have only your pure mind and some information that you were able to remember.</p>
        <ol>
          <li>If you are injured</li>
          <li>If you are close to potential targets</li>
          <li>If you are in one of the countries: USA, Russia, China</li>
          <li>If you are far from any shelters</li>
          <li>If you can hide inside shelter without any food or water</li>
          <li>If you did everything well and ended up in a shelter</li>
        </ol>
        
      </div> <!-- end of content -->
      
    </div>

  </Layout>
</template>

<script>

// https://www.indy100.com/viral/map-survive-nuclear-war

import { latLng, icon } from "leaflet";
import { Icon } from 'leaflet';

delete Icon.Default.prototype._getIconUrl;
Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});

export default {
  metaInfo: {
    title: 'Nuclear Opposition'
  },
  components: {
  },
  data() {
    return {
      mapParams: {
        zoom: 13,
        center: latLng(30, 0),
        url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
        position: null
      },
      currentDateTime: new Date(),
    }
  },
  methods: {
    onMapClick(e) {
      console.log(e);
      this.mapParams.position = e.latlng;
    }
  }
}
</script>

<style>
.home-links a {
  margin-right: 1rem;
}
.leaflet-control-attribution.leaflet-control {
  display: none;
} 
</style>
