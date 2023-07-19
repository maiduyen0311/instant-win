<script setup>
import VerticalNav from '@components/VerticalNav.vue'
</script>
<template>
  <VerticalNav></VerticalNav>
  <div class="main__content">
    <router-view />
  </div>
</template>
<style lang="scss">
@import '@sass/pages/admin.scss';
</style>
