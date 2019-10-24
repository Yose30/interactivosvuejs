<template>
    <div>
        <MyHeader :page="'page4'"></MyHeader>
        <div id="divContent" class="container">
            <p class="instrucciones">
                <b class="numero-vineta">1. </b><span class="numeracion-multimedia"><font-awesome-icon icon="music"/></span> Listen to the conversation. Circle what they decide to do. Then, number the activities in the order in which they are mentioned.
            </p>
            <div class="multimedia">
                <audio controls>
                    <source src="../assets/audios/exercise11.mp3">
                </audio>
            </div>
            <hr>
            <b-row>
                <b-col v-for="(option, i) in options1" v-bind:key="i">
                    <b-row>
                        <b-col sm="3"><input id="inpExe11" type="text" :pattern="option.number"></b-col>
                        <b-col sm="9">
                            <button class="btn" :id="`id-${i}`" @click="checkAns(option, i)"><img :src="require(`@/assets/imgs/exercise11/${option.img}.jpg`)" alt=""></button>
                        </b-col>
                    </b-row>
                </b-col>
            </b-row>
            <hr>
            <p class="instrucciones">
                <b class="numero-vineta">2. </b><span class="numeracion-multimedia"><font-awesome-icon icon="music"/></span> Listen again and fi ll in the table about Jimmy, Deb and Lola. Check your answers by reading the text in the scripts section.
            </p>
            <b-table :items="options2" :fields="fields">
                <template v-slot:cell(likes)="data">
                    <textarea v-model="data.item.likes"></textarea>
                </template>
                <template v-slot:cell(nolikes)="data">
                    <textarea v-model="data.item.nolikes"></textarea>
                </template>
            </b-table>
        </div>
    </div>
</template>

<script>
import Header from './Header'
import exercise111 from '@/assets/json/exercise11-1.json'
import exercise112 from '@/assets/json/exercise11-2.json'
import { Drag, Drop } from 'vue-drag-drop'
export default {
  name: 'Exercise11',
  components: { 'MyHeader': Header},
  data () {
    return {
        opciones1: exercise111,
        opciones2: exercise112,
        options1: [],
        options2: [],
        positions: [],
        dates1: {},
        dates2: {},
        fields: [{key: 'name', label: ''}, {key: 'likes', label: 'Likes'}, {key: 'nolikes', label: 'Doesn´t like'}]
    }
  },
  created: function () {
    this.show()
  },
//   mounted: function (){
//     this.show()
//   },
  methods: {
    checkAns(option, i) {
        if(option.status){
            this.$swal('Well done!', '', 'success')
            document.getElementById(`id-${i}`).style.borderColor = "green";
        }
        else {
            this.$swal('Try again', '', 'error')
        }
    },
    show () {
        var max1 = Object.keys(this.opciones1).length
        var max2 = Object.keys(this.opciones2).length
        for (var i = 0; i < max1; i ++) {
            var num_alet1 = this.randomSent(max1)
            this.dates1 = {
                img: this.opciones1[num_alet1].img,
                number: this.opciones1[num_alet1].number,
                status: this.opciones1[num_alet1].status
            }
            this.options1.push(this.dates1)
        }
        this.positions = []

        for (var i = 0; i < max2; i ++) {
            var num_alet2 = this.randomSent(max2)
            this.dates2 = {
                name: this.opciones2[num_alet2].name,
                likes: this.opciones2[num_alet2].likes,
                nolikes: this.opciones2[num_alet2].nolikes
            }
            this.options2.push(this.dates2)
        }
        this.positions = []

        // for (var i = 0; i < max2; i ++) {
        //     $('#tbodySent').append(`<tr><td>${this.options2[i].long}</td><td>${this.options2[i].contracted}</td></tr>`)
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
    #inpExe11 {
        width: 50px;
        z-index:2;
        position: absolute;
    }
    input:invalid {
        border: 2px solid red;
    }
    input:valid {
        color: #00BC00;
    }
</style>

