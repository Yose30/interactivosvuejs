<template>
  <div id="divContent" class="container">
    <table class="table">
      <thead ref="head">
        <tr>
          <th scope="col"></th>
          <th scope="col">True</th>
          <th scope="col">False</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(sentence, i) in sentences" v-bind:key="i">
          <td align="left">{{ sentence.sentence }}</td>
          <td align="center">
            <b-form-radio
              v-model="sentence.selected"
              :id="`idt-${sentence.id}`"
              :name="`sent-${sentence.id}`"
              value="true"
              :state="sentence.state"
            ></b-form-radio>
          </td>
          <td align="center">
            <b-form-radio
              v-model="sentence.selected"
              :id="`idf-${sentence.id}`"
              :name="`sent-${sentence.id}`"
              value="false"
              :state="sentence.state"
            ></b-form-radio>
          </td>
        </tr>
      </tbody>
    </table>
    <div align="right">
      <button class="btn btn-primary" @click="onEvaluate">Evaluate</button>
    </div>
  </div>
</template>

<script>
import exercise4 from '@/assets/json/exercise4.json'
export default {
  name: 'Exercise4',
  data () {
    return {
      sentences: [],
      options: exercise4,
      positions: [],
      dates: {}
    }
  },
  created: function () {
    this.show()
  },
  methods: {
    onEvaluate () {
      for (const i in this.sentences) {
        if (this.sentences[i].selected !== this.sentences[i].value) {
          this.sentences[i].state = false
        } else {
          this.sentences[i].state = true
        }
      }
    },
    show () {
      var max = Object.keys(this.options).length
      for (var i = 0; i < max; i ++) {
          var num_alet = this.randomSent(max)
          this.dates = {
              id: this.options[num_alet].id,
              sentence: this.options[num_alet].sentence,
              value: this.options[num_alet].value,
              selected: this.options[num_alet].selected,
              state: this.options[num_alet].state
          }
          this.sentences.push(this.dates)
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
