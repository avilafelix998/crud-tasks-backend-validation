import express, { json } from 'express';
import cors from 'cors';
import { newConnection } from './src/base_Datos/baseDatos.js';
import {router} from "./src/routes/routes.js"
const app = express();


//Middleware
app.use(json());
app.use(cors())
app.use(router)


app.listen(4000, async ()=>{
    await newConnection()
    console.log("servidor funcionando en el puerto 4000");
})


