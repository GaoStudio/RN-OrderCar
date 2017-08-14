/**
 * Created by Administrator on 2017/8/12.
 */
import {HttpApiUrl} from "./NetUtils"
class FetchRespsitory {
    fetchGetData(url) {
        return new Promise((resolve, reject) => {
            this.fetchNetRepository(HttpApiUrl + url).then((data) => {
                resolve(data);
            }).catch((error) => {
                reject(error);
            })
        })
    }
    fetchGetData(url) {
        return new Promise((resolve, reject) => {
            this.fetchNetRepository(HttpApiUrl + url,"GET").then((data) => {
                resolve(data);
            }).catch((error) => {
                reject(error);
            })
        })
    }
    fetchPostData(url,data) {
        return new Promise((resolve, reject) => {
            this.fetchNetRepository(HttpApiUrl + url,"POST",data).then((data) => {
                resolve(data);
            }).catch((error) => {
                reject(error);
            })
        })
    }
    fetchNetRepository(url,method,data) {
        return new Promise((resolve, reject) => {
            fetch(url,{
                method: method,
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: data?JSON.stringify(data):null
            })
                .then((response) => response.json())
                .catch((error) => {
                    reject(error);
                }).then((responseData) => {
                if (!responseData) {
                    reject(new Error('responseData is null'));
                    return;
                }
                resolve(responseData);
            }).done();
        })
    }

}
var fetchGetData;
var instance;
export default class ApiGenerator {
    constructor() {
        if (instance == null) {
            instance = this;
        }
        return instance;
    }

    static getInstance() {
        if (instance == null) {
            instance = new ApiGenerator();
        }
        return instance;
    }

    FetchRespsitory() {
        if (fetchGetData == null) {
            fetchGetData = new FetchRespsitory();
        }
        return fetchGetData;
    }
}