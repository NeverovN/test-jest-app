import {IPost} from '../../types/post';

export const mapFetchResponse = (resp: any): IPost[] => {
  if (resp instanceof Array !== true) {
    return [];
  }

  const mapped = resp.map((el: any) => {
    if (!el.title || typeof el.title !== 'string') {
      return null;
    }
    if (!el.body || typeof el.body !== 'string') {
      return null;
    }
    if (!el.id || (typeof el.id !== 'string' && typeof el.id !== 'number')) {
      return null;
    }
    if (
      !el.userId ||
      (typeof el.userId !== 'string' && typeof el.userId !== 'number')
    ) {
      return null;
    }

    return {
      title: el.title,
      body: el.body,
      id: el.id,
      userId: el.userId,
    };
  });

  return mapped.filter(Boolean);
};
