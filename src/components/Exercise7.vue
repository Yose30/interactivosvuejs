<template>
  <div class="container">
    <p class="instrucciones">
      <b class="numero-vineta">1.  </b> <span class="numeracion-multimedia">  <font-awesome-icon icon="music"  />  Track 2 </span>Number the sentences as you listen.
    </p>
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
        sentences: exercise7
    }
  },
  methods: {
    
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
