import MessagesController from '../../controllers/MessagesController.js';
import { normalizeMessages } from '../normallizer/NormalizeMessages.js';
import { createId } from '../../models/mocks/index.js';

const messagesController = new MessagesController();

export const chatSocket = (socket, io) => {
    socket.on('new-message', async (data) => {
        const { message, user } = data;
        const newMessage = {
            id: createId(),
            message,
            user,
            timestamp: new Date().toLocaleString(),
        };
        await messagesController.create(newMessage);
        const messages = await messagesController.read();
        const normalizedMessages = normalizeMessages(messages);
        io.sockets.emit('messages', normalizedMessages);
    });
};

