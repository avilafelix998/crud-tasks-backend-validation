import { createConnection } from "mysql2/promise";

const newConnection = async () => {

   try {
    const connection = await createConnection({
        host: "localhost",
        user: "root",
        database: "Tasks_db" // la base de datos
    })

    await connection.connect()
    console.log("conectado a la base correctamente");

    return connection
   } catch (error) {
    console.log("error al conectarse", error)
   }
}

export{
    newConnection
}
