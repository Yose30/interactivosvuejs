<template>
  <div id="divContent" class="container">
    <b-row>
      <b-col sm="4" v-for="(page, i) in pages" v-bind:key="i">
        <button class="btn" @click="openPage(page)"><img id="pageHome" :src="require(`@/assets/pages/${page.image}.svg`)" alt=""></button>
      </b-col>
    </b-row>
    <!-- <div>
      <img id="pageOne" :src="require(`@/assets/pages/${namePage}.svg`)" alt="">
      <button class="btn" id="exeButton">botton botton botton botton botton botton</button>
    </div> -->
    <!-- <div class="row" v-if="viewImgs">
      <div class="col-md-6" id="divCanvas1">
        <canvas id="img1"></canvas>
        <router-link id="e1" to="/lesson371">botton botton botton botton</router-link>
      </div>
      <div class="col-md-6" id="divCanvas2">
        <canvas id="img2"></canvas>
        <router-link id="e1" to="/lesson461">botton botton botton botton</router-link>
        <router-link id="e2" to="/lesson462">botton botton botton botton</router-link>
      </div>
    </div>
    <div v-else>
      <canvas id="img1"></canvas>
    </div> -->
  </div>
</template>

<script>
import home from '@/assets/json/home.json'
export default {
  name: 'Home',
  data () {
    return {
      viewImgs: true,
      pages: home,
      viewHome: true,
      numPage: null,
      namePage: ''
    }
  },
  // mounted: function () {
  //   this.home()
  // },
  methods: {
    openPage (page) {
      this.$router.push({name: 'page', params: { num: page.image } })
      // this.numPage = page.number
      // this.namePage = page.image
      // this.viewHome = false
      // document.getElementById('canvasImg').style.backgroundImage = require(`@/assets/pages/${page.image}.svg`)
    },
    viewImg1 () {
      // this.viewImgs = false
      var canvas1 = document.getElementById('img1')
      var c1 = canvas1.getContext('2d')
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
    },
    goHome () {
      this.$router.push({name: 'home'})
    },
    home () {
      var canvas1 = document.getElementById('img1')
      var c1 = canvas1.getContext('2d')
      var canvas2 = document.getElementById('img2')
      var c2 = canvas2.getContext('2d')
      
      canvas1.width = 300
      canvas1.height = 400
      c1.lineWidth = 3
      c1.strokeStyle = 'red'
      c1.beginPath()
      c1.moveTo(20, 65)
      c1.bezierCurveTo(20, 90, 280, 90, 280, 65)
      c1.stroke()
      c1.beginPath()
      c1.moveTo(20, 65)
      c1.bezierCurveTo(20, 40, 280, 40, 280, 65)
      c1.stroke()

      // c2.lineWidth = 1
      // c2.beginPath()
      // c2.moveTo(20, 30)
      // c2.bezierCurveTo(20, 40, 280, 40, 280, 30)
      // c2.strokeStyle = 'red'
      // c2.stroke()
      // c2.beginPath()
      // c2.moveTo(20, 30)
      // c2.bezierCurveTo(20, 20, 280, 20, 280, 30)
      // c2.strokeStyle = 'red'
      // c2.stroke()
      // c2.beginPath()
      // c2.moveTo(20, 70)
      // c2.bezierCurveTo(20, 80, 280, 80, 280, 70)
      // c2.strokeStyle = 'red'
      // c2.stroke()
      // c2.beginPath()
      // c2.moveTo(20, 70)
      // c2.bezierCurveTo(20, 60, 280, 60, 280, 70)
      // c2.strokeStyle = 'red'
      // c2.stroke()
    }
  }
}
</script>

<style scoped>
  #page1{
    background-size: 100%;
    background-image: url('../assets/pdf/page1.svg');
  }
  #exeButton {
    background-size: 100%;
    border: 2px solid red;
    border-radius: 50%;
    height: 70px;
  }
  #pageHome{
    border: none;
    width: 100%;
    height: 300px;
  }
  #pageOne{
    border: none;
    width: 100%;
    height: 700px;
  }
  #divCanvas1, #divCanvas2 {
    display: flex;
  }
  canvas {
    width: 290px;
    height: 370px;
  }
  #img1 {
    /* background-image: url('../assets/pdf/page1.svg'); */
    background-size: 100%;
  }
  #img2 {
    background-image: url('../assets/pdf/lesson46_pequena.png');
    background-size: 100%;
  }
  #btnImg1 {
    z-index:2;
    position: absolute;
    left:10px;
    width: 290px;
    height: 100%;
    background-color: transparent;
    border: none;
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
