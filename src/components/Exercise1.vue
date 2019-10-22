<template>
  <div id="divContent" class="container">
    <div class="contenido-titulo">
      <h1 class="titulo-ejercicios">Aqui va el titulo</h1>
    </div>
    <p class="instrucciones">
      <b class="numero-vineta">1. </b>Match each food word to its corresponding picture as you listen. Are there any similar words to Spanish? Tick ( <span class="color-paloma">✓</span> ) the food you like. Drag the number to the corresponding box.
    </p>
    <div class="multimedia">
      <audio controls>
        <source src="../assets/audios/exercise1.mp3">
      </audio>
    </div>
    <div class="row">
      <div class="col-md-9">
        <div class="row">
          <div v-for="(option, item) in options" v-bind:key="item" id="elements">
            <div class="row">
              <div class="col-sm-12" id="numberElem">
                <drag v-if="option.status" class="drag" :transfer-data="{ answer: option.option }">
                  {{ option.number }}
                </drag>
                <p v-else id="numberDisa">{{ option.number }}</p>
              </div>
              <div>
                <img v-if="option.status" :src="require(`@/assets/imgs/exercise1/${option.option}.jpg`)" alt=""/>
                <img v-else :src="require(`@/assets/imgs/exercise1/${option.option}.jpg`)" id="select" alt=""/>
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
import exercise1 from '@/assets/json/exercise1.json'
export default {
  components: { Drag, Drop },
  name: 'Exercise37One',
  data () {
    return {
      count: 0,
      selection: {number: null, answer: '', status: false, i: null},
      positions: [],
      opciones: exercise1,
      dates: {},
      options: [],
      answers: []
    }
  },
  created: function () {
    this.show()
  },
  methods: {
    show () {
      var max = Object.keys(this.opciones).length
      for (var i = 0; i < max; i ++) {
          var num_alet = this.randomSent(max)
          this.dates = {
              number: this.opciones[num_alet].number,
              option: this.opciones[num_alet].option,
              status: this.opciones[num_alet].status
          }
          this.options.push(this.dates)
      }
      this.positions = []
      for (var i = 0; i < max; i ++) {
          var num_alet = this.randomSent(max)
          this.dates = {
              number: this.opciones[num_alet].number,
              answer: this.opciones[num_alet].option,
              status: false
          }
          this.answers.push(this.dates)
      }
      this.positions = []
    },
    goHome () {
      this.$router.push({name: 'home'})
    },
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
