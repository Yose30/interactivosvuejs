<template>
    <div id="divContent" class="container">
        <p class="instrucciones">
            <b class="numero-vineta">1.  </b> <span class="numeracion-multimedia">  <font-awesome-icon icon="music"  />  Track # </span>Listen and circle the words you hear. What differences can you see in the words? Fill the
chart and find the contracted forms of the verb to be in the dialogue in Activity 1.
        </p>
        <hr>
        <div align="center">
            <table>
                <tbody>
                    <tr v-for="(word, i) in words" v-bind:key="i">
                        <td id="tdExe11" align="right">{{ word.id }}. </td>
                        <td id="tdExe11" align="center">{{ word.option1 }}</td>
                        <td id="tdExe11" align="center">{{ word.option2 }}</td>
                        <td id="tdExe11" align="center">{{ word.option3 }}</td>
                    </tr>
                </tbody>
            </table>
        </div>
        <hr>
        <table>
            <thead>
                <tr>
                    <th>Long form</th>
                    <th>Contracted form</th>
                </tr>
            </thead>
            <tbody id="tbodySent" align="center">
                
            </tbody>
        </table>
        <!-- <b-table :items="sentences" :fields="fields2">

        </b-table> -->
    </div>
</template>

<script>
import exercise111 from '@/assets/json/exercise11-1.json'
import exercise112 from '@/assets/json/exercise11-2.json'
import { Drag, Drop } from 'vue-drag-drop'
export default {
  name: 'Exercise11',
  data () {
    return {
        options1: exercise111,
        options2: exercise112,
        words: exercise111,
        sentences: [],
        positions: [],
        dates1: {},
        dates2: {},
        fields1: [{key: 'option1', label: ''}, {key: 'option2', label: ''}, {key: 'option3', label: ''}],
        fields2: [{key: 'long', label: 'Long form'}, {key: 'contracted', label: 'Contracted form'}]
    }
  },
//   created: function () {
//     this.show()
//   },
  mounted: function (){
    this.show()
  },
  methods: {
    prueba () {
        $('#tbodySent').append(this.sentences[0].long)
    },
    show () {
        // var max1 = Object.keys(this.options1).length
        var max2 = Object.keys(this.options2).length
        // for (var i = 0; i < max1; i ++) {
        //     var num_alet1 = this.randomSent(max1)
        //     this.dates1 = {
        //         id: this.options1[num_alet1].id,
        //         option1: this.options1[num_alet1].option1,
        //         option2: this.options1[num_alet1].option2,
        //         option3: this.options1[num_alet1].option3
        //     }
        //     this.words.push(this.dates1)
        // }
        // this.positions = []

        for (var i = 0; i < max2; i ++) {
            var num_alet2 = this.randomSent(max2)
            this.dates2 = {
                long: this.options2[num_alet2].long,
                contracted: this.options2[num_alet2].contracted,
                select1: this.options2[num_alet2].select1,
                select2: this.options2[num_alet2].select2
            }
            this.sentences.push(this.dates2)
        }
        this.positions = []

        for (var i = 0; i < max2; i ++) {
            $('#tbodySent').append(`<tr><td>${this.sentences[i].long}</td><td>${this.sentences[i].contracted}</td></tr>`)
        }
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
    #tdExe11 {
        width: 200px;
    }
    /* header {
        display: none !important;
    } */
</style>

