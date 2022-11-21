import http from './httpService';
const apiEndpoint = 'photos/';

export function getPhoto(photo) {
    return http.get(apiEndpoint + photo, { responseType: 'blob' });
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
    return http.post(`train/`, data);
}

export function downloadPhoto(data) {
    return http.post(`${apiEndpoint}download/`, data,{ responseType: 'blob' });
}