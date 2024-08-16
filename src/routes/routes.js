import { Router } from 'express';
const router = Router()
import {obtenerTasks, obtenerId, agregarTasks, eliminarId, editarPorId} from "../controladores/controllers.js"
import {aplicarValidaciones} from "../validation/validationsResult.js"
import {tasksValidation} from "../validation/validationIndex.js"

router.get("/tasks", obtenerTasks)
router.get("/tasks/:id", obtenerId )
router.put("/tasks/:id",tasksValidation,aplicarValidaciones, 
editarPorId)
router.post("/tasks",tasksValidation,aplicarValidaciones,agregarTasks)
router.delete("/tasks/:id", eliminarId)

export{
    router
} 