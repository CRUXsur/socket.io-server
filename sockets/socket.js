const { Server } = require('socket.io');
const {io} = require('../index');
const Band = require('../models/band');
const Bands = require('../models/bands');

const bands = new Bands();

bands.addBand(new Band('Queen'));
bands.addBand(new Band('Bon Jovi'));
bands.addBand(new Band('Heroes del Silencio'));
bands.addBand(new Band('Metallica'));

console.log(bands);

//Mensajes de Sockets
io.on('connection', client =>{
    console.log('Cliente conectado');

    //* cuando un cliente se conecta, yo puedo hacerle una emision de todas
    //* las bandas que estan registradas actualmente en el servidor
    //* asi como esten....y solo se las voy a emitir al cliente que se conecte
    client.emit('active-bands', bands.getBands());


    client.on('disconnect', () => {
        console.log('Cliente desconectado');
    });

    client.on('mensaje', ( payload ) => {
        console.log('Mensaje!!!', payload);
        io.emit( 'mensaje', { admin: 'Nuevo mensaje' } );
    });

    client.on('emitir-mensaje', ( payload ) => {
        //console.log(payload);
        //io.emit( 'nuevo-mensaje', payload ); //emite a todos
        client.broadcast.emit( 'nuevo-mensaje', payload ); //emite a todos menos el que lo emitio
    });
});

