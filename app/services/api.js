import { create } from 'apisauce';
import Api from './apiurl';

const api = create({
    baseURL: Api.API_BASE_URL,
    headers: {
        Accept: 'application/json',
        Content_Type: 'application/json',
    }
})

function postApi(endPoint, data) {
    return api.post(endPoint, data);
}
export const Apiservice = {
    postApi,
};