import {all, spawn} from 'redux-saga/effects';

// sagas
import postSaga from './post';

export function* rootSaga() {
  const allSagas = [postSaga];
  yield all(allSagas.map(saga => spawn(saga)));
}
