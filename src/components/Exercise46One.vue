<template>
  <div class="container">
     <div class="contenido-titulo">
      <h1 class="titulo-ejercicios">Aqui va el titulo</h1>
    </div>
    <div class="row">
      <div class="col-md-6 text-left">
        <button class="btn descarga-pdf" @click="download"><font-awesome-icon icon="download" />  Download exercise</button>
      </div>
    </div>
    <p class="instrucciones">
      <b class="numero-vineta">1. </b> What do you know about Mexico’s economy? Complete the first two columns in this table.
    </p>
    <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0" allowfullscreen></iframe>
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
    <!-- MODALS -->
    <b-modal ref="my-modal" centered hide-footer title="">
      <b-row>
        <b-col>
          <b-form-input v-model="nameStudent" :state="state" placeholder="Enter your name"></b-form-input>
        </b-col>
        <b-col>
          <b-button variant="primary" @click="generatePDF">Continuar</b-button>
        </b-col>
      </b-row>
    </b-modal>
  </div>
</template>

<script>
import jsPDF from 'jspdf'
import html2canvas from 'html2canvas'
var doc = new jsPDF()
var img = new Image()
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
      ],
      nameStudent: '',
      state: null
    }
  },
  methods: {
    goHome () {
      this.$router.push({name: 'home'})
    },
    download () {
      this.$refs['my-modal'].show()
      html2canvas(document.querySelector('#tableExercise')).then(function (canvas) {
        img.src = canvas.toDataURL('image/jpeg', 2)
        img.width = 190
        img.height = 140
        doc.addImage(img.src, 'JPEG', 10, 20, img.width, img.height)
      })
    },
    generatePDF () {
    // if (this.nameStudent.length > 5) {
      this.$refs['my-modal'].hide()
      // Default export is a4 paper, portrait, using milimeters for units
      doc.setFontSize(18)
      doc.setFont('helvetica')
      doc.setFontType('bold')
      doc.text(10, 10, 'Lesson 46 - Exercise 1')
      doc.setFontSize(10)
      doc.text(10, 15, 'Student name: ' + this.nameStudent)
      doc.save('exercise.pdf')
    // } else {
    //   this.state = false
    // }
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
