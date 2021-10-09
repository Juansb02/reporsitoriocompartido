import express from 'express';
const router = express.Router();

// Importar modelo
import clientes from '../models/clientes';

// Ruta para crear cliente
router.post('/cliente', async(req, res) => {
    const body = req.body.data;
    // console.log(body);
    try {
        const clientesDB = await clientes.create(body);
        res.status(200).json(clientesDB);
    } catch (error) {
        return res.status(400).json({
            mensaje: 'Sucedió un error al crear el clientes',
            error
        })
    }
});

// Ruta para buscar cliente
router.get('/clientes/:identificacion', async(req, res) => {
    const identificacion = req.params.identificacion;
    try {
        console.log(identificacion)
        const clientesDB = await clientes.findOne({identificacion});
        res.json(clientesDB);
    } catch (error) {
        return res.status(400).json({
            mensaje: 'Ocurrió un error al buscar clientes',
            error
        })
    }
});

// Ruta para actualizar cliente
router.put('/actualizar-clientes/:id', async(req, res) => {
    const _id = req.params.id
    const body = req.body;
    try {
        const clientesDB = await clientes.findByIdAndUpdate(
            _id,
            body,
            {new: true}
        );
        res.json(clientesDB);
    } catch (error) {
        return res.status(400).json({
            mensaje: 'Ocurrió un error al actualizar el cliente',
            error
        })
    }
});

// Ruta para eliminar cliente
router.delete('/eliminar-clientes/:id', async(req, res) => {
    const _id = req.params.id;
    try {
        const clientesDB = await clientes.findByIdAndDelete({_id});
        if(!clientesDB){
            return res.status(400).json({
                mensaje: 'No se encontró el cliente',
                error
            })
        }
        res.json(clientesDB);
    } catch (error) {
        return res.status(400).json({
            mensaje: 'Ocurrió un error al eliminar el cliente',
            error
        })
    }
});


// Exportar configuración
module.exports = router;

