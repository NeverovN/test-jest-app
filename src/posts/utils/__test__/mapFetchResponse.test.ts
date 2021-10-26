import {mapFetchResponse} from '../mapFetchResponse';

describe('mapFetchResponse', () => {
  it('should return [] due to wrong type', () => {
    const fakeData = 'aaa';
    const response = mapFetchResponse(fakeData);
    expect(response).toStrictEqual([]);
  });

  it('should return [] due to title absence', () => {
    const fakeData = [
      {id: 1, userId: 1, title: '', body: 'body'},
      {id: 2, userId: 2, body: 'body'},
    ];
    const response = mapFetchResponse(fakeData);
    expect(response).toStrictEqual([]);
  });
  it('should return [] due to wrong title type', () => {
    const fakeData = [
      {id: 1, userId: 1, title: {text: 'title'}, body: 'body'},
      {id: 2, userId: 2, title: 11, body: 'body'},
    ];
    const response = mapFetchResponse(fakeData);
    expect(response).toStrictEqual([]);
  });

  it('should return [] due to body absence', () => {
    const fakeData = [
      {id: 1, userId: 1, title: 'title', body: ''},
      {id: 2, userId: 2, title: 'title'},
    ];
    const response = mapFetchResponse(fakeData);
    expect(response).toStrictEqual([]);
  });
  it('should return [] due to wrong body type', () => {
    const fakeData = [
      {id: 1, userId: 1, title: 'title', body: {text: 'body'}},
      {id: 2, userId: 2, title: '', body: 11},
    ];
    const response = mapFetchResponse(fakeData);
    expect(response).toStrictEqual([]);
  });

  it('should return [] due to id absence', () => {
    const fakeData = [{userId: 1, title: 'title', body: 'body'}];
    const response = mapFetchResponse(fakeData);
    expect(response).toStrictEqual([]);
  });
  it('should return [] due to wrong id type', () => {
    const fakeData = [
      {id: {number: 1}, userId: 2, title: 'title', body: 'body'},
    ];
    const response = mapFetchResponse(fakeData);
    expect(response).toStrictEqual([]);
  });

  it('should return [] due to userId absence', () => {
    const fakeData = [{id: 1, title: 'title', body: 'body'}];
    const response = mapFetchResponse(fakeData);

    expect(response).toStrictEqual([]);
  });
  it('should return [] due to wrong userId type', () => {
    const fakeData = [
      {id: 1, userId: {number: 1}, body: 'body', title: 'body'},
    ];
    const response = mapFetchResponse(fakeData);
    expect(response).toStrictEqual([]);
  });

  it('should return mapped data', () => {
    const fakeData = [
      {id: 1, userId: 1, title: 'title', body: ''},
      {id: 2, userId: 2, title: 'title', body: 11},
      {id: 3, userId: 3, title: 'title1', body: 'body1'},
      {id: 4, userId: 4, title: '', body: 'body'},
      {id: 5, userId: 5, title: 11, body: 'body'},
      {id: 6, userId: 6, title: 'title2', body: 'body2'},
      {userId: 7, title: 'title', body: 'body'},
      {id: {number: 8}, userId: 8, title: 'title', body: 'body'},
      {id: 9, userId: 9, title: 'title3', body: 'body3'},
      {id: '10', userId: 10, title: 'title4', body: 'body4'},
      {id: 11, title: 'title', body: 'body'},
      {id: 12, userId: {number: 12}, title: 'title', body: 'body'},
      {id: 13, userId: 13, title: 'title5', body: 'body5'},
      {id: 14, userId: '14', title: 'title6', body: 'body6'},
    ];
    const response = mapFetchResponse(fakeData);
    expect(response).toStrictEqual([
      {id: 3, userId: 3, title: 'title1', body: 'body1'},
      {id: 6, userId: 6, title: 'title2', body: 'body2'},
      {id: 9, userId: 9, title: 'title3', body: 'body3'},
      {id: '10', userId: 10, title: 'title4', body: 'body4'},
      {id: 13, userId: 13, title: 'title5', body: 'body5'},
      {id: 14, userId: '14', title: 'title6', body: 'body6'},
    ]);
  });
});
