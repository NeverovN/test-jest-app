import {all, spawn, takeLatest} from 'redux-saga/effects';
import {default as root, getData, watchRequest} from '../post';
import {loading, success, error} from '../../actions/post';
import {runSaga} from 'redux-saga';
import * as loadData from '../../../utils/loadData';
import {PostActions} from '../../constants/postActions';

describe('sagas test', () => {
  describe('root saga', () => {
    const gen = root();
    it('should yield effect & become done', () => {
      const result = gen.next().value;
      expect(result).toStrictEqual(all([spawn(watchRequest)]));
      expect(gen.next().done).toBe(true);
    });
  });

  describe('getData', () => {
    const realFetch = global.fetch;
    const response = [
      {title: 'aaa', body: 'aaabody', id: 1, userId: 1},
      {title: 'bbb', body: 'bbbbody', id: 2, userId: 2},
      {title: 'ccc', body: 'cccbody', id: 1, userId: 1},
      {title: 'ddd', body: 'dddbody', id: 1, userId: 1},
      {title: 'eee', body: 'eeebody', id: 1, userId: 1},
    ];
    let spyLoadData: jest.SpyInstance<any>;
    beforeAll(() => {
      spyLoadData = jest.spyOn(loadData, 'loadData');
    });
    afterAll(() => {
      global.fetch = realFetch;
      spyLoadData.mockRestore();
    });

    it('should yield effects successfully', async () => {
      const expectedActions = [loading(), success(response)];
      const dispatched: any[] = [];
      const dispatch = jest.fn(action => dispatched.push(action));

      spyLoadData.mockImplementationOnce(() => response);

      await runSaga({dispatch}, getData as any).toPromise();
      expect(dispatched).toStrictEqual(expectedActions);
    });

    it('should yield effects unsuccessfully', async () => {
      const expectedActions = [loading(), error({error: 'Some error'})];
      const dispatched: any[] = [];
      const dispatch = jest.fn(action => dispatched.push(action));

      spyLoadData.mockImplementationOnce(() => Promise.reject('error message'));

      await runSaga({dispatch}, getData as any).toPromise();
      expect(dispatched).toStrictEqual(expectedActions);
    });
  });

  describe('watchRequest', () => {
    const gen = watchRequest();
    it('should takeLatest request', () => {
      const result = gen.next().value;

      expect(result).toStrictEqual(takeLatest(PostActions.REQUEST, getData));
      expect(gen.next().done).toBe(true);
    });
  });
});
