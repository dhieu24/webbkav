<template>
    <div id="app">
        <BuildingTemplate></BuildingTemplate>
    </div>
</template>

<script>
import BuildingTemplate from './components/Building/BuildingTemplate.vue'

export default {
  name: 'App',
  components: {
    BuildingTemplate,
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

</style>
