import express from "express";
import Carrito from "../clases/carrito.class.js";

const router = express.Router();

const carrito = new Carrito();

router.post("/", (req, res) => {
    const carritoCreado = carrito.crearCarrito();
    res.send(carritoCreado);
});

router.delete("/:id", (req, res) => {
    const carritoBorrado = carrito.borrar(req.params.id);
    res.send(carritoBorrado);
});

router.get("/", (req, res) => {
    const listaCarritos = carrito.listarAll();
    res.send(listaCarritos);
});

router.get("/:id/productos", (req, res) => {
    const listaCarro = carrito.listar(req.params.id);
    res.send(listaCarro);
});

router.post("/:id/productos/:idPrd", (req, res) => {
    const modCarrito = carrito.guardarProductoEnCarrito(
        req.params.idPrd,
        req.params.id
    );
    res.send(modCarrito);
});

router.delete("/:id/productos/:idPrd", (req, res) => {
    const deleteProdCarrito = carrito.eliminarProductoEnCarrito(
        req.params.idPrd,
        req.params.id
    );
    res.send(deleteProdCarrito);
})

export default router;
