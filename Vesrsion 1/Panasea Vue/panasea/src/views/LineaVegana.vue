<template>
    <div id="contenido">
        <div class="container div-galeria" id="galeria">
            <div class="row fila-lineasVeganas">
                <div v-for="lineaVegana in lineasVeganas" :key="lineaVegana.id" class="col-lg-4 col-md-6 col-sm-6 col-xs-12 tarjeta-producto">
                    <img class="imagen-producto" :src="getPictureProducto(lineaVegana.imagen)">
                    <h1 class="nombre-producto">{{lineaVegana.nombre}}</h1>
                    <h3 class="precio-producto">${{lineaVegana.precio}}</h3>
                    <div class="descripcion-producto">
                        <p>{{lineaVegana.descripcion}}</p>
                    </div>
                    <div id="icono" class="div-icono">
                        <i class="las la-cart-arrow-down estilo-icono" @click="agregarAlCarrito(lineaVegana)"></i>
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
export default {
    data () {
        return {
            lineasVeganas: [],
            carrito: [],
            total_carrito: 0
        }
    },
    created () {
        this.lineasVeganas = [
            {
                id: 1,
                nombre: 'R3:1 Recovery',
                precio: 25000,
                imagen: 'lineavegana2.png',
                descripcion: 'Optimiza la recuperación y evita lesiones y sobreentrenamiento con R3:1 Vegan Recovery. Formulado para todos aquellos deportistas que busquen optimizar los procesos de recuperación del organismo después de ejercicios físicos con elevado desgaste. Entre sus ingredientes destacamos: Arroz ecológico, Sirope de agave y concentrado de uva, Proteína de arroz y guisante, BCAAs, L-Citrulina, Extractos de frutas y verduras,Complejo mineral y vitamínico.'
            },
            {
                id: 2,
                nombre: 'Vegan Energy Gel',
                precio: 84900,
                imagen: 'lineavegana1.png',
                descripcion: 'Optimiza el rendimiento y retrasa la fatiga muscular con Vegan Energy Gel; perfecto para situaciones de máxima demanda energética. Vegan Energy Gel es recomendable para todo tipo de deportistas, en especial aquellos que siguen una alimentación vegana, y que busquen un aporte energético (inmediato y sostenido) de origen natural durante la actividad física. Formulado a base de: Arroz ecológico, Sirope de agave y concentrado de uva, Zumo concentrado de limón y naranja, Acerola'
            }
            
        ]
    },
    methods: {
        getPictureProducto (nombre_archivo) {
            /* Función para cargar imágenes dinámicamente */
            var images = require.context('@/assets/productos/', false, /\.jpg$|\.png$/)
            return images('./' + nombre_archivo)
        },
        agregarAlCarrito(lineaVegana) {
            this.carrito.push(lineaVegana)
            console.log(this.carrito)
            this.total_carrito = this.total_carrito + lineaVegana.precio
            this.$swal.fire(
                'Producto agregado',
                'Se ha agregado ' + lineaVegana.nombre + ' al carrito de compras',
                'success'
            )
        }
    }
}
</script>