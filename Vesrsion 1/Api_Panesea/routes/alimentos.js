// Exportar configuración
module.exports = router;

import express from 'express';
const router = express.Router();

// Importar modelo
import alimentos from '../models/alimentos';

// Ruta para consultar todos los productos
router.get('/alimentos', async(req, res) => {
    try {
        const alimentosDB = await alimentos.find();
        res.json(alimentosDB);
    } catch (error) {
        return res.status(400).json({
            mensaje: 'Se presentó un error al consultar los alimentos',
    error   
        })
    }
});

// Exportar configuración
module.exports = router;
