import mongoose from "mongoose";

const productoSchema = new mongoose.Schema({
    nombre: {type: String, require: true},
    descripcion: {type: String, require: true},
    codigo: {type: Number, require: true},
    thumbnail: {type: String, require: true},
    precio: {type: String, require: true},
    stock: {type: Number, require: true}
});

const ProductoModel = mongoose.model('productos', productoSchema);

export default ProductoModel;