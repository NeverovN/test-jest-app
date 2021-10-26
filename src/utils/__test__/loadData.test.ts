import {loadData} from '../loadData';

describe('function fetches correct data', () => {
  let realFetch = global.fetch;
  beforeAll(() => {
    global.fetch = jest.fn(() => {
      return Promise.resolve({
        json: async () => {
          return [
            {title: 'aaa', body: 'aaabody', id: 1, userId: 1},
            {title: 'bbb', body: 'bbbbody', id: 2, userId: 2},
            {title: 'ccc', body: 'cccbody', id: 1, userId: 1},
            {title: 'ddd', body: 'dddbody', id: 1, userId: 1},
            {title: 'eee', body: 'eeebody', id: 1, userId: 1},
          ];
        },
      }) as Promise<Response>;
    });
  });
  afterAll(() => {
    global.fetch = realFetch;
  });

  it('loads correct data from fake api', async () => {
    const expectedResponse = [
      {title: 'aaa', body: 'aaabody', id: 1, userId: 1},
      {title: 'bbb', body: 'bbbbody', id: 2, userId: 2},
      {title: 'ccc', body: 'cccbody', id: 1, userId: 1},
      {title: 'ddd', body: 'dddbody', id: 1, userId: 1},
      {title: 'eee', body: 'eeebody', id: 1, userId: 1},
    ];
    const data = await loadData();
    expect(data).toStrictEqual(expectedResponse);
  });
});
