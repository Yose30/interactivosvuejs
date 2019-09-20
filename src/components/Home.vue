<template>
  <div class="container">
    <div class="row">
      <div class="col-md-6">
        <img src="@/assets/pdf/lesson37.jpg" alt="">
      </div>
      <div class="col-md-6">
        <img src="@/assets/pdf/lesson46.jpg" alt="">
      </div>
    </div>
    <!-- <pdf src="https://raw.githubusercontent.com/mozilla/pdf.js/ba2edeae/web/compressed.tracemonkey-pldi-09.pdf" :page="1"></pdf> -->
    <!-- https://raw.githubusercontent.com/mozilla/pdf.js/ba2edeae/web/compressed.tracemonkey-pldi-09.pdf -->
  </div>
</template>

<script>
import pdf from 'vue-pdf'
export default {
  name: 'Home',
  data () {
    return {
      // src: require('@/assets/pdf/lesson46.pdf')
    }
  },
  components: {
    pdf
  }
}
</script>

<style scoped>
  img {
    width: 350px;
    height: 370px;
  }
</style>
