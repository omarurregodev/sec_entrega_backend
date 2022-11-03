import mongoose from "mongoose";

const productoSchema = new mongoose.Schema({
    nombre: String,
    descripcion: String,
    codigo: Number,
    thumbnail: String,
    precio: String,
    stock: Number
});

const ProductoModel = mongoose.model('productos', productoSchema);

export default ProductoModel;