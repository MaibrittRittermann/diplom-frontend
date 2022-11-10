import http from './httpService';

const apiEndpoint = "photos/";

export function getPhotos() {
    return http.get(apiEndpoint);
}

export function getPhotoByName(id) {
    return http.get(apiEndpoint + id);
}

export function getPhotoByLabel(label) {
    return http.get(`${apiEndpoint}label/${label}`);
}

export function savePhotos(photos) {
    return http.post(apiEndpoint, photos);
}

// export function deletePhoto(id) {
//     return http.delete(apiEndpoint + id);
// }