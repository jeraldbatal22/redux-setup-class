import BaseStore from '../BaseStore';
const http = "https://jsonplaceholder.typicode.com"

export const doFetchPosts = async (success) => {
    try {
        const response = await BaseStore.httpClient.get(`${http}/posts`)
        success(response.data);
    } catch(error) {
        console.log('async error', error);
        return Promise.reject(error.response.data);
    }
}

export const doFetchUsers = async (success) => {
    try {
        const response = await BaseStore.httpClient.get(`${http}/users`)
        success(response.data);
    } catch(error) {
        console.log('async error', error);
        return Promise.reject(error.response.data);
    }
}

export const doClearPosts = (success) => {
    success();
}

export const doClearUsers = (success) => {
    success();
}
