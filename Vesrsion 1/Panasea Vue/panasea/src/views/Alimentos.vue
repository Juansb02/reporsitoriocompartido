<template>
        <div class="container div-galeria" id="galeria">
            <div class="row fila-alimentos">
                <div v-for="alimento in alimentos" :key="alimento.id" class="col-lg-4 col-md-6 col-sm-6 col-xs-12 tarjeta-producto">
                    <img class="imagen-producto" :src="getPictureProducto(alimento.imagen)">
                    <h1 class="nombre-producto">{{alimento.nombre}}</h1>
                    <h3 class="precio-producto">${{alimento.precio}}</h3>
                    <div class="descripcion-producto">
                        <p>{{alimento.descripcion}}</p>
                    </div>
                    <div id="icono" class="div-icono">
                        <i class="las la-cart-arrow-down estilo-icono" @click="agregarAlCarrito(alimento)"></i>
                        <p><b>Agregar al carrito</b></p>
                    </div>
                </div>
            </div>
        </div>
        <div class="tarjeta-total">
            <h1>TOTAL</h1>
            <h2 id="total_carrito">${{total_carrito}}</h2>
        </div>
</template>
<script>
export default {
    data () {
        return {
            alimentos: [],
            carrito: [],
            total_carrito: 0
        }
    },
    created () {
        this.alimentos = [
            {
                id: 1,
                nombre: 'Cocozhi',
                precio: 91200,
                imagen: 'barras.png',
                descripcion: 'Cocozhi está formulado de la más fina cocoa con extracto de Ganoderma. Es un polvo listo para beberse, el cual te da un sabor a chocolate. Solo vierta el contenido en una taza de agua caliente y mueva para disfrutar una bebida vigorizante adecuada para toda la familia'
            },
            {
                id: 2,
                nombre: 'Morinzyme',
                precio: 74400,
                imagen: 'bebida.png',
                descripcion: 'DXN Morinzyme es una bebida botánica fermentada de Noni que producida a partir del proceso de fermentación de concentrado de Noni. La fermentación puede ayudar a preservar los nutrientes en la bebida y también produce muchas enzimas.'
            }
            
        ]
    },
    methods: {
        getPictureProducto (nombre_archivo) {
            /* Función para cargar imágenes dinámicamente */
            var images = require.context('@/assets/productos/', false, /\.jpg$|\.png$/)
            return images('./' + nombre_archivo)
        },
        agregarAlCarrito(alimento) {
            this.carrito.push(alimento)
            console.log(this.carrito)
            this.total_carrito = this.total_carrito + alimento.precio
            this.$swal.fire(
                'Producto agregado',
                'Se ha agregado ' + alimento.nombre + ' al carrito de compras',
                'success'
            )
        }
    }
}
</script>