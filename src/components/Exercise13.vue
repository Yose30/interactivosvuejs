<template>
    <div id="divContent" class="container">
        <div class="contenido-titulo">
            <h1 class="titulo-ejercicios">COMPLETAR TEXTO</h1>
        </div>
        <p class="instrucciones">
          <b class="numero-vineta">1.  </b> <span class="numeracion-multimedia">  <font-awesome-icon icon="music"  />  Track #  </span></b>Read and listen to what Mr. Green does on weekdays and complete his schedule. Compare with a partner. Read the script to check your answers.
        </p>
        <audio controls>
          <source src="../assets/audios/exercise13.mp3">
        </audio>
        <hr>
        <table class="tabla-e9">
            <tbody class="tabla13" align="left">
              <tr v-for="(sentence, i) in sentences" v-bind:key="i">
                <td valign="top" class="personaje"><b>{{ sentence.person }}:</b></td>
                <td class="dialogo">{{ sentence.sentence }}</td>
              </tr>
            </tbody>
        </table>
        <hr>
        <b-row>
            <b-col class="preguntas" v-for="(answer, i) in answers" v-bind:key="i">
                {{ answer.day }}
                <textarea v-model="answer.answer"></textarea>
            </b-col>
        </b-row>
    </div>
</template>

<script>
import exercise131 from '@/assets/json/exercise13-1.json'
import exercise132 from '@/assets/json/exercise13-2.json'
export default {
  name: 'Exercise13',
  data () {
    return {
        sentences: exercise131,
        answers: exercise132
    }
  },
  created: function () {
    // this.show()
  },
  methods: {
    
  }
}
</script>
<style scoped>
  #imgExe13 {
    width: 100%;
    height: 150px;
  }
</style>

