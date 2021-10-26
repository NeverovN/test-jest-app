import {IPost} from './post';

export type IPostReducerState = {
  posts: {
    ids: (string | number)[];
    byIds: Record<IPost['id'], IPost>;
  };
  loading: boolean;
  error: string | null;
};
