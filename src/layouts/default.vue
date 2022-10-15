<template>
  <div class="bg">
    <div class="layout">
      <Headbar></Headbar> 
      <slot />
    </div>
  </div>
</template>

<style lang="css">
.bg-1 {
  background-image: url('~/assets/bg.jpg');
  background-position-y: 13%;
  color: #ffffff;
}
.bg-2 {
  background-image: url('~/assets/bg.jpg');
  background-position-y: 23%;
  color: #ffffff;
}
.bg-3 {
  background-image: url('~/assets/bg.jpg');
  background-position-y: 33%;
  color: #ffffff;
}
</style>