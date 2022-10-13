<template>
  <div class="bg">
    <slot />
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<style lang="css">
.bg-1 {
  background-image: url('~@/images/bg.jpg');
  background-position-y: 13%;
  color: #ffffff;
}
.bg-2 {
  background-image: url('~@/images/bg.jpg');
  background-position-y: 23%;
  color: #ffffff;
}
.bg-3 {
  background-image: url('~@/images/bg.jpg');
  background-position-y: 33%;
  color: #ffffff;
}
</style>