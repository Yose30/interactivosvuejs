<template>
  <div id="app">
    <!-- <ExerciseOne/> -->
    <!-- <ExerciseTwo/> -->
    <Exercise37One/>
    <Home/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld'
import Home from './components/Home'
import ExerciseOne from './components/ExerciseOne'
import ExerciseTwo from './components/ExerciseTwo'
import Exercise37One from './components/Exercise37One'

export default {
  name: 'App',
  components: {
    HelloWorld,
    Home,
    ExerciseOne,
    ExerciseTwo,
    Exercise37One
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
