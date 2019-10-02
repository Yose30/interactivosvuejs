<template>
  <div class="container">
    <div class="text-right">
      <button class="btn home" @click="goHome"><font-awesome-icon icon="home" /> Inicio</button>
    </div>
    <p class="instrucciones">
      <b class="numero-vineta">2.  </b> <span class="numeracion-multimedia">  <font-awesome-icon icon="music"  />  Track 47 </span>Complete the report with your own ideas. Then, listen and check.
    </p>
    <div class="multimedia">
      <audio controls>
        <source src="../assets/audios/47Pista.mp3">
      </audio>
      <!-- <button class="btn" @click="playTrack">
         <font-awesome-icon icon="play-circle" class="fafaicono-multimedia"/>
      </button>
      <button class="btn" @click="pauseTrack">
        <font-awesome-icon icon="pause-circle" class="fafaicono-multimedia"/>
      </button> -->
    </div>
    <div class="parrafo">
        <p>
            Hugo, read what I have. Help me complete my report – I swear, the dog always eats my homework! The major economic components of Mexico include
            <input type="text" />, agriculture, <input type="text" />, and energy and <input type="text" /> resources. The service segment is Mexico’s
            <input type="text" /> contributor, with a 70.5% of its GDP (Gross Domestic Product) coming from
            <input type="text" />, financial and banking services, hotel operations, health, telecommunications, and
            <input type="text" />. As a percentage of GDP, agriculture only accounts for 3.9% as of 2006. Oil export is Mexico’s
            <input type="text" /> source of foreign income.
        </p>
    </div>
  </div>
</template>

<script>
// var track = new Audio(require('../assets/audios/47Pista.mp3'))
export default {
  name: 'Exercise46Two',
  data () {
    return {
      // play: false,
      // pause: true
    }
  },
  methods: {
    goHome () {
      this.$router.push({name: 'home'})
    }
    // playTrack () {
    //   track.play()
    //   this.play = true
    //   this.pause = false
    // },
    // pauseTrack () {
    //   track.pause()
    //   this.pause = true
    //   this.play = false
    // }
  }
}
</script>

<style scoped>

</style>
