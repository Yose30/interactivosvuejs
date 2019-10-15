<template>
  <div class="container">
     <div class="contenido-titulo">
      <h1 class="titulo-ejercicios">VERDADERO - FALSO</h1>
    </div>
    <p class="instrucciones">
      <b class="numero-vineta">1.  </b> <span class="numeracion-multimedia">  <font-awesome-icon icon="music"  />  Track # </span>Listen to the conversation. Circle the celebration they are talking about.
    </p>
    <div class="multimedia">
      <audio controls>
        <source src="../assets/audios/47Pista.mp3">
      </audio>
    </div>
    <div class="row">
      <div class="col-md-4"  v-for="(celebration, i) in celebrations" v-bind:key="i" >
        <button class="btn" @click="selectImage(celebration, i)"><img id="imgExc5" :src="require(`@/assets/imgs/exercise5/${celebration.image}.jpg`)" :alt="celebration.answer"></button>
      </div>
    </div>
    <hr>
    <p class="instrucciones">
      <b class="numero-vineta">2.  </b> <span class="numeracion-multimedia">  <font-awesome-icon icon="music"  />  Track # </span>Listen again. Match the pictures to the words.
    </p>
    <div align="right">
      <button class="btn btn-finish" @click="onEvaluate()">Check</button>
    </div>
    <div class="row">
        <div class="col-md-6" align="center">
            <div class="palabrase5" v-for="(sentence, i) in sentences" v-bind:key="i">
                <drag class="drag" :transfer-data="{ option: sentence.answer }">
                  {{ sentence.answer }}
                </drag>
                <!-- v-if="!sentence.state" -->
                <!-- <div id="colorText" v-else>{{ sentence.answer }}</div> -->
            </div>
        </div>
        <div class="col-md-6" align="center">
            <div v-for="(image, i) in images" v-bind:key="i">
                <img :src="require(`@/assets/imgs/exercise5/${image.answer}.jpg`)" alt="">
                <drop 
                  :id="`boxDrop5-${i}`"
                  class="drop classDrop5"
                  @dragover="assign(image, i)"
                  @dragleave="selection = {}"
                  @drop="handleDrop">
                    <p>{{ image.selected }}</p>
                </drop>
                <br>
            </div>
        </div>
    </div>
    
  </div>
</template>

<script>
import exercise51 from '@/assets/json/exercise5-1.json'
import exercise52 from '@/assets/json/exercise5-2.json'
import exercise53 from '@/assets/json/exercise5-3.json'
import { Drag, Drop } from 'vue-drag-drop'
export default {
  name: 'Exercise5',
  data () {
    return {
        options1: exercise51,
        options2: exercise52,
        options3: exercise53,
        sentences: [],
        images: [],
        celebrations: [],
        selection: {
          answer: '',
          position: 0
        },
        dates1: {},
        dates2: {},
        dates3: [],
        count: 0,
        corrects: 0,
        positions: []
    }
  },
  created: function () {
    this.show()
  },
  methods: {
    selectImage(celebration, i) {
      if (celebration.state) {
        this.$swal(
          'Well done!',
          '',
          'success'
        )
      }
      else{
        this.$swal(
          'Try again',
          '',
          'error'
        )
      }
    },
    show () {
      var max1 = Object.keys(this.options1).length
      var max2 = Object.keys(this.options2).length
      var max3 = Object.keys(this.options3).length
      for (var i = 0; i < max1; i ++) {
          var num_alet1 = this.randomSent(max1)
          this.dates1 = {
            id: this.options1[num_alet1].id,
            answer: this.options1[num_alet1].answer,
            state: this.options1[num_alet1].state
          }
          this.sentences.push(this.dates1)
      }
      this.positions = []
      for (var i = 0; i < max2; i ++) {
          var num_alet2 = this.randomSent(max2)
          this.dates2 = {
            id: this.options2[num_alet2].id,
            answer: this.options2[num_alet2].answer,
            selected: this.options2[num_alet2].selected,
            state: this.options2[num_alet2].state
          }
          this.images.push(this.dates2)
      }
      this.positions = []
      for (var i = 0; i < max3; i ++) {
          var num_alet3 = this.randomSent(max3)
          this.dates3 = {
            id: this.options3[num_alet3].id,
            answer: this.options3[num_alet3].answer,
            image: this.options3[num_alet3].image,
            state: this.options3[num_alet3].state
          }
          this.celebrations.push(this.dates3)
      }
      this.positions = []
    },
    handleDrop (data) {
      this.images[this.selection.position].selected = data.option
    },
    assign (image, i) {
        this.selection.answer = image.answer
        this.selection.position = i
        this.sentences[i].state = true
    },
    onEvaluate () {
      this.count = 0
      for (const i in this.images) {
        if (this.images[i].selected != '') {
          this.count += 1
        }
      }
      if (this.count == Object.keys(this.images).length) {
        this.corrects = 0
        for (const i in this.images) {
          document.getElementById(`boxDrop5-${i}`).style.borderColor = '#c1c1c1'
          if (this.images[i].selected === this.images[i].answer) {
            this.corrects += 1
          }
          else{
            document.getElementById(`boxDrop5-${i}`).style.borderColor = 'red'
          }
        }
        if (this.corrects === 4) {
          this.$swal(
            'Well done!',
            '',
            'success'
          )
        }
      }
    },
    randomSent (max) {
      if(this.positions.length != max) {
        while (repe != false) {
          var aleatorio = Math.floor(Math.random() * (max - 0) + 0)
          var repe = this.repeated(aleatorio, max)
        }
        this.positions.push(aleatorio)
        return aleatorio
      }
    },
    repeated (num, max) {
      var repet = false
      for (var i = 0; i < max; i ++) {
        if(num == this.positions[i]) {
          repet = true
        }
      }
      return repet
    }
  }
}
</script>

<style scoped>
</style>
