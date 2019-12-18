import { http } from './HttpService';

export function getAllUsers() {
    return http().get('/user');
}

export function getUserById(id) {
    return http().get(`/user/${id}`);
}

export function deleteUser(id) {
    return http().delete(`/user/${id}`);
}

export function updateUser(user) {
    return http().put('/user', user);
}