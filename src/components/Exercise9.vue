<template>
    <div class="container">
      <p class="instrucciones">
          <b class="numero-vineta">1.  </b> 
          <span class="numeracion-multimedia">  <font-awesome-icon icon="music"  />  Track 5 </span>
          Look at the picture. Listen. Where are they?
          <input id="inpExe9" pattern="In the classroom"/>
      </p>
      <p><b>John:</b>    Look! <input pattern="He's|He is"/> our teacher.</p>
      <p><b>Sue:    </b> He is very cute!</p>
      <p><b>Teacher:</b> Good morning, class. <input pattern="I'm|I am"> your English teacher. Please, call me Paul.</p>
      <p><b>John:   </b> Oh, <input pattern="he's|he is"> friendly!</p>
      <p><b>Sue:    </b> <input pattern="We're|We are"> friendly, too.</p>
      <p><b>Teacher:</b> Excuse me young lady, <input pattern="what's|what is"> your name?</p>
      <p><b>Sue:    </b> Er... my name is Sue, Paul</p>
      <p><b>Teacher:</b> OK, Sue. Silence, please</p>
      <p><b>Sue:    </b> Ops! He is not friendly</p>
    </div>
</template>

<script>
export default {
  name: 'Exercise9',
  data () {
    return {
        
    }
  },
  methods: {
    
  }
}
</script>

<style scoped>
  input:invalid {
    border: 2px solid red;
  }
  input:valid {
    color: #00BC00;
  }
</style>
