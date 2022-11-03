import express from "express";
import Producto from "../DAOs/producto.dao.class.js";

const router = express.Router();

const producto = new Producto();
function validarAdmin(req, res, next) {
    if(req.query.admin){
        next();
    } else {
        res.send("Usted no tiene acceso")
    }
}

router.post("/", validarAdmin, async (req, res) => {
    console.log(req.body);
    const productoCreado = await producto.guardar(req.body);
    res.send(productoCreado);
});

router.delete("/:id", validarAdmin, async (req, res) => {
    const productoBorrado = await producto.borrar(req.params.id);
    res.send(productoBorrado);
});

router.get("/", async (req, res) => {
    const listaProductos = await producto.listarAll();
    res.send(listaProductos);
});

router.get("/:id", async (req, res) => {
    const productoBuscado = await producto.listar(req.params.id);
    res.send(productoBuscado);
});

router.put("/:id", validarAdmin, async (req, res) => {
    console.log(req.body);
    const productoActualizado = await producto.actualizar(req.body, req.params.id);
    res.send(productoActualizado);
});

export default router;