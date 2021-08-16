<template>
  <div id="app">
    <PageBody />
  </div>
</template>

<script>
import PageBody from './components/PageBody.vue'

export default {
  name: 'App',
  components: {
    PageBody
  }
}
</script>

<style>
* {
  overflow-x: hidden;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
