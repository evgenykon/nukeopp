<template>
  <div class="bg" v-on:scroll="handleScroll" style="overflow:auto;height:100%;">
    <div class="layout">
      <Headbar></Headbar> 
      <slot />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  methods: {
    handleScroll(e) {
      console.log(e);
    }
  },
});
</script>

<style lang="css">
.bg-img {
  background-image: url('~/assets/bg.jpg');
  color: #ffffff;
}
</style>