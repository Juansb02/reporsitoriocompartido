import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import path from 'path';

const app = express();

// Conexión base de datos
const mongoose = require('mongoose');
const uri = 'mongodb+srv://panaceadb:panaceadb@cluster0.jymo5.mongodb.net/PanaceaDB?retryWrites=true&w=majority';
const options = {useNewUrlParser: true, useUnifiedTopology: true};

mongoose.connect(uri, options).then(
    () => { console.log('Conectado a DB') },
    err => { console.log(err) }
);

// Middleware
app.use(morgan('tiny'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Rutas
app.get('/', function (req, res) {
     res.send('Hola Mundo colombia!');
    });

app.use('/api', require('./routes/alimentos'));
app.use('/api', require('./routes/cpersonales'));
app.use('/api', require('./routes/lveganas'));
app.use('/api', require('./routes/suplementos'));
app.use('/api', require('./routes/cliente'));

// Middleware para Vue.js router modo history
const history = require('connect-history-api-fallback');
app.use(history());
app.use(express.static(path.join(__dirname, 'public')));
app.set('puerto', process.env.PORT || 3000);
app.listen(app.get('puerto'), function () {
    console.log('La aplicación corre en el puerto '+ app.get('puerto'));
});