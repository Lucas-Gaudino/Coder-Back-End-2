import { normalize, schema } from 'normalizr';

const debugChat = (mensagges) => {
    const arr = {id: '1', chats : []};
    mensagges.forEach((element) => {
        arr.chats.push(element);
    });
    return arr;
};

export const normalizeMessages = (mensagges) => {
    const author = new schema.Entity('author', {}, { idAttribute: 'email' });
    const message = new schema.Entity('message', { author }, { idAttribute: 'id' });
    const normalizePosts = normalize(debugChat(mensagges), [message]);
    return normalizePosts;
};

