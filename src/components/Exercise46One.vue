<template>
  <div class="container">
    <div class="text-right">
      <button class="btn home" @click="goHome"><font-awesome-icon icon="home" /> Inicio</button>
    </div>
    <p class="instrucciones">
    <b class="numero-vineta">1. </b> What do you know about Mexico’s economy? Complete the first two columns in this table.
    </p>
    
    <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0" allowfullscreen></iframe>
    <hr>
    <div class="text-right">
      <button class="btn home" @click="generatePDF">Descargar ejercicio</button>
    </div>
    <hr>
    <div id="tableExercise">
      <table class="table">
        <thead ref="head">
          <tr>
            <th scope="col">What I know</th>
            <th scope="col">What I would like to know</th>
            <th scope="col">What I learned</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, i) in items" v-bind:key="i">
            <td><textarea v-model="item.column1"></textarea></td>
            <td><textarea v-model="item.column2"></textarea></td>
            <td><textarea v-model="item.column3"></textarea></td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import jsPDF from 'jspdf'
import html2canvas from 'html2canvas'
export default {
  name: 'Exercise46One',
  data () {
    return {
      fields: [
        {key: 'column1', label: 'What I know'},
        {key: 'column2', label: 'What I would like to know'},
        {key: 'column3', label: 'What I learned'}
      ],
      items: [
        {id: 1, column1: '', column2: '', column3: ''},
        {id: 2, column1: '', column2: '', column3: ''},
        {id: 3, column1: '', column2: '', column3: ''}
      ]
    }
  },
  methods: {
    goHome () {
      this.$router.push({name: 'home'})
    },
    generatePDF () {
      // Default export is a4 paper, portrait, using milimeters for units
      var doc = new jsPDF()
      html2canvas(document.querySelector('#tableExercise')).then(function (canvas) {
        var img = canvas.toDataURL('image/png')
        // doc.fromHTML(document.getElementById('capture'), 10, 10)
        doc.addImage(img, 'PNG', 15, 40, 180, 160)
        doc.save('exercise.pdf')
      })
      // const contentHtml = `
      // <table>` + this.$refs.head.innerHTML + `
      //   <tbody>
      //     <tr>
      //       <td>` + this.items[0].column1 + `</td>
      //       <td>` + this.items[0].column2 + `</td>
      //       <td>` + this.items[0].column3 + `</td>
      //     </tr>
      //     <tr>
      //       <td>` + this.items[1].column1 + `</td>
      //       <td>` + this.items[1].column2 + `</td>
      //       <td>` + this.items[1].column3 + `</td>
      //     </tr>
      //     <tr>
      //       <td>` + this.items[2].column1 + `</td>
      //       <td>` + this.items[2].column2 + `</td>
      //       <td>` + this.items[2].column3 + `</td>
      //     </tr>
      //   </tbody>
      // </table>`
    }
  }
}
</script>

<style scoped>
 
  
  
  iframe{
    width: 100%;
    height: 400px;
  }
</style>
