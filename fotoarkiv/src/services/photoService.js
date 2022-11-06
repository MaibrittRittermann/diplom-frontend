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

// export function savePhoto(photo) {
//     if(photo._id) {
//         const body = { ...photo };
//         delete body._id;
//         return http.put(apiEndpoint + photo._id, body);
//     }
//     return http.post(apiEndpoint, photo);
// }

// export function deletePhoto(id) {
//     return http.delete(apiEndpoint + id);
// }