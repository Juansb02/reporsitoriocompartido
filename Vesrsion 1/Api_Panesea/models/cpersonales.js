import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const cpersonalesSchema = new Schema(
    {
        id: {type: String, required: [true, 'Id requerido']},
        nombre: {type: String, required: [true, 'Nombre requerido']},
        precio: {type: Number, required: [true, 'Precio requerido']},
        imagen: String,
        descripcion: {type: String, default: 'Lorem'}
    }
);

// Convertir a modelo
const cpersonales = mongoose.model('cpersonales', cpersonalesSchema);

export default cpersonales;