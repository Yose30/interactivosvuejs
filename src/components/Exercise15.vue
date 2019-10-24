<template>
    <div>
        <MyHeader :page="'page3'"></MyHeader>
        <div id="divContent" class="container">
            <div class="contenido-titulo">
                <h1 class="titulo-ejercicios">COMPLETAR TEXTO</h1>
            </div>
            <p class="instrucciones">
                <b class="numero-vineta">1.  </b>What time is it? Match each clock with the corresponding way or ways to express time.
    Write the appropriate letter under each clock. Listen and check your answers.
            </p>
            <audio controls>
            <source src="../assets/audios/exercise15.mp3">
            </audio>
            <hr>
            <b-row class="text-center">
                <b-col v-for="(option, i) in options" v-bind:key="i">
                    <!-- require(`@/assets/imgs/exercise15/${option.watch}.jpg`) -->
                    <img class="img-e15" :src="require(`@/assets/imgs/exercise15/${option.watch}.png`)" :alt="option.watch">
                    <br>
                    <input id="inpExc15" type="text" :pattern="option.answer">
                </b-col>
            </b-row>
            <hr>
            <div align="left">
                <ol type="a">
                    <li v-for="(answer, i) in answers" v-bind:key="i">{{ answer.form1 }} / {{ answer.form2 }}</li>
                </ol>
            </div>
        </div>
    </div>
</template>

<script>
import Header from './Header'
import exercise151 from '@/assets/json/exercise15-1.json'
import exercise152 from '@/assets/json/exercise15-2.json'
export default {
  name: 'Exercise14',
  components: { 'MyHeader': Header},
  data () {
    return {
        opciones: exercise151,
        options: [],
        positions: [],
        dates: {},
        respuestas: exercise152,
        answers: exercise152
    }
  },
  created: function () {
    this.show()
  },
  methods: {
    show () {
        var max1 = Object.keys(this.opciones).length
        var max2 = Object.keys(this.respuestas).length
        // exercise-15-1
        for (var i = 0; i < max1; i ++) {
            var num_alet = this.randomSent(max1)
            this.dates = {
                watch: this.opciones[num_alet].watch,
                answer: this.opciones[num_alet].answer
            }
            this.options.push(this.dates)
        }
        this.positions = []
        // exercise-15-2
        // for (var i = 0; i < max2; i ++) {
        //     var num_alet = this.randomSent(max2)
        //     this.dates = {
        //         form1: this.respuestas[num_alet].form1,
        //         form2: this.respuestas[num_alet].form2,
        //         status: this.respuestas[num_alet].status
        //     }
        //     this.answers.push(this.dates)
        // }
        // this.positions = []
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
    #inpExc15 {
        width: 50px;
    }
    input:invalid {
        border: 2px solid red;
    }
    input:valid {
        color: #00BC00;
    }
    .img-e15{
        width: 150px;
        height: 150px;
        }
</style>

