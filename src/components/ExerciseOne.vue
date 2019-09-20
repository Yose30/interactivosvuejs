<template>
  <div class="container">
    <p class="text-left"><b>1.</b> What do you know about Mexico’s economy? Complete the first two columns in this table.</p>
    <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0" allowfullscreen></iframe>
    <hr>
    <div class="text-right">
      <button class="btn btn-primary" @click="generatePDF">Descargar ejercicio</button>
    </div>
    <hr>
    <div>
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
export default {
  name: 'ExerciseOne',
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
    generatePDF () {
      // Default export is a4 paper, portrait, using milimeters for units
      var doc = new jsPDF()
      const contentHtml = `
      <table>` + this.$refs.head.innerHTML + `
        <tbody>
          <tr>
            <td>` + this.items[0].column1 + `</td>
            <td>` + this.items[0].column2 + `</td>
            <td>` + this.items[0].column3 + `</td>
          </tr>
          <tr>
            <td>` + this.items[1].column1 + `</td>
            <td>` + this.items[1].column2 + `</td>
            <td>` + this.items[1].column3 + `</td>
          </tr>
          <tr>
            <td>` + this.items[2].column1 + `</td>
            <td>` + this.items[2].column2 + `</td>
            <td>` + this.items[2].column3 + `</td>
          </tr>
        </tbody>
      </table>`
      doc.fromHTML(contentHtml, 10, 10, {
        width: 300
      })
      doc.save('exercise.pdf')
    }
  }
}
</script>

<style scoped>
  b{
    color: red;
    font-size: 20px;
  }
  p{
    color: black;
  }
  thead{
    background-color: aquamarine;
    color: black;
  }
  td{
    height: 100px;
  }
  textarea {
    width: 100%;
    height: 140px;
    padding: 10px 10px;
    box-sizing: border-box;
    border: 2px solid #ccc;
    border-radius: 4px;
    font-size: 16px;
    resize: none;
  }
  iframe{
    width: 100%;
    height: 400px;
  }
</style>
