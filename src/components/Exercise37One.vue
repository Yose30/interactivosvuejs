<template>
  <div class="container">
    <p class="text-left">
      <b>1.</b> Match each food word to its corresponding picture as you listen. Are there any similar words to Spanish? Tick ( ✓ ) the food you like.
    </p>
    <div class="text-left">
      <button class="btn" @click="playTrack">
        <img id="btnTrack" src="../assets/img/play.png" alt="Play" />
      </button>
      <button class="btn" @click="pauseTrack">
        <img id="btnTrack" src="../assets/img/pausa.png" alt="Pause" />
      </button>
    </div>
    <div class="row">
      <div class="col-md-9">
        <div class="row">
          <div v-for="(option, item) in options" v-bind:key="item" id="elements">
            <div class="row">
              <div class="col-sm-3" id="numberElem">
                <drag v-if="option.status" class="drag" :transfer-data="{ answer: option.option }">
                  {{ option.number }}
                </drag>
                <p v-else id="numberDisa">{{ option.number }}</p>
              </div>
              <div>
                <img v-if="option.status" :src="option.image" alt=""/>
                <img v-else :src="option.image" id="select" alt=""/>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-3">
        <div v-for="(answer, item) in answers" v-bind:key="item">
          <div class="row">
            <div class="col-sm-4">
              <drop class="drop" @dragover="assign(answer, item)" @dragleave="selection = {}" @drop="handleDrop">
                <p v-if="answer.status">{{ answer.number }}</p>
              </drop>
            </div>
            <div class="col-sm-8 text-left">{{ answer.answer }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Drag, Drop } from 'vue-drag-drop'

export default {
  components: { Drag, Drop },
  name: 'Exercise37One',
  data () {
    return {
      count: 0,
      selection: {number: null, answer: '', status: false, i: null},
      options: [
        {number: 1, option: 'fish', status: true, image: require('@/assets/exercise37-1/fish.jpg')},
        {number: 2, option: 'pear', status: true, image: require('@/assets/exercise37-1/pera.png')},
        {number: 3, option: 'potato', status: true, image: require('@/assets/exercise37-1/papas.jpg')},
        {number: 4, option: 'ice cream', status: true, image: require('@/assets/exercise37-1/helado.jpg')},
        {number: 5, option: 'bread', status: true, image: require('@/assets/exercise37-1/pan.jpg')},
        {number: 6, option: 'banana', status: true, image: require('@/assets/exercise37-1/platanos.jpg')},
        {number: 7, option: 'watermelon', status: true, image: require('@/assets/exercise37-1/sandia.jpg')},
        {number: 8, option: 'lettuce', status: true, image: require('@/assets/exercise37-1/lechuga.jpg')},
        {number: 9, option: 'apple', status: true, image: require('@/assets/exercise37-1/manzanas.jpg')},
        {number: 10, option: 'rice', status: true, image: require('@/assets/exercise37-1/arroz.jpg')},
        {number: 11, option: 'cookie', status: true, image: require('@/assets/exercise37-1/galletas.jpg')},
        {number: 12, option: 'chicken', status: true, image: require('@/assets/exercise37-1/pollo.jpg')},
        {number: 13, option: 'grapes', status: true, image: require('@/assets/exercise37-1/uvas.jpg')},
        {number: 14, option: 'avocado', status: true, image: require('@/assets/exercise37-1/aguacate.jpg')},
        {number: 15, option: 'eggs', status: true, image: require('@/assets/exercise37-1/huevos.jpg')},
        {number: 16, option: 'meat', status: true, image: require('@/assets/exercise37-1/carne.jpg')},
        {number: 17, option: 'oil', status: true, image: require('@/assets/exercise37-1/aceite.png')},
        {number: 18, option: 'candy', status: true, image: require('@/assets/exercise37-1/dulces.jpg')},
        {number: 19, option: 'milk', status: true, image: require('@/assets/exercise37-1/leche.jpg')}
      ],
      answers: [
        {number: 5, answer: 'bread', status: false},
        {number: 15, answer: 'eggs', status: false},
        {number: 16, answer: 'meat', status: false},
        {number: 1, answer: 'fish', status: false},
        {number: 7, answer: 'watermelon', status: false},
        {number: 6, answer: 'banana', status: false},
        {number: 10, answer: 'rice', status: false},
        {number: 9, answer: 'apple', status: false},
        {number: 3, answer: 'potato', status: false},
        {number: 8, answer: 'lettuce', status: false},
        {number: 14, answer: 'avocado', status: false},
        {number: 13, answer: 'grapes', status: false},
        {number: 2, answer: 'pear', status: false},
        {number: 12, answer: 'chicken', status: false},
        {number: 17, answer: 'oil', status: false},
        {number: 11, answer: 'cookie', status: false},
        {number: 19, answer: 'milk', status: false},
        {number: 4, answer: 'ice cream', status: false},
        {number: 18, answer: 'candy', status: false}
      ],
      play: false,
      pause: true
    }
  },
  methods: {
    handleDrop (data) {
      if (data.answer === this.selection.answer) {
        this.options.forEach(option => {
          if (option.number === this.selection.number) {
            option.status = false
            this.count += 1
          }
        })
        this.answers[this.selection.i].status = true
        if (this.count === 19) {
          this.$swal(
            'Well done!',
            '',
            'success'
          )
        }
      } else {}
    },
    assign (answer, item) {
      this.selection = {
        number: answer.number,
        answer: answer.answer,
        status: false,
        i: item
      }
    },
    playTrack () {
      var track = new Audio(require('../assets/audios/40Pista.mp3'))
      track.play()
      this.play = true
      this.pause = false
    },
    pauseTrack () {
      var track = new Audio(require('../assets/audios/40Pista.mp3'))
      track.pause()
      this.pause = true
      this.play = false
    }
  }
}
</script>

<style scoped>
  b {
    color: red;
    font-size: 20px;
  }
  img {
    width: 80px;
    height: 80px;
  }
  .drop {
    border-style: solid;
    border-width: 2px;
    width: 40px;
    height: 40px;
  }
  #numberElem{
    /* border-style: solid;
    border-width: 2px; */
    font-size: 20px;
    width: 40px;
    height: 40px;
    display: flex;
  }
  #elements {
    padding: 30px 30px;
  }
  #select {
    opacity: 0.5;
  }
  #numberDisa {
    color: grey;
  }
  #btnTrack {
    width: 30px;
    height: 30px;
  }
</style>
