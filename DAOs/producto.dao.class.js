import mongoose from "mongoose";
import ProductoModel from "../models/ProductoModel.js";

export default class Producto {

    constructor() {
        this.url = 'mongodb+srv://omarurregodev:oturrego1234@cluster0.bwe1f85.mongodb.net/?retryWrites=true&w=majority'
        this.mongodb = mongoose.connect;
    }
    
    async guardar(prod) {
        try {
            await this.mongodb(this.url);
            const newProduct = new ProductoModel(prod);
            return await newProduct.save();
        } catch (err) {
            throw new Error('No se pudo guardar el producto.');
        }
    }

    async listar(id) {
        try {
            await this.mongodb(this.url);
            return await ProductoModel.findById(id);
        } catch (err) {
            throw new Error('No se puede listar el producto.');
        }
    }

    async listarAll() {
        try {
            await this.mongodb(this.url);
            return await ProductoModel.find();
        } catch (err) {
            throw new Error('No se pueden listar los productos.');
        }
    }


    async actualizar(prod, id) {
        try {
            await this.mongodb(this.url);
            return await ProductoModel.findByIdAndUpdate(id, prod,{ new: true });
        } catch (err) {
            throw new Error('El producto no pudo ser actualizado.');
        }
    }

    async borrar(id) {
        try {
            await this.mongodb(this.url);
            return await ProductoModel.findByIdAndDelete(id);
        } catch (err) {
            throw new Error('El producto no pudo ser eliminado.');
        }
    }
}