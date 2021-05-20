import { takeLatest, all } from 'redux-saga/effects';
import * as actions from '../redux/actions/types';
import {loginFunction} from './loginSaga';

export default function* root(){
    yield all([
        takeLatest(actions.SET_USER_LOGIN, loginFunction)
    ])
}