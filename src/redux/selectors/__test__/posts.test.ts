import {IPost} from '../../../types/post';
import {
  getAllPostsIds,
  getPostById,
  getPostsIsLoading,
  getPostsError,
} from '../posts';

describe('selectors test', () => {
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
  describe('getAllPostsIds', () => {
    it('should return post1 & post2 ids', () => {
      const initialState = {
        posts: {
          loading: true,
          error: null,
          posts: {
            ids: [post1.id, post2.id],
            byIds: {
              [post1.id]: post1,
              [post2.id]: post2,
            },
          },
        },
      };
      const ids = getAllPostsIds(initialState);
      expect(ids).toStrictEqual([post1.id, post2.id]);
    });

    it('should return []', () => {
      const initialState = {
        posts: {
          loading: true,
          error: null,
          posts: {
            ids: [],
            byIds: {},
          },
        },
      };
      const ids = getAllPostsIds(initialState);
      expect(ids).toStrictEqual([]);
    });
  });
  describe('getPostById', () => {
    it('should return post2', () => {
      const initialState = {
        posts: {
          loading: true,
          error: null,
          posts: {
            ids: [post1.id, post2.id],
            byIds: {
              [post1.id]: post1,
              [post2.id]: post2,
            },
          },
        },
      };

      const post = getPostById(initialState, post2.id);
      expect(post).toStrictEqual(post2);
    });

    it('should return null', () => {
      const initialState = {
        posts: {
          loading: true,
          error: null,
          posts: {
            ids: [post1.id, post2.id],
            byIds: {
              [post1.id]: post1,
              [post2.id]: post2,
            },
          },
        },
      };

      const post = getPostById(initialState, post3.id);
      expect(post).toStrictEqual(null);
    });
  });

  describe('getPostsIsLoading', () => {
    it('should return true', () => {
      const initialState = {
        posts: {
          loading: true,
          error: null,
          posts: {
            ids: [],
            byIds: {},
          },
        },
      };

      const isLoading = getPostsIsLoading(initialState);
      expect(isLoading).toBe(true);
    });

    it('should return false', () => {
      const initialState = {
        posts: {
          loading: false,
          error: null,
          posts: {
            ids: [],
            byIds: {},
          },
        },
      };

      const isLoading = getPostsIsLoading(initialState);
      expect(isLoading).toBe(false);
    });
  });

  describe('getPostsError', () => {
    it('should return null', () => {
      const initialState = {
        posts: {
          loading: false,
          error: null,
          posts: {
            ids: [],
            byIds: {},
          },
        },
      };
      const error = getPostsError(initialState);
      expect(error).toBe(null);
    });
    it('should return errorMessage', () => {
      const initialState = {
        posts: {
          loading: false,
          error: 'errorMessage',
          posts: {
            ids: [],
            byIds: {},
          },
        },
      };
      const error = getPostsError(initialState);
      expect(error).toBe(initialState.posts.error);
    });
  });
});
