import * as axios from 'axios';


export class BaseStore {
    httpClient = axios.create({
        headers: {
            'Content-Type': 'application/json'
        }
    });
}

export default new BaseStore();
