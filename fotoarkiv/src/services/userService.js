import http from './httpService';

const apiEndpoint = "users/";

export function getUsers() {
    return http.get(apiEndpoint);
}

export function getUser(id) {
    return http.get(apiEndpoint + id);
}

export function getUserByEmail(email) {
    return http.get(`${apiEndpoint}email/${email}`);
}

export function saveUser(user) {
    if(user._id) {
        const body = { ...user };
        delete body._id;
        return http.put(apiEndpoint + user._id, body);
    }
    return http.post(apiEndpoint, user);
}

export function deleteUser(id) {
    return http.delete(apiEndpoint + id);
}