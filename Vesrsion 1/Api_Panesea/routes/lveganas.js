// Exportar configuración
module.exports = router;

import express from 'express';
const router = express.Router();

// Importar modelo
import lveganas from '../models/lveganas';

// Ruta para consultar todos los productos
router.get('/lveganas', async(req, res) => {
    try {
        const lveganasDB = await lveganas.find();
        res.json(lveganasDB);
    } catch (error) {
        return res.status(400).json({
            mensaje: 'Se presentó un error al consultar los lveganas',
    error
        })
    }
});

// Exportar configuración
module.exports = router;