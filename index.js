const express = require('express')
const bodyparser = require('body-parser')
const userRouters = require('./routes/users')

const miApp = express()
const PORT = 3000

miApp.use(bodyparser.json())
//Ruta Principal
miApp.use('/api/users', userRouters)

//Manejo de error si no existe la ruta
miApp.use((req, res)=>{
    res.status(404).json({message: "Ay q mal"})
})

miApp.listen(PORT,()=>{
    console.log("Servidor corriendo en el puerto:", PORT)
})