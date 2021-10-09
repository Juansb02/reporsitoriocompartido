import { createWebHistory, createRouter } from "vue-router"

import Home from "@/views/Home.vue"
import Categorias from "@/views/Categorias.vue"
import Suplementos from "@/views/Suplementos.vue"
import CuidadoPersonal from "@/views/CuidadoPersonal.vue"
import LineaVegana from "@/views/LineaVegana.vue"
import Alimentos from "@/views/Alimentos.vue"
import Clientes from "@/views/Clientes.vue"
import Recetas from "@/views/Recetas.vue"
import Carrito from "@/views/Carrito.vue"
import NotFound from "@/views/NotFound.vue"

const routes = [
    {
        path: "/",
        name: "Home",
        component: Home
    },
    {
        path: "/categorias",
        name: "Categorias",
        component: Categorias
    },
    {
      path: "/suplementos",
      name: "Suplementos",
      component: Suplementos
    },
    {
      path: "/cuidadoPersonal",
      name: "CuidadoPersonal",
      component: CuidadoPersonal
    },
    {
      path: "/lineaVegana",
      name: "LineaVegana",
      component: LineaVegana
    },
    {
      path: "/alimentos",
      name: "Alimentos",
      component: Alimentos
    },
    {
        path: "/clientes",
        name: "Clientes",
        component: Clientes
    },
    {
        path: "/recetas",
        name: "Recetas",
        component: Recetas
    },
    {
        path: "/carrito",
        name: "Carrito",
        component: Carrito
    },
    {
        path: "/:catchAll(.*)",
        component: NotFound,
    }
]
const router = createRouter({
    history: createWebHistory(),
    routes
  })
export default router