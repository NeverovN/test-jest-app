import {normalizeData} from '../normalizeData';

describe('normalize data test', () => {
  it('normalizes proper data', () => {
    const dataToNormalize = [
      {
        id: 1,
        field1: 'some text',
        field2: 'some text 2',
      },
      {
        id: 2,
        field1: 'text',
        field2: 'dummy text',
      },
      {
        id: 3,
        field1: 'useless field',
        field2: 'another useless field',
      },
    ];
    const expectedData = {
      1: {
        id: 1,
        field1: 'some text',
        field2: 'some text 2',
      },
      2: {
        id: 2,
        field1: 'text',
        field2: 'dummy text',
      },
      3: {
        id: 3,
        field1: 'useless field',
        field2: 'another useless field',
      },
    };
    const normalizedData = normalizeData(dataToNormalize);
    expect(normalizedData).toStrictEqual(expectedData);
  });
});
