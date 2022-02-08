import BaseStore from '../BaseStore';

export const doFetchPosts = async (success) => {
    try {
        const response = await BaseStore.httpClient.get(`https://jsonplaceholder.typicode.com/posts`)
        success(response.data);
    } catch(error) {
        console.log('async error', error);
        return Promise.reject(error.response.data);
    }
}