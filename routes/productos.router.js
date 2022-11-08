import express from "express";
import Producto from "../DAOs/producto.dao.class.js";

const router = express.Router();

const producto = new Producto();
function validarAdmin(req, res, next) {
    if(req.query.admin){
        next();
    } else {
        res.status(403).json({error: 'El usuario no tiene acceso.'})
    }
}

router.post("/", validarAdmin, async (req, res) => {
    try {
        const productoCreado = await producto.guardar(req.body);
        res.send(productoCreado);
    } catch (err) {
        res.status(500).json({error: err.message});
    }
});

router.delete("/:id", validarAdmin, async (req, res) => {
    try {
        const productoBorrado = await producto.borrar(req.params.id);
        res.send(productoBorrado);
    } catch (err) {
        res.status(500).json({error: err.message});
    }
});

router.get("/", async (req, res) => {
    try {
        const listaProductos = await producto.listarAll();
        res.send(listaProductos);
    } catch (err) {
        res.status(500).json({error: err.message});
    }
});

router.get("/:id", async (req, res) => {
    try {
        const productoBuscado = await producto.listar(req.params.id);
        res.send(productoBuscado);
    } catch (err) {
        res.status(500).json({error: err.message});
    }
});

router.put("/:id", validarAdmin, async (req, res) => {
    try {
        const productoActualizado = await producto.actualizar(req.body, req.params.id);
        res.send(productoActualizado);
    } catch (err) {
        res.status(500).json({error: err.message});
    }
});

export default router;