<template>
  <div class="bg">
    <div class="layout">
      <Headbar></Headbar> 
      <slot />
    </div>
  </div>
</template>

<style lang="css">
.bg-img {
  background-image: url('~/assets/bg.jpg');
  color: #ffffff;
}
</style>