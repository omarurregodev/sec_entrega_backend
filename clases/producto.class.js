export default class Producto {
    static productos = [];
    constructor() {
        this.id = 0;
    }

    listar(id) {
        let producto = Producto.productos.find((prod) => prod.id == id);
        return producto || {error: "producto no encontrado"}
    }

    listarAll() {
        return Producto.productos.length
        ? Producto.productos
        : {error: "no hay productos cargados"}
    }

    guardar(prod) {
        prod.id = ++this.id;
        prod.timeStamp = Date.now();
        Producto.productos.push(prod);
        return prod;
    }

    actualizar(prod, id) {
        const productId = Producto.productos.filter(data => data.id === parseInt(id));
        if (productId.length > 0) {
            productId[0].nombre = prod.nombre;
            productId[0].descripcion = prod.descripcion;
            productId[0].codigo = prod.codigo;
            productId[0].foto = prod.foto;
            productId[0].precio = prod.precio;
            productId[0].stock = prod.stock;
            return productId[0]        
        } else {
            return ({"error":"Producto no encontrado"});
        }
    }

    borrar(id) {
        let index = Producto.productos.findIndex((prod) => prod.id == id);
        return Producto.productos.splice(index, 1);
    }
}