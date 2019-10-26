<template>
    <div>
        <b-navbar class="navbar" toggleable="lg" type="dark">
            <b-navbar-brand><img src="../assets/img/logoMajestic.svg" class="logo" alt="Majesti Education" /></b-navbar-brand>
            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
            <b-collapse id="nav-collapse" is-nav>
                <b-navbar-nav></b-navbar-nav>
                <!-- Right aligned nav items -->
                <b-navbar-nav class="ml-auto">
                    <b-nav-item>
                        <button class="btn home" @click="goStart()">Start</button>
                    </b-nav-item>
                    <b-nav-item>
                        <button class="btn home" @click="goHome()"><font-awesome-icon icon="home" /> Home</button>
                    </b-nav-item>
                    <b-nav-item>
                        <button class="btn home" @click="goPage()">Page</button>
                    </b-nav-item>
                </b-navbar-nav>
            </b-collapse>
        </b-navbar>
    </div>
</template>

<script>
export default {
    props: ['page'],
    methods: {
        goStart () {
            window.open('http://majesticeducacion.com.mx/demo/start.html', '_self')
        },
        goHome () {
            this.$router.push({name: 'home'})
        },
        goPage () {
            this.$router.push({name: 'page', params: { num: this.page } })
        }
    }
}
</script>