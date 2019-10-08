<template>
  <div id="app">
    <router-view></router-view>
    <!-- <hr>
    <draw></draw> -->
  </div>
</template>

<script>
import Draw from './components/Draw'
export default {
  name: 'App',
  components: {
    Draw
  }
}
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
