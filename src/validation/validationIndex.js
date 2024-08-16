import {body} from "express-validator"

const tasksValidation = [
    body("title")
.notEmpty().withMessage("no debe tener espacios vacios")
.isString().withMessage("debe ser de caracter string")
.isLength({max:255}).withMessage("no debe ser mayor a 255 caracteres"),
body("description")
.notEmpty().withMessage("no debe contener espacios vacíos")
.isString().withMessage("debe ser de caracter string"),
body("isComplete")
.notEmpty().withMessage("no debe contener espacios vacíos")
.isBoolean().withMessage("el valor debe ser boolean")
]
export {tasksValidation}