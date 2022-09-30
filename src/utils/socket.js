import { chatSocket } from './chatSocket.js';

export const socketModel = (io) => {
    io.on('connection', async (socket) => {
        console.log('Nuevo cliente conectado!');
        socket.on('disconnect', () => {
            console.log('Cliente desconectado');
        });
        socket.on('update', (data) => {
            console.log(data);
        });
        chatSocket(socket, io);
    });
}