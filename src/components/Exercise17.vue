<template>
    <div>
        <MyHeader :page="'page7'"></MyHeader>
        <div id="divContent" class="container">
            <p class="instrucciones">
                <b class="numero-vineta">1.  </b>Read and match. Circle the best title for the text.
            </p>
            <p>
                When we think of African animals, these animals come to mind: lions, giraffes, leopards, elephants
                and rhinoceroses. Savanna animals are on a constant search for water, especially during the dry
                season. The Savanna is where people go on a safari to see the wild animals in Africa.
            </p>
            <b-card>
                <b-row>
                    <b-col v-for="(option, i) in options" v-bind:key="i">
                        <button class="btn" @click="onState(option.status)">{{ option.option }}</button>
                    </b-col>
                </b-row>
            </b-card>
            <b-card>
                <b-row>
                    <b-col v-for="(answer, i) in answers" v-bind:key="i" align="left" sm="6" id="colExc17">
                        <b-row>
                            <b-col sm="1">
                                <b-form-radio name="answers" @change="onState(answer.status)"></b-form-radio>
                            </b-col>
                            <b-col sm="6">{{ answer.text }}</b-col>
                            <b-col sm="5"><img :src="require(`@/assets/imgs/exercise17/${answer.image}.jpg`)" :alt="answer.image"></b-col>
                        </b-row>
                    </b-col>
                </b-row>
            </b-card>
        </div>
    </div>
</template>

<script>
import Header from './Header'
import exercise171 from '@/assets/json/exercise17-1.json'
import exercise172 from '@/assets/json/exercise17-2.json'
export default {
  name: 'Exercise16',
  components: { 'MyHeader': Header},
  data () {
    return {
        opciones: exercise171,
        respuestas: exercise172,
        answers: [],
        options: [],
        positions: [],
        dates: {}
    }
  },
  created: function () {
    this.show()
  },
  methods: {
    onState (status) {
        if (status) {
            this.$swal('Well done!', '', 'success')
        }
        else {
            this.$swal('Try again', '', 'error')
        }
    },
    show () {
        var max1 = Object.keys(this.opciones).length
        var max2 = Object.keys(this.respuestas).length
        // exercise-15-1
        for (var i = 0; i < max1; i ++) {
            var num_alet = this.randomSent(max1)
            this.dates = {
                option: this.opciones[num_alet].option,
                status: this.opciones[num_alet].status
            }
            this.options.push(this.dates)
        }
        this.positions = []
        // exercise-15-2
        for (var i = 0; i < max2; i ++) {
            var num_alet = this.randomSent(max2)
            this.dates = {
                text: this.respuestas[num_alet].text,
                image: this.respuestas[num_alet].image,
                status: this.respuestas[num_alet].status
            }
            this.answers.push(this.dates)
        }
        this.positions = []
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
    #colExc17 {
        display: flex;
    }
</style>

