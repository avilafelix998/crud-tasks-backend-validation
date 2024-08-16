import { newConnection } from "../base_Datos/baseDatos.js";




//seleccionar tarea
async function obtenerTasks(req, res){
try {
        const connection = await newConnection()
        const result = await connection.query("SELECT * FROM tasks")
        res.json(result[0]);  
        connection.end()
    
} catch (error) {
    res.sendStatus(500)
}}



//seleccionar tarea  por id
async function obtenerId(req, res){
    try {
        const connection = await newConnection()

        const id = req.params.id
        const result = await connection.query("SELECT * FROM tasks where id = ?", id)

        res.json(result[0]);  
        connection.end()  
    } catch (error) {
        res.sendStatus(500)
    }  
    }

// agregar tareas
async function agregarTasks(req, res){
    try {
        
    } catch (error) {
        
    }
    const connection = await newConnection()

    const {title, description, isComplete} = req.body
    const result = await connection.query("INSERT INTO tasks (`title`, `description`, `isComplete`) values (?, ?, ?)", [title, description, isComplete])

    res.json({msg: "Se agregó la nueva tarea"});

    connection.end()
}




//editar tarea por id 
async function editarPorId(req, res){
    try {
        const connection = await newConnection()
        const id = req.params.id
        const {title, description, isComplete} = req.body
        await connection.query("UPDATE tasks SET `title`=?,`description`=?,`isComplete`=? WHERE id = ?", [title, description, isComplete, id])
    
        res.json({msg: "Se actualizó la base de datos correctamente"}) 
        
        connection.end()
    
    } catch (error) {
        res.sendStatus(500)
    }}


//eliminar tarea por id
async function eliminarId(req, res){
    try {
        const connection = await newConnection()

    const id = req.params.id
    const result = await connection.query("DELETE FROM tasks where id = ?", id)

    res.json({msg: "Se eliminó correctamente"}) 
    connection.end()
    } catch (error) {
        res.sendStatus(500)
    }
    
}


    export {
        obtenerTasks,
        obtenerId,
        agregarTasks,
        eliminarId,
        editarPorId
    }