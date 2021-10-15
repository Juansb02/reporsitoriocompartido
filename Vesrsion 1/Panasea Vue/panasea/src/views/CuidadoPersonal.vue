<template>
<div id="contenido">
        <div class="container div-galeria" id="galeria">
            <div class="row fila-cuidadosPersonales">
                <div v-for="cuidadoPersonal in cuidadosPersonales" :key="cuidadoPersonal.id" class="col-lg-4 col-md-6 col-sm-6 col-xs-12 tarjeta-producto">
                    <img class="imagen-producto" :src="getPictureProducto(cuidadoPersonal.imagen)">
                    <h1 class="nombre-producto">{{cuidadoPersonal.nombre}}</h1>
                    <h3 class="precio-producto">${{cuidadoPersonal.precio}}</h3>
                    <div class="descripcion-producto">
                        <p>{{cuidadoPersonal.descripcion}}</p>
                    </div>
                    <div id="icono" class="div-icono">
                        <i class="las la-cart-arrow-down estilo-icono" @click="agregarAlCarrito(cuidadoPersonal)"></i>
                        <p><b>Agregar al carrito</b></p>
                    </div>
                </div>
            </div>
        </div>
        <div class="tarjeta-total">
            <h1>TOTAL</h1>
            <h2 id="total_carrito">${{total_carrito}}</h2>
        </div>
    </div>
</template>
<script>
import axios from 'axios'
export default {
    data () {
        return {
            cuidadosPersonales: [],
            carrito: [],
            total_carrito: 0
        }
    },
    created () {
        this.cargarcuidadosPersonales()
        /* this.cuidadosPersonales = [
            {
                id: 1,
                nombre: 'Ganozhi Crema de Dientes',
                precio: 41300,
                imagen: 'cremadental.png',
                descripcion: 'Pasta de dientes innovadora que contiene extracto de Ganoderma de la más alta calidad, mentol y saborizante en pasta. No contiene sacarina o colorantes y limpiara efectivamente sus dientes para proporcionarle un aliento saludable y brillante en cada sonrisa.'
            },
            {
                id: 2,
                nombre: 'Aceite de Masaje Gano',
                precio: 46300,
                imagen: 'aceitemasajes.png',
                descripcion: 'Notable mezcla deleitosa de aceite de masaje que contiene el más fino aceite de palma y extracto de Ganoderma que son totalmente naturales. Simplemente comience con el Aceite de Masaje Gano como una manera revolucionaria de animar su masaje y relajar su cuerpo todo el tiempo.'
            }
            
        ]
        */
    }, 
    methods: {
        getPictureProducto (nombre_archivo) {
            /* Función para cargar imágenes dinámicamente */
            var images = require.context('@/assets/productos/', false, /\.jpg$|\.png$/)
            return images('./' + nombre_archivo)
        },
        agregarAlCarrito(cuidadoPersonal) {
            this.carrito.push(cuidadoPersonal)
            console.log(this.carrito)
            this.total_carrito = this.total_carrito + cuidadoPersonal.precio
            this.$swal.fire(
                'Producto agregado',
                'Se ha agregado ' + cuidadoPersonal.nombre + ' al carrito de compras',
                'success'
            )
        },
        cargarcuidadosPersonales () {
        axios.get('https://panacea-online.herokuapp.com/Api/cpersonales')
        .then(response => {
            let status_peticion = response.status
            console.log(status_peticion)
            this.cuidadosPersonales = response.data
        })
        }
    }
}
</script>