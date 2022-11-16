import http from './httpService';

const apiEndpoint = 'photos/';

export function getPhotos() {
    return http.get(apiEndpoint);
}

export function getPhotoByName(id) {
    return http.get(apiEndpoint + id);
}

export function getPhotoByLabel(label) {
    return http.get(`${apiEndpoint}label/${label}`);
}

export function savePhotos(data) {
    return http.post(apiEndpoint, data);
}

export function trainModel(data) {
    return http.post(`${apiEndpoint}train/`, data);
}