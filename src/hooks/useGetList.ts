import {useSelector} from 'react-redux';
import {IPost} from '../types/post';

// selector
import {getAllPostsIds} from '../redux/selectors/posts';

export const useGetList = (): Array<IPost['id']> => {
  const ids = useSelector(getAllPostsIds);
  return ids;
};
