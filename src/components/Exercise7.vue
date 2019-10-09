<template>
  <div class="container">
    <p class="instrucciones">
      <b class="numero-vineta">1.  </b> <span class="numeracion-multimedia">  <font-awesome-icon icon="music"  />  Track # </span>Number the sentences as you listen.
    </p>
    <div class="multimedia">
      <audio controls>
          <source src="../assets/audios/exercise7.mp3">
      </audio>
    </div>
    <table class="table">
        <tbody>
          <tr v-for="(sentence, i) in sentences" v-bind:key="i">
            <td align="left">{{ sentence.sentence }}</td>
            <td><input id="tdNExc7" type="text" :pattern="sentence.number"></td>
          </tr>
        </tbody>
    </table>
  </div>
</template>

<script>
import exercise7 from '@/assets/json/exercise7.json'
export default {
  name: 'Exercise7',
  data () {
    return {
      options: exercise7,
      sentences: [],
      dates: {},
      positions: []
    }
  },
  created: function () {
    this.show()
  },
  methods: {
    show () {
      var max = Object.keys(this.options).length
      for (var i = 0; i < max; i ++) {
        var num_alet = this.randomSent(max)
        this.dates = {
            id: this.options[num_alet].id,
            sentence: this.options[num_alet].sentence,
            number: this.options[num_alet].number,
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

<style scoped>
    input:invalid {
        border: 2px solid red;
    }
    input:valid {
        color: #00BC00;
    }
    #tdNExc7 {
        width: 40px;
    }
</style>
