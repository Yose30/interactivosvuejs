<template>
  <div class="container">
    <button class="btn btn-primary" @click="pencil = true">Dibujar</button>
    <button class="btn btn-warning" @click="cleanAll">Borrar todo</button>
    <hr>
    <canvas id="pizarra" @mousedown="empezarDibujo" @mousemove="dibujarLinea" @mouseup="pararDibujar"></canvas>
  </div>
</template>

<script>
let miCanvas
let m
let lineas
let correccionX
let correccionY
let pintarLinea
let posicion
export default {
  name: 'Draw',
  data () {
    return {
        pencil: false
    }
  },
  mounted: function () {
    this.dibujar()
  },
  methods: {
    cleanAll () {
        m.clearRect(0, 0, miCanvas.width, miCanvas.height)
    },
    dibujar () {
        miCanvas = document.getElementById('pizarra')
        m = miCanvas.getContext('2d')
        lineas = []
        correccionX = 0
        correccionY = 0
        pintarLinea = false
        posicion = miCanvas.getBoundingClientRect()
        correccionX = posicion.x
        correccionY = posicion.y
        miCanvas.width = 500
        miCanvas.height = 500
    },
    empezarDibujo () {
        if (this.pencil == true) {
            pintarLinea = true;
            lineas.push([])
        }
    },
    dibujarLinea (event) {
        event.preventDefault()
        if (pintarLinea) {
            let ctx = miCanvas.getContext('2d')
            // Estilos de linea
            ctx.lineJoin = ctx.lineCap = 'round';
            ctx.lineWidth = 10;
            // Color de la linea
            ctx.strokeStyle = '#1111b8';
            // Marca el nuevo punto
            let nuevaPosicionX = 0;
            let nuevaPosicionY = 0;
            if (event.changedTouches == undefined) {
                // Versión ratón
                nuevaPosicionX = event.layerX;
                nuevaPosicionY = event.layerY;
            } else {
                // Versión touch, pantalla tactil
                nuevaPosicionX = event.changedTouches[0].pageX - correccionX;
                nuevaPosicionY = event.changedTouches[0].pageY - correccionY;
            }
            // Guarda la linea
            lineas[lineas.length - 1].push({
                x: nuevaPosicionX,
                y: nuevaPosicionY
            });
            // Redibuja todas las lineas guardadas
            ctx.beginPath();
            lineas.forEach(function (segmento) {
                ctx.moveTo(segmento[0].x, segmento[0].y)
                segmento.forEach(function (punto, index) {
                    ctx.lineTo(punto.x, punto.y);
                });
            });
            ctx.stroke();
        }
    },
    pararDibujar () {
        pintarLinea = false;
    }
  }
}
</script>

<style scoped>
    #pizarra {
        width: 500px;
        height: 500px;
        background-color: transparent;
    }
</style>
