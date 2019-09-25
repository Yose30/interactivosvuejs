<template>
  <div class="container">
    <div class="text-right">
      <button class="btn btn-info" @click="goHome">Inicio</button>
    </div>
    <p class="text-left">
      <b>2.</b>Complete the report with your own ideas. Then, listen and check.
    </p>
    <div class="text-left">
        <button class="btn" @click="playTrack" :disabled="play">
            <img src="../assets/img/play.png" alt="Play" />
        </button>
        <button class="btn" @click="pauseTrack" :disabled="pause">
            <img src="../assets/img/pausa.png" alt="Pause" />
        </button>
    </div>
    <div class="text-left" id="paragraph">
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
export default {
  name: 'Exercise46Two',
  data () {
    return {
      play: false,
      pause: true
    }
  },
  methods: {
    goHome () {
      this.$router.push({name: 'home'})
    },
    playTrack () {
      var track = new Audio(require('../assets/audios/47Pista.mp3'))
      track.play()
      this.play = true
      this.pause = false
    },
    pauseTrack () {
      var track = new Audio(require('../assets/audios/47Pista.mp3'))
      track.pause()
      this.pause = true
      this.play = false
    }
  }
}
</script>

<style scoped>
.btn {
    /* width: 30px;
    height: 30px; */
    /* color: aqua; */
}
img {
  width: 30px;
  height: 30px;
}
b {
  color: red;
  font-size: 20px;
}
p {
  color: black;
}
#paragraph {
  /* padding-top: 50px; */
  padding-right: 30px;
  /* padding-bottom: 50px; */
  padding-left: 30px;
}
</style>
