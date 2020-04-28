import http from './http';

export const userLogin = (loginObj) => http.post('/login', loginObj)