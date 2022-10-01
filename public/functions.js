export const desnomalize = (data) => {
    const author = new normalizr.schema.Entity('authors');
    const message = new normalizr.schema.Entity('messages', {
        author: author
    });
    const chats = new normalizr.schema.Entity('chats', {
        messages: [message]
    });
    const denormalizedData = normalizr.denormalize(data.result, chats, data.entities);
    return denormalizedData;
    
}