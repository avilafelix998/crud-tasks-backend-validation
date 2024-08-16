import { validationResult } from "express-validator";


function aplicarValidaciones(req,res,next){
const errores = validationResult(req)
if (!errores.isEmpty()){
    return res.status(400).json(errores)
}
next()
}
export {aplicarValidaciones}