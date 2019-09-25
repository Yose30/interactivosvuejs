<template>
  <div class="container">
    <button class="btn btn-primary" @click="home">Iniciar</button>
    <div class="row" v-if="viewImgs">
      <div class="col-md-6" id="divCanvas1">
        <canvas id="img1"></canvas>
        <button id="btnImg1" @click="viewImg1">img1</button>
        <!-- <router-link id="e1" to="/lesson371">botton botton botton botton</router-link> -->
      </div>
      <div class="col-md-6" id="divCanvas2">
        <canvas id="img2"></canvas>
        <!-- <router-link id="e1" to="/lesson461">botton botton botton botton</router-link>
        <router-link id="e2" to="/lesson462">botton botton botton botton</router-link> -->
      </div>
    </div>
    <div v-else>

    </div>
  </div>
</template>

<script>
import pdf from 'vue-pdf'
export default {
  name: 'Home',
  data () {
    return {
      viewImgs: true
    }
  },
  methods: {
    viewImg1 () {
      this.viewImgs = false
    },
    goHome () {
      this.$router.push({name: 'home'})
    },
    home () {
      var canvas1 = document.getElementById('img1')
      var c1 = canvas1.getContext('2d')
      var canvas2 = document.getElementById('img2')
      var c2 = canvas2.getContext('2d')
      c1.lineWidth = 1
      c1.beginPath()
      c1.moveTo(20, 30)
      c1.bezierCurveTo(20, 40, 280, 40, 280, 30)
      c1.strokeStyle = 'red'
      c1.stroke()
      c1.beginPath()
      c1.moveTo(20, 30)
      c1.bezierCurveTo(20, 20, 280, 20, 280, 30)
      c1.strokeStyle = 'red'
      c1.stroke()
      c2.lineWidth = 1
      c2.beginPath()
      c2.moveTo(20, 30)
      c2.bezierCurveTo(20, 40, 280, 40, 280, 30)
      c2.strokeStyle = 'red'
      c2.stroke()
      c2.beginPath()
      c2.moveTo(20, 30)
      c2.bezierCurveTo(20, 20, 280, 20, 280, 30)
      c2.strokeStyle = 'red'
      c2.stroke()
      c2.beginPath()
      c2.moveTo(20, 70)
      c2.bezierCurveTo(20, 80, 280, 80, 280, 70)
      c2.strokeStyle = 'red'
      c2.stroke()
      c2.beginPath()
      c2.moveTo(20, 70)
      c2.bezierCurveTo(20, 60, 280, 60, 280, 70)
      c2.strokeStyle = 'red'
      c2.stroke()
    }
  },
  components: {
    pdf
  }
}
</script>

<style scoped>
  #divCanvas1, #divCanvas2 {
    width: 100%;
    height: 100%;
    display: flex;
  }
  canvas {
    width: 290px;
    height: 370px;
  }
  #img1 {
    background-image: url('../assets/pdf/lesson37_pequena.jpg');
  }
  #img2 {
    background-image: url('../assets/pdf/lesson46_pequena.jpg');
  }
  #btnImg1 {
    z-index:2;
    position: absolute;
    left:10px;
    width: 290px;
    height: 100%;
    background-color: transparent;
    color: transparent;
  }
  #e1 {
    z-index:2;
    position: absolute;
    top:60px;
    left:10px;
    width: 290px;
    color: transparent;
  }
  #e2 {
    z-index:2;
    position: absolute;
    top:165px;
    left:10px;
    width: 290px;
    color: transparent;
  }
</style>
