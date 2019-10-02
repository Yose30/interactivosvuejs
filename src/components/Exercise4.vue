<template>
  <div class="container">
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
      sentences: exercise4
    }
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
    }
  }
}
</script>
