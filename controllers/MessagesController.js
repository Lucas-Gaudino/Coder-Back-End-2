import mongoose from 'mongoose';
import Message from '../models/messageSchema.js';
import { normalizeMessages } from '../src/normallizer/normalizeMessages.js';
import { createId } from '../models/mocks/index.js';

export default class MessagesController {
    async connectMDB() {
        try {
            await mongoose.connect('mongodb://localhost:27017/chat', {
                useNewUrlParser: true,
                useUnifiedTopology: true,
            });
        } catch (error) {
            console.log(error);
        }
    }

    async save(message) {
        await this.connectMDB();
        message.id = await createId();
        let timestamp = new Date();
        message.timestamp = timestamp.toLocaleString();
        await Message.create(message);
        mongoose.disconnect();
        return message;

    }  catch (error) {
        console.log(error);
    }
    async getAll() {
        await this.connectMDB();
        const messages = await Message.find();
        const normalizedMessages = await normalizeMessages(messages);
        mongoose.disconnect();
        return normalizedMessages;

    }
}

// Language: javascript
// Path: models\messageSchema.js    
// Compare this snippet from src\utils\chatSocket.js:
// import mongoose from 'mongoose';
//  
   
