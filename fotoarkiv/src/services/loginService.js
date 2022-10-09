import http from "./httpService";
import jwtDecode from 'jwt-decode';

const tokenKey = "lf-token";
const apiEndpoint = "login/";

http.setJwt(getJwt());

export async function login(account) {
    const {data:jwt} = await http.post(apiEndpoint, account);
    localStorage.setItem(tokenKey, jwt);
}

export function loginWithJWT(jwt) {
    localStorage.setItem(tokenKey, jwt);
}

export function logout() {
    localStorage.removeItem(tokenKey);
}

export function getJwt() {
    return localStorage.getItem(tokenKey);
}

export function getCurrentUser() {
    try {
        const jwt = getJwt();
        return jwtDecode(jwt);
    } catch (err) {
        return null;
    }
}