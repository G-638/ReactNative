import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { persistStore, persistReducer } from 'redux-persist'
import createReducer from '../reducers/saveReducer';
import { createLogger } from 'redux-logger';
import createSagaMiddleware from 'redux-saga';

import rootSaga from '../../saga';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};
const middleware = [];

const sagaMiddleware = createSagaMiddleware();

middleware.push(createLogger());
middleware.push(sagaMiddleware);

const rootReducer = combineReducers({
  user: persistReducer(persistConfig, createReducer),
});

const enhancers = [applyMiddleware(...middleware)];
const persist = {enhancers};

export const store = createStore(rootReducer, compose(...enhancers));
export const persistor = persistStore(store, persist, () => {});

sagaMiddleware.run(rootSaga);