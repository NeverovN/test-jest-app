import {IPost} from '../../../types/post';
import {postReducer} from '../posts';
import {request, loading, success, error} from '../../actions/post';
import {IPostReducerState} from '../../../types/state';

describe('reducer test', () => {
  const post1: IPost = {
    id: 1,
    userId: 1,
    title: 'post 1 title',
    body: 'post 1 body',
  };
  const post2: IPost = {
    id: 2,
    userId: 2,
    title: 'post 2 title',
    body: 'post 2 body',
  };
  const post3: IPost = {
    id: 3,
    userId: 3,
    title: 'post 3 title',
    body: 'post 3 body',
  };

  describe('default action', () => {
    it('should return initial state without any mutations', () => {
      const action = {} as any;
      const previousState = undefined;

      const initialState: IPostReducerState = {
        loading: false,
        error: null,
        posts: {ids: [], byIds: {}},
      };

      const actualState = postReducer(previousState, action);
      expect(actualState).toStrictEqual(initialState);
    });
  });

  describe('request action', () => {
    it('should return initial state without any mutations {loading: false, error: null}', () => {
      const previousState: IPostReducerState = {
        loading: false,
        error: null,
        posts: {
          ids: [post1.id, post2.id],
          byIds: {
            [post1.id]: post1,
            [post2.id]: post2,
          },
        },
      };

      const action = request;
      const expectedState: IPostReducerState = {...previousState};

      const actualState = postReducer(previousState, action);
      expect(actualState).toStrictEqual(expectedState);
    });

    it('should return initial state without any mutations {loading: true, error: null}', () => {
      const previousState: IPostReducerState = {
        loading: true,
        error: null,
        posts: {
          ids: [post1.id, post2.id],
          byIds: {
            [post1.id]: post1,
            [post2.id]: post2,
          },
        },
      };

      const action = request;
      const expectedState: IPostReducerState = {...previousState};

      const actualState = postReducer(previousState, action);
      expect(actualState).toStrictEqual(expectedState);
    });

    it('should return initial state without any mutations {loading: false, error: error}', () => {
      const previousState: IPostReducerState = {
        loading: true,
        error: 'error',
        posts: {
          ids: [post1.id, post2.id],
          byIds: {
            [post1.id]: post1,
            [post2.id]: post2,
          },
        },
      };

      const action = request;
      const expectedState: IPostReducerState = {...previousState};

      const actualState = postReducer(previousState, action);
      expect(actualState).toStrictEqual(expectedState);
    });
  });

  describe('loading action', () => {
    it('should return the same state', () => {
      const previousState: IPostReducerState = {
        loading: true,
        error: null,
        posts: {
          ids: [post1.id, post2.id],
          byIds: {
            [post1.id]: post1,
            [post2.id]: post2,
          },
        },
      };

      const action = loading;
      const expectedState: IPostReducerState = {...previousState};

      const actualState = postReducer(previousState, action);
      expect(actualState).toStrictEqual(expectedState);
    });

    it('should change error to null and loading to true', () => {
      const previousState: IPostReducerState = {
        loading: false,
        error: 'error',
        posts: {
          ids: [post1.id, post2.id],
          byIds: {
            [post1.id]: post1,
            [post2.id]: post2,
          },
        },
      };

      const action = loading;
      const expectedState: IPostReducerState = {
        ...previousState,
        error: null,
        loading: true,
      };

      const actualState = postReducer(previousState, action);
      expect(actualState).toStrictEqual(expectedState);
    });

    it('should return initial state without any mutations', () => {
      const previousState: IPostReducerState = {
        loading: true,
        error: null,
        posts: {
          ids: [post1.id, post2.id],
          byIds: {
            [post1.id]: post1,
            [post2.id]: post2,
          },
        },
      };

      const action = loading;
      const expectedState: IPostReducerState = {...previousState};

      const actualState = postReducer(previousState, action);
      expect(actualState).toStrictEqual(expectedState);
    });
  });

  describe('error action', () => {
    it('should return the same state', () => {
      const errorMessage = 'error';
      const previousState: IPostReducerState = {
        loading: false,
        error: errorMessage,
        posts: {
          ids: [post1.id, post2.id],
          byIds: {
            [post1.id]: post1,
            [post2.id]: post2,
          },
        },
      };

      const action = error({error: errorMessage});
      const expectedState: IPostReducerState = {...previousState};

      const actualState = postReducer(previousState, action);
      expect(actualState).toStrictEqual(expectedState);
    });

    it('should return state with error', () => {
      const errorMessage = 'error';
      const previousState: IPostReducerState = {
        loading: false,
        error: null,
        posts: {
          ids: [post1.id, post2.id],
          byIds: {
            [post1.id]: post1,
            [post2.id]: post2,
          },
        },
      };

      const action = error({error: errorMessage});
      const expectedState: IPostReducerState = {
        ...previousState,
        error: errorMessage,
      };

      const actualState = postReducer(previousState, action);
      expect(actualState).toStrictEqual(expectedState);
    });

    it('should stop loading and return state with error message', () => {
      const errorMessage = 'error';
      const previousState: IPostReducerState = {
        loading: true,
        error: errorMessage,
        posts: {
          ids: [post1.id, post2.id],
          byIds: {
            [post1.id]: post1,
            [post2.id]: post2,
          },
        },
      };

      const action = error({error: errorMessage});
      const expectedState: IPostReducerState = {
        ...previousState,
        error: errorMessage,
        loading: false,
      };

      const actualState = postReducer(previousState, action);
      expect(actualState).toStrictEqual(expectedState);
    });
  });

  describe('success action', () => {
    it('should return the same state', () => {
      const previousState: IPostReducerState = {
        loading: false,
        error: null,
        posts: {
          ids: [post1.id, post2.id],
          byIds: {
            [post1.id]: post1,
            [post2.id]: post2,
          },
        },
      };

      const action = success([post1, post2]);
      const expectedState: IPostReducerState = {...previousState};

      const actualState = postReducer(previousState, action);
      expect(actualState).toStrictEqual(expectedState);
    });

    it('should stop loading and return new state', () => {
      const previousState: IPostReducerState = {
        loading: true,
        error: null,
        posts: {
          ids: [post1.id, post2.id],
          byIds: {
            [post1.id]: post1,
            [post2.id]: post2,
          },
        },
      };

      const action = success([post1, post3]);
      const expectedState: IPostReducerState = {
        ...previousState,
        loading: false,
        posts: {
          ids: [post1.id, post3.id],
          byIds: {
            [post1.id]: post1,
            [post3.id]: post3,
          },
        },
      };

      const actualState = postReducer(previousState, action);
      expect(actualState).toStrictEqual(expectedState);
    });

    it('should stop remove error and return new state', () => {
      const previousState: IPostReducerState = {
        loading: false,
        error: 'error',
        posts: {
          ids: [post1.id, post2.id],
          byIds: {
            [post1.id]: post1,
            [post2.id]: post2,
          },
        },
      };

      const action = success([post2, post3]);
      const expectedState: IPostReducerState = {
        ...previousState,
        error: null,
        posts: {
          ids: [post2.id, post3.id],
          byIds: {
            [post2.id]: post2,
            [post3.id]: post3,
          },
        },
      };

      const actualState = postReducer(previousState, action);
      expect(actualState).toStrictEqual(expectedState);
    });
    it('should return new state', () => {
      const previousState: IPostReducerState = {
        loading: false,
        error: null,
        posts: {
          ids: [post1.id, post2.id],
          byIds: {
            [post1.id]: post1,
            [post2.id]: post2,
          },
        },
      };

      const action = success([post1, post2, post3]);
      const expectedState: IPostReducerState = {
        ...previousState,
        error: null,
        posts: {
          ids: [post1.id, post2.id, post3.id],
          byIds: {
            [post1.id]: post1,
            [post2.id]: post2,
            [post3.id]: post3,
          },
        },
      };

      const actualState = postReducer(previousState, action);
      expect(actualState).toStrictEqual(expectedState);
    });
  });
});
