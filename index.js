// Este es mi servidor que esta escuchando peticiones!!!!
// lo corro en la terminal con: node index

//creo una constante express y import el paquete de express
const express = require('express');
const path = require('path');//import un paqueteS
require('dotenv').config();// variables de entorno


//ahora me creo una aplicacion
//App de Express
const app = express(); //estolo inicializa y estoy listo2listen peticiones


//*
//app.listen(process.env.PORT, (err)=>{
//    if(err) throw new Error(err);
//    console.log('Servidor corriendo en puerto', process.env.PORT)
//});




// me creo el servidor de sockets;
// Node server
const server = require('http').createServer(app);
//const io = require('socket.io')(server);//esto cambia a....
//porque llevamos io a socket.js
module.exports.io = require('socket.io')(server);
//llamo el archivo socket.js
require('./sockets/socket');







// Path publico o carpeta publica
const publicPath = path.resolve( __dirname, 'public' );
// yo necesito decirle a mi aplicacion de express a esta
// const app = express();.... que, tiene este publicPath que lo sirva
// que cuando se haga una peticion que lo muestre esto!....
app.use( express.static( publicPath) );


// tengo que estar escuchando en algun puerto 3000,(reemplazo por
// process.env.PORT) 
// y llamo el siguiente callback( err ) que me retorna un error,
// si sucede....
server.listen( process.env.PORT, ( err ) => {
    //
     if ( err ) throw new Error(err);
     console.log(`Servidor corriendo en puerto`, process.env.PORT);
 });