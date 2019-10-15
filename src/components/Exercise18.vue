<template>
    <div id="divContent" class="container">
        <p class="instrucciones">
            <!--  <span class="numeracion-multimedia">  <font-awesome-icon icon="music"  />  Track # </span> -->
            <b class="numero-vineta">1.  </b>Listen and order the ingredients as they are mentioned. Write C (countable) or U (uncountable).
        </p>
        <audio controls>
          <source src="../assets/audios/exercise18.mp3">
        </audio>
        <hr>
        <b-row>
            <b-col sm="3" v-for="(option, i) in options" v-bind:key="i">
                <img :src="require(`@/assets/imgs/exercise18/${option.image}.jpg`)" :alt="option.image">
                <br>
                {{ option.text }}
                <b-row align="left">
                    <b-col><input id="inpExc18" type="text" :pattern="option.answer1"></b-col>
                    <b-col><input id="inpExc18" type="text" :pattern="option.answer2"></b-col>
                </b-row>
            </b-col>
        </b-row>
        <hr>
        <p class="instrucciones">
            <b class="numero-vineta">2.  </b> Listen again and complete. Compare with a partner. Check against the text in the scripts section.
        </p>
        <p>We need milk. Do you have <input type="text" pattern="any">? Yes, I have <input type="text" pattern="a lot of"> milk.</p>
        <p>I need eggs. I also have <input type="text" pattern="many">.</p>
        <p>I have <input type="text" pattern="some"> flour, too.</p>
        <p>Do you have <input type="text" pattern="any"> apples?</p>
        <p>No, but I have <input type="text" pattern="a few"> peaches. How many do you want?</p>
        <p>I need three peaches and <input type="text" pattern="some">sugar.</p>
        <p>I don’t have <input type="text" pattern="any"> sugar, but I have <input type="text" pattern="some"> honey.</p>
        <p>No problem, <input type="text" pattern="some"> honey is OK. Do you have <input type="text" pattern="any"> cottage cheese?</p>
        <p>Oops! I have a <input type="text" pattern="a little">.</p>
    </div>
</template>

<script>
import exercise18 from '@/assets/json/exercise18.json'
import exercise182 from '@/assets/json/exercise18-2.json'
export default {
  name: 'Exercise18',
  data () {
    return {
        oraciones: exercise182,
        sentences: [],
        opciones: exercise18,
        options: [],
        positions: [],
        dates: {}
    }
  },
  created: function () {
    this.show()
  },
  methods: {
    show () {
        var max = Object.keys(this.opciones).length
        for (var i = 0; i < max; i ++) {
            var num_alet = this.randomSent(max)
            this.dates = {
                image: this.opciones[num_alet].image,
                text: this.opciones[num_alet].text,
                answer1: this.opciones[num_alet].answer1,
                answer2: this.opciones[num_alet].answer2
            }
            this.options.push(this.dates)
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
    #inpExc18 {
        width: 40px;
    }
    input:invalid {
        border: 2px solid red;
    }
    input:valid {
        color: #00BC00;
    }
</style>

