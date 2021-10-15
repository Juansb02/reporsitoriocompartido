<template>
        <div class="container">
            <h1 align="center" class ="tituloPrincipal">PANACEA</h1>
            <h3 align="center" class ="eslogan">"Motiva tu cuerpo, tu mente y sentirás el cambio"</h3>

            <nav class="navbar navbar-light bg-light">
            <div class="container-fluid">
                <a class="navbar-brand"></a>
                <form class="d-flex">
                <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
                <button class="btn btn-outline-secondary" type="submit">Search</button>
                </form>
            </div>
            </nav>

            <div class="row">
            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <div id="header">
                <table id="navBar">
                    <tr>
                    <th><a><router-link to="/">Inicio</router-link></a></th>                
                        <th>
                            <li><a><router-link to="/categorias">Categorias</router-link></a>
                                <ul class="navBar">
                                    <li><a><router-link to="/suplementos">Suplementos</router-link></a></li>
                                    <li><a><router-link to="/cuidadoPersonal">Cuidado Personal</router-link></a></li>
                                    <li><a><router-link to="/lineaVegana">Línea Vegana</router-link></a></li>
                                    <li><a><router-link to="/alimentos">Alimentos</router-link></a></li>
                                </ul>
                            </li>
                                    
                        </th>
                    <th><a><router-link to="/clientes">Clientes</router-link></a></th>
                    <th><a><router-link to="/recetas">Recetas</router-link></a></th>
                    <th><a><router-link to="/carrito">Carrito de Compras</router-link></a></th>
                    </tr>
    </table>
</div>
</div>
</div>
</div>
    <br>
</template>