// Exportar configuración
module.exports = router;

import express from 'express';
const router = express.Router();

// Importar modelo
import suplementos from '../models/suplementos';

// Ruta para consultar todos los productos
router.get('/suplementos', async(req, res) => {
    try {
        const suplementosDB = await suplementos.find();
        res.json(suplementosDB);
    } catch (error) {
        return res.status(400).json({
            mensaje: 'Se presentó un error al consultar los suplementos',
    error
        })
    }
});

// Exportar configuración
module.exports = router;