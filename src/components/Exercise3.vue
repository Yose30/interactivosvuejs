<template>
  <div id="divContent" class="container">
    <div class="contenido-titulo">
      <h1 class="titulo-ejercicios">Aqui va el titulo</h1>
    </div>
    <p class="instrucciones">
      <b class="numero-vineta">2. </b>Complete the conversation with the verb to be or the corresponding pronoun.
    </p>
    <div class="parrafo">
      <table>
        <tbody>
          <tr>
            <td>Carlos:</td>
            <td>Hello Pedro. How <input type="text" pattern="(a|A)re"/> you?</td>
          </tr>
          <tr>
            <td>Pedro:</td>
            <td>I’m fine thanks. <input type="text" pattern="(t|T)his"/> is my friend Karla.</td>
          </tr>
          <tr>
            <td>Carlos:</td>
            <td>Hello Karla. <input type="text" pattern="(a|A)re"/> you in group 202?</td>
          </tr>
          <tr>
            <td>Karla:</td>
            <td>No, <input type="text" pattern="(I|i)'m"/> not. I’m in group 220</td>
          </tr>
          <tr>
            <td>Carlos:</td>
            <td>Oops! What’ <input type="text" pattern="s"/> that sound?</td>
          </tr>
          <tr>
            <td>Pedro:</td>
            <td><input type="text" pattern="(i|I)t's"/> the school bell.</td>
          </tr>
          <tr>
            <td>Karla:</td>
            <td>Is <input type="text" pattern="(i|I)t"/> time to go to class now?</td>
          </tr>
          <tr>
            <td>Pedro:</td>
            <td>Yes, it <input type="text" pattern="(i|I)s"/> Let’s run!</td>
          </tr>
        </tbody>
      </table>
        <!-- <p>
            Hugo, read what I have. Help me complete my report – I swear, the dog always eats my homework! The major economic components of Mexico include
            <input type="text" />, agriculture, <input type="text" />, and energy and <input type="text" /> resources. The service segment is Mexico’s
            <input type="text" /> contributor, with a 70.5% of its GDP (Gross Domestic Product) coming from
            <input type="text" />, financial and banking services, hotel operations, health, telecommunications, and
            <input type="text" />. As a percentage of GDP, agriculture only accounts for 3.9% as of 2006. Oil export is Mexico’s
            <input type="text" /> source of foreign income.
        </p> -->
    </div>
  </div>
</template>

<script>
export default {
  name: 'Exercise1',
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
