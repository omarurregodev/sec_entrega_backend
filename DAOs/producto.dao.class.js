import mongoose from "mongoose";
import ProductoModel from "../models/ProductoModel.js";

export default class Producto {
    // static productos = [];
    constructor() {
        this.url = 'mongodb+srv://omarurregodev:oturrego1234@cluster0.bwe1f85.mongodb.net/?retryWrites=true&w=majority'
        this.mongodb = mongoose.connect;
        // this.id = 0;
    }
    
    async guardar(prod) {
        try {
            await this.mongodb(this.url);
            const newProduct = new ProductoModel(prod);
            return await newProduct.save();
        } catch (err) {
            console.log(err);
        }
        // prod.id = ++this.id;
        // prod.timeStamp = Date.now();
        // Producto.productos.push(prod);
        // return prod;
    }

    listar(id) {
        try {
            
        } catch (error) {
            
        }
        // let producto = Producto.productos.find((prod) => prod.id == id);
        // return producto || {error: "producto no encontrado"}
    }

    listarAll() {
        try {
            
        } catch (error) {
            
        }
        // return Producto.productos.length
        // ? Producto.productos
        // : {error: "no hay productos cargados"}
    }


    actualizar(prod, id) {
        try {
            
        } catch (error) {
            
        }
        // const productId = Producto.productos.filter(data => data.id === parseInt(id));
        // if (productId.length > 0) {
        //     productId[0].nombre = prod.nombre;
        //     productId[0].descripcion = prod.descripcion;
        //     productId[0].codigo = prod.codigo;
        //     productId[0].foto = prod.foto;
        //     productId[0].precio = prod.precio;
        //     productId[0].stock = prod.stock;
        //     return productId[0]        
        // } else {
        //     return ({"error":"Producto no encontrado"});
        // }
    }

    borrar(id) {
        try {
            
        } catch (error) {
            
        }
        // let index = Producto.productos.findIndex((prod) => prod.id == id);
        // return Producto.productos.splice(index, 1);
    }
}