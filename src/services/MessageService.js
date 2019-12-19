import { http } from './HttpService';

export function getAllMessages() {
    return http().get('/message');
}

export function getMessageById(id) {
    return http().get(`/message/${id}`);
}

export function createMessage(message) {
    return http().post('/message', message);
}