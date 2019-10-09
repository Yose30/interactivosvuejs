<template>
  <div class="container">
    <p class="instrucciones">
        <b class="numero-vineta">1.</b> Now use letters that are not in the grid to complete these words.
    </p>
    <div>
        <img 
            v-for="(word, i) in words" v-bind:key="i" 
            :src="require(`@/assets/imgs/exercise6/${word.word}.jpg`)" 
            :alt="word.word">
    </div>
    <div>
        <p>
            t<input id="inpExc6" type="text" pattern="e"/>le<input id="inpExc6" type="text" pattern="v"/>isio<input id="inpExc6" type="text" pattern="n"/>
        </p>
        <p>
            sand<input id="inpExc6" type="text" pattern="w"/>i<input id="inpExc6" type="text" pattern="c"/>h
        </p>
        <p>
            <input id="inpExc6" type="text" pattern="s"/><input id="inpExc6" type="text" pattern="o"/>da
        </p>
        <p>
            <input id="inpExc6" type="text" pattern="n"/>ot<input id="inpExc6" type="text" pattern="e"/>b<input id="inpExc6" type="text" pattern="o"/><input id="inpExc6" type="text" pattern="o"/>k
        </p>
        <p>
            p<input id="inpExc6" type="text" pattern="e"/><input id="inpExc6" type="text" pattern="n"/>cil
        </p>
    </div>
    <hr>
    <p class="instrucciones">
        <b class="numero-vineta">2.</b> Choose a word from Activity 1 and play hangman with your partner.
    </p>
    <div align="right">
        <button class="btn btn-primary" @click="onChoose()">Choose a word</button>
    </div>
    <hr>
    <div class="row">
        <div class="col-md-4">
            <canvas id="hangman"></canvas>
        </div>
        <div class="col-md-8" id="inputLetters"></div>
    </div>
  </div>
</template>

<script>
import exercise6 from '@/assets/json/exercise6.json'
import Vue from 'vue'
import VueSweetalert2 from 'vue-sweetalert2'
Vue.use(VueSweetalert2)
export default {
  name: 'Exercise6',
  data () {
    return {
        words: exercise6
    }
  },
  mounted: function () {
    this.drawHangman()
  },
  methods: {
    onChoose () {
        // Variables
        var max = Object.keys(this.words).length
        var aletWord = Math.floor(Math.random() * (max - 0) + 0)
        var word = this.words[aletWord].word
        var maxLetters = word.length
        var letters = []
        var dates = {}
        var countErrors = 0
        var canvas = document.getElementById('hangman')
        var c = canvas.getContext('2d')
        var x1 = 190
        var x2 = 160
        var x3 = 220
        var y1 = 145
        var y2 = 175
        var y3 = 190
        var y4 = x3
        // Limpiar
        document.getElementById('inputLetters').innerHTML = ""
        c.clearRect(x2 - 5, 68, x3 + 5, y3)

        for (var i = 0; i < maxLetters; i ++) {
            dates = {
                letter: word.charAt(i),
                name: 'inp-' + i
            }
            letters.push(dates)
        }

        for (const i in letters) {
            $('#inputLetters').append(`<input style="width:40px;" id="inp-` + i + `" type="text" pattern="` + letters[i].letter + `"/>`)
        }

        for (const i in letters) {
            document.getElementById(letters[i].name).addEventListener("change", function(event){
                if (document.getElementById(letters[i].name).validity.patternMismatch) {
                    countErrors += 1
                    if (countErrors === 1) {
                        c.beginPath()
                        c.strokeStyle = "#000000"
                        // Cabeza
                        c.arc(x1,92,24,0,Math.PI*2,true)
                        c.stroke()
                    }
                    if (countErrors === 2) {
                        c.beginPath()
                        // Cuerpo
                        c.moveTo(x1,115)
                        c.lineTo(x1,y3)
                        // Brazo izquierdo
                        c.moveTo(x1,y1)
                        c.lineTo(x2,y2)
                        // Brazo derecho
                        c.moveTo(x1,y1)
                        c.lineTo(x3,y2)
                        c.stroke()
                    }
                    if (countErrors === 3) {
                        c.beginPath()
                        // Pierna izquierda
                        c.moveTo(x1,y3)
                        c.lineTo(x2,y4)
                        // Piernaderecha
                        c.moveTo(x1,y3)
                        c.lineTo(x3,y4)
                        c.stroke()

                        Vue.swal(
                        'Try again',
                        '',
                        'error'
                        )

                        for (const i in letters) {
                            document.getElementById(letters[i].name).disabled = true
                        }
                    }
                }
            })
        }
    },
    drawHangman () {
        var canvas = document.getElementById('hangman')
        var c = canvas.getContext('2d')
        canvas.width = 290
        canvas.height = 370
        var px1 = 50
        var px2 = 190
        var py1 = 40
        c.lineWidth = 3
        c.strokeStyle = "#036e9c"
        c.beginPath()
        // Linea vertical larga
        c.moveTo(px1, 300)
        c.lineTo(px1, py1)
        c.stroke()
        c.beginPath()
        // Linea horizontal
        c.moveTo(px1, py1)
        c.lineTo(px2, py1)
        c.stroke()
        c.beginPath()
        // Linea certical corta
        c.moveTo(px2, py1)
        c.lineTo(px2, 70)
        c.stroke()
        // Rectangulo de abajo
        c.strokeRect(15,300,200,5)
    }
  }
}
</script>
<style scoped>
    #inpExc6{
        width: 40px;
    }
    input:invalid {
        border: 2px solid red;
    }
    input:valid {
        color: #00BC00;
    }
</style>
