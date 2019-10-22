<template>
    <div id="divContent" class="container">
      <p class="instrucciones">
          <b class="numero-vineta">1. </b>
          Look at the picture. Listen. Where are they?
          <input id="inpExe9" pattern="(I|i)n the classroom"/>
      </p>
      <div class="multimedia">
        <audio controls>
          <source src="../assets/audios/exercise9.mp3">
        </audio>
      </div>
      <div class="row">
        <div class="col-md-9">
          <table>
            <tbody align="left">
              <tr>
                <td><b>John:</b></td>
                <td>Look! <input pattern="He's|He is"/> our teacher.</td>
              </tr>
              <tr>
                <td><b>Sue:</b></td>
                <td>He is very cute!</td>
              </tr>
              <tr>
                <td><b>Teacher:</b></td>
                <td>Good morning, class. <input pattern="I'm|I am"> your English teacher. Please, call me Paul.</td>
              </tr>
              <tr>
                <td><b>John:</b></td>
                <td>Oh, <input pattern="he's|he is"> friendly!</td>
              </tr>
              <tr>
                <td><b>Sue:</b></td>
                <td><input pattern="We're|We are"> friendly, too.</td>
              </tr>
              <tr>
                <td><b>Teacher:</b></td>
                <td>Excuse me young lady, <input pattern="what's|what is"> your name?</td>
              </tr>
              <tr>
                <td><b>Sue:</b></td>
                <td>Er... my name is Sue, Paul</td>
              </tr>
              <tr>
                <td><b>Teacher:</b></td>
                <td>OK, Sue. Silence, please</td>
              </tr>
              <tr>
                <td><b>Sue:</b></td>
                <td>Ops! He is not friendly</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="col-md-3">
          <!-- IMAGEN -->
          <img id="imgExe9" src="@/assets/imgs/exercise9/teacher.jpg" alt="">
        </div>
      </div>
    </div>
</template> 

<script>
export default {
  name: 'Exercise9'
}
</script>

<style scoped>
  input:invalid {
    border: 2px solid red;
  }
  input:valid {
    color: #00BC00;
  }
  #imgExe9 {
    width: 100%;
    height: 150px;
  }
</style>
