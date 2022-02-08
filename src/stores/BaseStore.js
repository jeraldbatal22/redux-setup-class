import * as axios from 'axios';
// import http from 'http';
// import https from 'https';

// import { ConfigFile as Config } from '@/Config';

export class BaseStore {

    httpClient = axios.create({
        // baseURL: Config.serverHost,
        // timeout: Config.requestTimeout,
        // keepAlive pools and reuses TCP connections, so it's faster
        // httpAgent: new http.Agent({ keepAlive: true }),
        // httpsAgent: new https.Agent({ keepAlive: true }),
        headers: {
            'Content-Type': 'application/json'
        }
    });
}

export default new BaseStore();
