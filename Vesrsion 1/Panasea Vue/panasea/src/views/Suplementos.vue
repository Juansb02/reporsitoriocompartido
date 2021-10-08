<template>
    <div id="contenido">
        <div class="container div-galeria" id="galeria">
            <div class="row fila-suplementos">
                <div v-for="suplemento in suplementos" :key="suplemento.id" class="col-lg-4 col-md-6 col-sm-6 col-xs-12 tarjeta-producto">
                    <img class="imagen-producto" :src="getPictureSuplemento(suplemento.imagen)">
                    <h1 class="nombre-producto">{{suplemento.nombre}}</h1>
                    <h3 class="precio-producto">${{suplemento.precio}}</h3>
                    <div class="descripcion-producto">
                        <p>{{suplemento.descripcion}}</p>
                    </div>
                    <div id="icono" class="div-icono">
                        <i class="las la-cart-arrow-down estilo-icono" @click="agregarAlCarrito(suplemento)"></i>
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
            suplementos: [],
            carrito: [],
            total_carrito: 0
        }
    },
    created () {
        this.suplementos = [
            {
                id: 1,
                nombre: 'Reishi Gano',
                precio: 209100,
                imagen: 'suplemento1.png',
                descripcion: 'Reishi Gano (RG) está formulado a partir de Ganoderma lucidum, cultivado en una granja orgánica acreditada, se cosecha de un hongo rojo de 90 días, viene en forma de cápsula y polvo.</p><p> Ingrediente:</p> <p>100% Ganoderma lucidum.'
            },
            {
                id: 2,
                nombre: 'Ganocelium',
                precio: 209100,
                imagen: 'suplemento2.png',
                descripcion: 'Cosecha de un micelio de 14 días de Ganoderma lucidum, producido en una fábrica certificada de Buenas Prácticas de Manufactura (GMP), como RG, Ganocelium también está disponible en forma de cápsula y polvo.</p><p>Ingrediente:</p><p>Micelio de Ganoderma lucidum.'
            }
            
        ]
    },
    methods: {
        getPictureSuplemento (nombre_archivo) {
            /* Función para cargar imágenes dinámicamente */
            var images = require.context('@/assets/productos/', false, /\.jpg$|\.png$/)
            return images('./' + nombre_archivo)
        },
        agregarAlCarrito(suplemento) {
            this.carrito.push(suplemento)
            console.log(this.carrito)
            this.total_carrito = this.total_carrito + suplemento.precio
            this.$swal.fire(
                'Producto agregado',
                'Se ha agregado ' + suplemento.nombre + ' al carrito de compras',
                'success'
            )
        }
    }
}
</script>