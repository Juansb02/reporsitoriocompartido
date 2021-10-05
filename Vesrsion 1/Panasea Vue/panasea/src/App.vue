<template>
  <barra-menu/>
  <router-view/>
</template>

<script>
import BarraMenu from '@/components/Menu.vue'
export default {
  name: 'App',
  components: {
    BarraMenu
  }
}
</script>

<style>

</style>