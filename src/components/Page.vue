<template>
  <div>
    <homeHeader :page="'home'"></homeHeader>
      <div id="divContent" class="container">
        <br>
        <div id="pageOne" align="left" v-if="$route.params.num == 'page1'"> 
          <button class="btn" @click="goToRoute('exercise6')" id="page1B1">botton botton botton botton botton botton botton botton</button> <br>
          <button class="btn" @click="goToRoute('exercise7')" id="page1B2">botton botton botton botton botton botton botton botton</button> <br>
          <button class="btn" @click="goToRoute('exercise9')" id="page1B3">botton botton botton botton botton botton botton botton</button>
        </div>
        <div id="pageTwo" align="left" v-if="$route.params.num == 'page2'">
          <button class="btn" @click="goToRoute('exercise8')" id="page2B1">botton botton botton botton botton botton botton botton</button> <br>
          <button class="btn" @click="goToRoute('exercise12')" id="page2B2">botton botton botton botton botton botton botton botton</button> <br>
          <button class="btn" @click="goToRoute('exercise10')" id="page2B3">botton botton botton botton botton botton botton botton</button>
        </div>
        <div id="pageThree" align="left" v-if="$route.params.num == 'page3'">
          <button class="btn" @click="goToRoute('exercise15')" id="page3B1">botton botton botton botton botton botton botton botton</button> <br>
          <button class="btn" @click="goToRoute('exercise13')" id="page3B2">botton botton botton botton botton botton botton botton</button>
        </div>
        <div id="pageFour" align="left" v-if="$route.params.num == 'page4'">
          <button class="btn" @click="goToRoute('exercise5')" id="page4B1">botton botton botton botton botton botton botton botton</button> <br>
          <button class="btn" @click="goToRoute('exercise11')" id="page4B2">botton botton botton botton botton botton botton botton</button>
        </div>
        <div id="pageFive" align="left" v-if="$route.params.num == 'page5'">
          <button class="btn" @click="goToRoute('exercise14')" id="page5B1">botton botton botton botton botton botton botton botton</button>
        </div>
        <div id="pageSix" align="left" v-if="$route.params.num == 'page6'">
          <button class="btn" @click="goToRoute('exercise2')" id="page6B1">botton botton botton botton botton botton botton botton</button>
        </div>
        <div id="pageSeven" align="left" v-if="$route.params.num == 'page7'">
          <button class="btn" @click="goToRoute('exercise4')" id="page7B1">botton botton botton botton botton botton botton botton</button> <br>
          <button class="btn" @click="goToRoute('exercise16')" id="page7B2">botton botton botton botton botton botton botton botton</button> <br>
          <button class="btn" @click="goToRoute('exercise17')" id="page7B3">botton botton botton botton botton botton botton botton</button>
        </div>
        <div id="pageEight" align="left" v-if="$route.params.num == 'page8'">
          <button class="btn" @click="goToRoute('exercise1')" id="page8B1">botton botton botton botton botton botton botton botton</button>
        </div>
        <div id="pageNine" align="left" v-if="$route.params.num == 'page9'">
          <button class="btn" @click="goToRoute('exercise18')" id="page9B1">botton botton botton botton botton botton botton botton</button> <br>
          <!-- <button class="btn" id="page9B2">botton botton botton botton botton botton botton botton</button> -->
        </div>
        <div id="pageTen" align="left" v-if="$route.params.num == 'page10'">
          <button class="btn" @click="goToRoute('exercise19')" id="page10B1">botton botton botton botton botton botton botton botton</button> <br>
          <!-- <button class="btn" id="page10B2">botton botton botton botton botton botton botton botton</button> -->
        </div>
      </div>
  </div>
</template>

<script>
import HomeHeader from './HomeHeader'
export default {
  name: 'Page',
  components: { 'homeHeader': HomeHeader},
  data () {
    return {
      
    }
  },
  methods: {
    goToRoute (exercise) {
      this.$router.push({name: exercise})
    }
  }
}
</script>

<style scoped>
  #pageOne, #pageTwo, #pageThree, #pageFour, #pageFive, #pageSix, #pageSeven, #pageEight, #pageNine, #pageTen{
    width: 100%;
    height: 900px;
  }
  #page1B1, #page1B2, #page1B3, #page2B1, #page2B2, #page2B3, #page3B1, #page3B2,
  #page4B1, #page4B2, #page5B1, #page5B2, #page6B1, #page7B1, #page7B2, #page7B3,
  #page8B1, #page9B1, #page9B2, #page10B1, #page10B2 {
    color: transparent;
    background-size: 100%;
    border: 2px solid red;
    border-radius: 50%;
    height: 35px;
  }
  #pageOne { background: url('../assets/pages/page1.svg') no-repeat; }
  #pageTwo { background: url('../assets/pages/page2.svg') no-repeat; }
  #pageThree { background: url('../assets/pages/page3.svg') no-repeat; }
  #pageFour { background: url('../assets/pages/page4.svg') no-repeat; }
  #pageFive { background: url('../assets/pages/page5.svg') no-repeat; }
  #pageSix { background: url('../assets/pages/page6.svg') no-repeat; }
  #pageSeven { background: url('../assets/pages/page7.svg') no-repeat; }
  #pageEight { background: url('../assets/pages/page8.svg') no-repeat; }
  #pageNine { background: url('../assets/pages/page9.svg') no-repeat; }
  #pageTen { background: url('../assets/pages/page10.svg') no-repeat; }

  #page1B1 {
    margin-left: 6%;
    margin-top: 9%;
  }
  #page1B2 {
    margin-left: 6%;
    margin-top: 20%;
  }
  #page1B3 {
    margin-left: 6%;
    margin-top: 24%;
  }

  #page2B1 {
    margin-left: 8%;
    margin-top: 11%;
  }
  #page2B2 {
    margin-left: 7%;
    margin-top: 19%;
  }
  #page2B3 {
    margin-left: 7%;
    margin-top: 21%;
  }

  #page3B1 {
    margin-left: 7%;
    margin-top: 13%;
  }
  #page3B2 {
    margin-left: 7%;
    margin-top: 24%;
  }

  #page4B1 {
    margin-left: 7%;
    margin-top: 10%;
  }
  #page4B2 {
    margin-left: 7%;
    margin-top: 29%;
  }

  #page5B1 {
    margin-left: 7%;
    margin-top: 12%;
  }
  #page5B2 {
    margin-left: 7%;
    margin-top: 31%;
  }

  #page6B1 {
    margin-left: 7%;
    margin-top: 13%;
  }

  #page7B1 {
    margin-left: 6%;
    margin-top: 9%;
  }
  #page7B2 {
    margin-left: 6%;
    margin-top: 9%;
  }
  #page7B3 {
    margin-left: 6%;
    margin-top: 22%;
  }

  #page8B1 {
    margin-left: 6%;
    margin-top: 12%;
  }

  #page9B1 {
    margin-left: 8%;
    margin-top: 12%;
  }
  #page9B2 {
    margin-left: 8%;
    margin-top: 28%;
  }

  #page10B1 {
    margin-left: 7%;
    margin-top: 12%;
  }
  #page10B2 {
    margin-left: 7%;
    margin-top: 28%;
  }
</style>
