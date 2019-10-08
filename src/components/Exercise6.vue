<template>
  <div class="container">
    <p class="instrucciones">
        <b class="numero-vineta">1.</b> Now use letters that are not in the grid to complete these words.
    </p>
    <div class="row">
        <div class="col-md-5">
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
        <div class="col-md-7">
            <img :src="require(`@/assets/imgs/exercise6/television.jpg`)" alt="">
            <img :src="require(`@/assets/imgs/exercise6/sandwich.jpg`)" alt="">
            <img :src="require(`@/assets/imgs/exercise6/soda.jpg`)" alt="">
            <img :src="require(`@/assets/imgs/exercise6/notebook.jpg`)" alt="">
            <img :src="require(`@/assets/imgs/exercise6/pencil.jpg`)" alt="">
        </div>
    </div>
    <hr>
    <p class="instrucciones">
        <b class="numero-vineta">2.</b> Choose a word from Activity 1 and play hangman with your partner.
    </p>
    <div align="right">
        <button class="btn btn-primary" @click="onChoose()">Choose a word</button>
    </div>
    <div class="row">
        <div class="col-md-4">
            <canvas id="hangman"></canvas>
        </div>
        <div class="col-md-8" id="inputLetters">
            
        </div>
    </div>
  </div>
</template>

<script>
import exercise6 from '@/assets/json/exercise6.json'
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
        var max = Object.keys(this.words).length
        var aletWord = Math.floor(Math.random() * (max - 0) + 0)
        var word = this.words[aletWord].word
        var maxLetters = word.length
        var letters = []
        var dates = {}
        for (var i = 0; i < maxLetters; i ++) {
            $('#inputLetters').append(`<input style="width:40px;" id="inp-` + i + `" type="text" pattern="` + word.charAt(i) + `"/>`)
        }
        console.log(word)
        // for (var i = 0; i < maxLetters; i ++) {
        //     // document.getElementById('inp-'+i)
        //     // document.getElementById('inp-'+i).addEventListener("change", function(event){
        //         // if (inpN.validity.patternMismatch) {
        //         //     console.log("Incorrecto")
        //         // }
        //         // else {
        //         //     console.log("Correcto")
        //         // }
        //         // console.log(document.getElementById('inp-'+i).validity.patternMismatch)
        //     // })
        //     // console.log(document.getElementById('inp-'+i).style.color="red")
        // }
        for (var i = 0; i < maxLetters; i ++) {
            dates = {
                // letter: ,

            }
            letters.push(word.charAt(i))
        }
        // letters.forEach(letter => {
            
        // });
        console.log(letters)
        
    },
    letter () {
        console.log("Function letter")
    },
    drawHangman () {
        var canvas = document.getElementById('hangman')
        var c = canvas.getContext('2d')
        var px1 = 50
        var px2 = 180
        var py1 = 20
        c.lineWidth = 1
        c.strokeStyle = "#036e9c"
        c.beginPath()
        c.moveTo(px1, 120)
        c.lineTo(px1, py1)
        c.stroke()
        c.beginPath()
        c.moveTo(px1, py1)
        c.lineTo(px2, py1)
        c.stroke()
        c.beginPath()
        c.moveTo(px2, py1)
        c.lineTo(px2, 35)
        c.stroke()
        c.strokeRect(15,120,200,5)
    }
  }
}
</script>
<style scoped>
    #hangman {
        width: 290px;
        height: 370px;
        background-color:white;
    }
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
