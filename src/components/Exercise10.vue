<template>
    <div id="divContent" class="container">
        <div class="contenido-titulo">
            <h1 class="titulo-ejercicios">COMPLETAR TEXTO</h1>
        </div>
        <p class="instrucciones">
            <b class="numero-vineta">1.  </b> <span class="numeracion-multimedia">  <font-awesome-icon icon="music"  />  Track # </span>Read the text about Andrew and what he does to keep his body healthy.
        </p>
        <hr>
        
        <b-row>
            <b-col sm="12" >
                <p class="completar-texto">
                    Andrew is a 
                    <b-form-select id="selExc10" :state="selected[0].state" v-model="selected[0].select" :options="options"></b-form-select> 
                    man and has <b-form-select id="selExc10" :state="selected[1].state" v-model="selected[1].select" :options="options"></b-form-select> 
                    muscles. He starts his day very early in the morning, at 6 o’clock. He eats a 
                    <b-form-select id="selExc10" :state="selected[2].state" v-model="selected[2].select" :options="options"></b-form-select> breakfast and walks to the
                    court. He exercises his head and arms first and then, the rest of his body. He does push-ups to get 
                    <b-form-select id="selExc10" :state="selected[3].state" v-model="selected[3].select" :options="options"></b-form-select> arms, but he is not a gymnast, because he
                    isn’t a <b-form-select id="selExc10" :state="selected[4].state" v-model="selected[4].select" :options="options"></b-form-select> person. Finally, he exercises his legs. He has 
                    <b-form-select id="selExc10" :state="selected[5].state" v-model="selected[5].select" :options="options"></b-form-select> legs, like
                    a dancer, but he isn’t a dancer. After three hours of practice, Andrew takes
                    a bath, eats a <b-form-select id="selExc10" :state="selected[6].state" v-model="selected[6].select" :options="options"></b-form-select> lunch and goes to work where he works with a lot of
                    students. He is very <b-form-select id="selExc10" :state="selected[7].state" v-model="selected[7].select" :options="options"></b-form-select>, 
                    <b-form-select id="selExc10" :state="selected[8].state" v-model="selected[8].select" :options="options"></b-form-select> and a nice person, too.
                </p>
            </b-col>
            <b-col>

            </b-col>
        </b-row>
        <div class="text-right">
            <button @click="onEvaluate()" class="btn btn-finish"><font-awesome-icon icon="check-circle"  />  Evaluate</button>
        </div>
        <hr>
        <p><b>What is Andrew’s profession?</b></p>
        <b-card class="text-left">
            <b-row>
                <b-col v-for="(profession, i) in professions" v-bind:key="i">
                    <button class="btn btn-ejercicios" @click="onProfession(profession, i)">{{ profession.text }}</button>
                </b-col>
            </b-row>
        </b-card>
    </div>
</template>

<script>
import exercise101 from '@/assets/json/exercise10-1.json'
import exercise102 from '@/assets/json/exercise10-2.json'
import exercise103 from '@/assets/json/exercise10-3.json'
export default {
  name: 'Exercise10',
  data () {
    return {
        opciones: exercise102,
        dates1: {},
        options: [],
        selected: exercise103,
        positions: [],
        professions: [],
        dates2: {},
        profesiones: exercise101,
        state: null
    }
  },
  created: function () {
    this.show()
  },
  methods: {
    onProfession (profession, i) {
        if (profession.value) {
            this.$swal('Well done!', '', 'success')
        }
        else {
            this.$swal('Try again', '', 'error')
        }
    },
    show () {
        var max1 = Object.keys(this.opciones).length
        var max2 = Object.keys(this.profesiones).length
        for (var i = 0; i < max1; i ++) {
            var num_alet1 = this.randomSent(max1)
            this.dates1 = {
                text: this.opciones[num_alet1].text,
                value: this.opciones[num_alet1].value
            }
            this.options.push(this.dates1)
        }
        this.positions = []
        for (var i = 0; i < max2; i ++) {
            var num_alet1 = this.randomSent(max2)
            this.dates2 = {
                text: this.profesiones[num_alet1].text,
                value: this.profesiones[num_alet1].value
            }
            this.professions.push(this.dates2)
        }
        this.positions = []
    },
    onEvaluate () {
        // if (this.profession != null) {
        var count = 0
        var size = Object.keys(this.selected).length
        for (const i in this.selected) {
            if (this.selected[i].select === this.selected[i].answer) {
                this.selected[i].state = true
                count += 1
            }
            // else{
            //     this.selected[i].state = false
            // }
        }
        if (count === size) {
            this.$swal('Well done!', '', 'success')
        }
        else {
            for (const i in this.selected) {
                this.selected[i].select = ''
                this.selected[i].state = null
            }
            this.$swal('Try again', '', 'error')
        }
        // }
        // else {
        //     this.state = false
        // }
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

