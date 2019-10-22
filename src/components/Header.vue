<template>
    <header >
        <div class="container">
            <div class="contenedor-logo">
                <img src="../assets/img/logoMajestic.svg" class="logo" alt="Majesti Education" />
                 
            </div>
            <div class="contenedor-home">
                    <button class="btn home" @click="goHome"><font-awesome-icon icon="home" />  Inicio</button>
            </div> 
        </div>

        


    </header>    
</template>

<script>
export default {
    methods: {
        goHome () {
            this.$router.push({name: 'home'})
        }
    }
}

</script>