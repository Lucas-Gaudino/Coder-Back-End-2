import mongoose from 'mongoose';

const messageSchema = new mongoose.Schema({
    
        
        author:{
            id: { type: Number, required: true },
            email: { type: String, required: true },
            nombre: { type: String, required: true },
            apellido: { type: String, required: true },
            edad: { type: Number, required: true },
            alias: { type: String, required: true },
            avatar: { type: String, required: true },
        },
        message: { type: String, required: true },
        timestamp: { type: String, required: true }

        },
        {
            versionKey: false,
        }
    );

const Message = mongoose.model('Message', messageSchema);