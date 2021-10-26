import {createStore, applyMiddleware} from 'redux';
import createSagaMiddleware from '@redux-saga/core';

// reducer
import {rootReducer} from '../reducers/root';

// saga
import {rootSaga} from '../sagas/index';

export const buildStore = (initialState?: any) => {
  const sagaMiddleware = createSagaMiddleware();
  const middlewares = [sagaMiddleware];
  const store = createStore(
    rootReducer,
    initialState,
    applyMiddleware(...middlewares),
  );
  sagaMiddleware.run(rootSaga);
  return store;
};
