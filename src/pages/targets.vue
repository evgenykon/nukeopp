<page>
title: War targets - Nuclear Opposition
</page>
    
<template>
<div>
    <div class="container">
        <div class="content mt-4">
            <h3>War targets</h3>
        </div>
    </div>

    
    <div id="map" class="map__x" ref="map" style="width:100%; height: 60vh;"></div>
    <div class="container mt-3">
        
        <ContentWarning />
        <div class="content">
            <div class="columns">
                <div class="column">
                    <label class="checkbox" disabled>
                        <input type="checkbox" disabled> countries can be involved in the war
                    </label>
                </div>
                <div class="column">
                    <label class="checkbox" disabled>
                        <input type="checkbox" disabled> 1100 targets from Cold War Nuclear Target Lists'59
                    </label>
                </div>
                <div class="column">
                    <label class="checkbox" disabled>
                        <input type="checkbox" disabled> US radar bases and launchers
                    </label>
                </div>
                <div class="column">
                    <label class="checkbox" disabled>
                        <input type="checkbox" disabled> NATO military bases
                    </label>
                </div>
            </div>
        </div>
    </div>
</div>

</template>

<script setup lang="ts">
import { defineComponent } from 'vue';
import 'ol/ol.css'


import Map from 'ol/Map';
import View from 'ol/View';

import OSM from 'ol/source/OSM';
import {fromLonLat} from 'ol/proj';

import TileLayer from 'ol/layer/WebGLTile';
</script>

<script lang="ts">


export default defineComponent({
  data() {
    return {}
  },
  mounted() {
    new Map({
        target: 'map',
        layers: [
            new TileLayer({source: new OSM(),}),
        ],
        view: new View({
            center: fromLonLat([0, 50]),
            zoom: 1,
        }),
    });
  }
});
</script>
