const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const userRoutes = require('./route/user.route');
const port = process.env.PORT || 9000; //la primera opcion indica que tome el puerto en el archivo .env en caso de desplegar la aplicacion
const app = express();

// middlware
app.use(express.json())
app.use('/api', userRoutes);


// routes
app.get('/', (req, res) =>{
    res.send("welcome to api");
});

// mongodb connection
mongoose
.connect(process.env.MONGODB_URI)
.then(()=>console.log("connection OK"))
.catch((err)=>console.error(err));


app.listen(port, ()=>{
    console.log("servidor a la espera de conexiones", port);
});
