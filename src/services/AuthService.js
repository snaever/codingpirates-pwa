import store from '../store/index.js';
import { http } from './HttpService';

export function isLoggedIn() {
    const token = localStorage.getItem('token');
    return token != null;
}

export function login(user) {
    return http().post('/auth', user)
    .then(res => {
        if (res) {
            setToken(res.data.token);
        }
    });
}

function setToken(token) {
    localStorage.setItem('token', JSON.stringify(token));
    store.dispatch('authenticate');
}

export function getLogin() {
    return 'myLogin';
}

export function getUserId() {
    return 1;
}

export function registerUser(user) {
    return http().post('/register', user);
}