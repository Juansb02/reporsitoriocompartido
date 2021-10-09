import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const alimentosSchema = new Schema(
    {
        id: {type: String, required: [true, 'Id requerido']},
        nombre: {type: String, required: [true, 'Nombre requerido']},
        precio: {type: Number, required: [true, 'Precio requerido']},
        imagen: String,
        descripcion: {type: String, default: 'Lorem'}
    }
);

// Convertir a modelo
const alimentos = mongoose.model('alimentos', alimentosSchema);

export default alimentos;