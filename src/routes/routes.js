const { Router } = require('express');
const router = Router()
const {obtenerTasks, obtenerId, agregarTasks, eliminarId, editarPorId} = require("../controladores/controllers")


router.get("/tasks/:id", obtenerId )
router.put("/tasks/:id", editarPorId)
router.get("/tasks", obtenerTasks)
router.post("/tasks",agregarTasks)
router.delete("/tasks/:id", eliminarId)

module.exports = router