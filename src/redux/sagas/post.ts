import {all, call, put, spawn, takeLatest} from 'redux-saga/effects';

// utils
import {mapFetchResponse} from '../../posts/utils/mapFetchResponse';
import {loadData} from '../../utils/loadData';

// actions
import {error, loading, success} from '../actions/post';

// const
import {PostActions} from '../constants/postActions';

export function* getData() {
  try {
    yield put(loading());
    const posts: Array<any> = yield call(loadData);
    yield put(success(mapFetchResponse(posts)));
  } catch (e) {
    yield put(error({error: 'Some error'}));
  }
}

export function* watchRequest() {
  yield takeLatest(PostActions.REQUEST, getData);
}
export default function* postSaga() {
  const allPostSagas = [watchRequest];
  yield all(allPostSagas.map(saga => spawn(saga)));
}
