<template>
  <div id="divContent" class="container">
    <div id="divPage1" v-if="$route.params.num == 'page1'">
      <img id="pageOne" :src="require(`@/assets/pages/${$route.params.num}.svg`)">
      <button class="btn" id="page1B1">botton botton botton botton botton botton</button>
    </div>
    <div id="divPage2" v-if="$route.params.num == 'page2'">
      <img id="pageTwo" :src="require(`@/assets/pages/${$route.params.num}.svg`)">

    </div>
    <div id="divPage3" v-if="$route.params.num == 'page3'">
      <img id="pageThree" :src="require(`@/assets/pages/${$route.params.num}.svg`)">
    
    </div>
    <div id="divPage4" v-if="$route.params.num == 'page4'">
      <img id="pageFour" :src="require(`@/assets/pages/${$route.params.num}.svg`)">
    
    </div>
    <div id="divPage5" v-if="$route.params.num == 'page5'">
      <img id="pageFive" :src="require(`@/assets/pages/${$route.params.num}.svg`)">
    
    </div>
    <div id="divPage6" v-if="$route.params.num == 'page6'">
      <img id="pageSix" :src="require(`@/assets/pages/${$route.params.num}.svg`)">
    </div>
    <div id="divPage7" v-if="$route.params.num == 'page7'">
      <img id="pageSeven" :src="require(`@/assets/pages/${$route.params.num}.svg`)">
    
    </div>
    <div id="divPage8" v-if="$route.params.num == 'page8'">
      <img id="pageEight" :src="require(`@/assets/pages/${$route.params.num}.svg`)">
    
    </div>
    <div id="divPage9" v-if="$route.params.num == 'page9'">
      <img id="pageNine" :src="require(`@/assets/pages/${$route.params.num}.svg`)">
    
    </div>
    <div id="divPage10" v-if="$route.params.num == 'page10'">
      <img id="pageTen" :src="require(`@/assets/pages/${$route.params.num}.svg`)">
    </div>
  </div>
</template>

<script>
export default {
  name: 'Page',
  data () {
    return {
      
    }
  },
  methods: {
    
  }
}
</script>

<style scoped>
  #pageOne, #pageTwo, #pageThree, #pageFour, #pageFive, #pageSix, #pageSeven, #pageEight, #pageNine, #pageTen{
    border: none;
    width: 100%;
    height: 800px;
  }
  #divPage1 {
    
  }
  #page1B1 {
    background-size: 100%;
    border: 2px solid red;
    border-radius: 50%;
    height: 50px;
  }
  #pageOne {
    
    z-index:1;
  }
  #page1B1 {
    position: absolute;
    z-index:2;
    top: 5px;
    left: 100px;
    width: 290px;
    color: transparent;
  }
</style>
