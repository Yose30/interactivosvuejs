<template>
  <div class="container">
    <canvas id="pizarra" @mousedown="empezarDibujo" @mousemove="drawOnCanvas" @mouseup="stopDraw"></canvas>
    <b-row>
        <b-col sm="2"><button class="btn btn-primary" @click="backMouse" :disabled="mouse">Mouse</button></b-col>
        <b-col sm="2"><button class="btn btn-primary" @click="beginDraw" :disabled="pencil">Draw</button></b-col>
        <b-col sm="2"><button class="btn btn-primary" @click="deleteEnd" :disabled="mouse">Delete</button></b-col>
        <b-col>Color <input type="color" v-model="color" :disabled="mouse"></b-col>
        <b-col>
            <b-row>
                <b-col>Line width</b-col>
                <b-col><b-form-select v-model="selected" :options="options" :disabled="mouse"></b-form-select></b-col>
            </b-row>
        </b-col>
    </b-row>
  </div>
</template>

<script>
let miCanvas
let contenido
let ctx
let lineas = []
let correccionX = 0
let correccionY = 0
let pintarLinea = false
let posicion
export default {
  name: 'Draw',
  data () {
    return {
        pencil: false,
        mouse: true,
        color: '#000000',
        selected: 5,
        options: [
            { value: 5, text: '5' },
            { value: 10, text: '10' },
            { value: 15, text: '15' },
        ],
        count: 0
    }
  },
  methods: {
    backMouse () {
        contenido = document.getElementById('divContent')
        miCanvas = document.getElementById('pizarra')
        this.pencil = false
        this.mouse = true
        this.sizeCanvas (0, 0)
        miCanvas.style.zIndex = 1
        contenido.style.zIndex = 2
    },
    deleteEnd () {
        ctx.clearRect(0, 0, miCanvas.width, miCanvas.height)
    },
    beginDraw () {
        this.count += 1
        contenido = document.getElementById('divContent')
        miCanvas = document.getElementById('pizarra')
        posicion = miCanvas.getBoundingClientRect()
        correccionX = posicion.x
        correccionY = posicion.y
        // if (this.count === 1) {
            this.sizeCanvas (contenido.clientWidth, contenido.clientHeight)
        // }
        contenido.style.zIndex = 1
        miCanvas.style.zIndex = 2

        this.mouse = false
        this.pencil = true
    },
    sizeCanvas (clientWidth, clientHeight) {
        miCanvas.width = clientWidth
        miCanvas.height = clientHeight
        miCanvas.style.width = clientWidth + 'px'
        miCanvas.style.height = clientHeight + 'px'
    },
    empezarDibujo () {
        if (this.pencil == true) {
            pintarLinea = true;
            lineas = []
            lineas.push([])
        }
    },
    drawOnCanvas (event) {
        event.preventDefault()
        if (pintarLinea) {
            ctx = miCanvas.getContext('2d')
            // Estilos de linea
            ctx.lineJoin = ctx.lineCap = 'round'
            // Marca el nuevo punto
            let nuevaPosicionX = 0
            let nuevaPosicionY = 0
            if (event.changedTouches === undefined) {
                // Versión ratón
                nuevaPosicionX = event.layerX
                nuevaPosicionY = event.layerY
            } else {
                // Versión touch, pantalla tactil
                nuevaPosicionX = event.changedTouches[0].pageX - correccionX
                nuevaPosicionY = event.changedTouches[0].pageY - correccionY
            }
            // Guarda la linea
            lineas[lineas.length - 1].push({
                x: nuevaPosicionX,
                y: nuevaPosicionY,
                color: this.color,
                size: this.selected
                // transparency: 0.1
            });
            // Redibuja todas las lineas guardadas
            ctx.beginPath()
            lineas.forEach(function (segmento) {
                ctx.moveTo(segmento[0].x, segmento[0].y)
                segmento.forEach(function (punto, index) {
                    ctx.lineWidth = punto.size
                    ctx.strokeStyle = punto.color
                    // ctx.globalAlpha = punto.transparency;
                    ctx.lineTo(punto.x, punto.y)
                    
                });
            });
            ctx.stroke()
        }
    },
    stopDraw () {
        pintarLinea = false
    }
  }
}
</script>

<style scoped>
    #pizarra {
        /* background-color:yellow; */
        width: 0px;
        height: 0px;
        position: absolute;
        top: 140px;
        left: 150px;
    }
</style>
