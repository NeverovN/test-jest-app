// types
import {IPost} from '../../types/post';
import {IPostReducerState} from '../../types/state';
// there must be RootState type

function getPostsRoot(state: any): IPostReducerState {
  return state.posts;
}

export function getAllPostsIds(state: any) {
  const root = getPostsRoot(state);
  return root.posts.ids;
}

export function getPostsIsLoading(state: any) {
  const root = getPostsRoot(state);
  return root.loading;
}

export function getPostsError(state: any) {
  const root = getPostsRoot(state);
  return root.error;
}

export function getPostById(state: any, id: IPost['id']): IPost | null {
  const root = getPostsRoot(state);
  const post = root.posts.byIds[id];
  return post ? post : null;
}
