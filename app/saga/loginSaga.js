import { Apiservice } from '../services/api'
import api from '../services/apiurl';
import * as UserActions from '../redux/actions/save'
import { call, put } from 'redux-saga/effects';

export function* loginFunction(data){
        console.log('data', data);
        const response = yield call(Apiservice.postApi, api.LOGIN, data.params);
        console.log('response', response);
        if (response.status == '200') {
            yield put(UserActions.setToken(response.data.token));
            yield call(
                data.successFunc,
                response.data.token
            );
        }
        else {
            yield call(
            data.failureFunc,
            response.data.error//user not found
            );
        }
}
