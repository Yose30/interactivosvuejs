<template>
  <div class="container">
     <div class="contenido-titulo">
      <h1 class="titulo-ejercicios">VERDADERO - FALSO</h1>
    </div>
    <p class="instrucciones">
      <b class="numero-vineta">1.  </b> <span class="numeracion-multimedia">  <font-awesome-icon icon="music"  />  Track 20 </span>Listen to the conversation. Circle the celebration they are talking about.
    </p>
    <div class="multimedia">
      <audio controls>
        <source src="../assets/audios/47Pista.mp3">
      </audio>
    </div>
    <div class="row">
      <div class="col-md-4">
        <img id="imgExc5" :src="require(`@/assets/imgs/exercise5/calavera.jpg`)" alt="">
      </div>
      <div class="col-md-4">
        <img id="imgExc5" :src="require(`@/assets/imgs/exercise5/monumento.jpg`)" alt="">
      </div>
      <div class="col-md-4">
        <img id="imgExc5" :src="require(`@/assets/imgs/exercise5/angel.jpg`)" alt="">
      </div>
    </div>
    <hr>
    <p class="instrucciones">
      <b class="numero-vineta">2.  </b> <span class="numeracion-multimedia">  <font-awesome-icon icon="music"  />  Track 20 </span>Listen again. Match the pictures to the words.
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
import { Drag, Drop } from 'vue-drag-drop'
export default {
  name: 'Exercise5',
  data () {
    return {
        sentences: exercise51,
        images: exercise52,
        selection: {
          answer: '',
          position: 0
        },
        count: 0,
        corrects: 0,

    }
  },
  methods: {
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
    }
  }
}
</script>

<style scoped>
</style>
