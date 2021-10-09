// Exportar configuración
module.exports = router;

import express from 'express';
const router = express.Router();

// Importar modelo
import cpersonales from '../models/cpersonales';

// Ruta para consultar todos los productos
router.get('/cpersonales', async(req, res) => {
    try {
        const cpersonalesDB = await cpersonales.find();
        res.json(cpersonalesDB);
    } catch (error) {
        return res.status(400).json({
            mensaje: 'Se presentó un error al consultar los cpersonales',
      
 error
        })
    }
});

// Exportar configuración
module.exports = router;