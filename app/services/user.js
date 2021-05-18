import { Apiservice } from './api';
import api from './apiurl';


export async function login(data, failureFunc, successFunc) {
    try {
        console.log('data', data);
        let response = await Apiservice.postApi(api.LOGIN, data);
        console.log('response', response);
        if (response.status == '200') {
            successFunc(response.data.token)
        }
        else {
            failureFunc(response.data.error)//user not found
        }


    }
    catch (e) {
        return Promise.reject('error');
    }
}
