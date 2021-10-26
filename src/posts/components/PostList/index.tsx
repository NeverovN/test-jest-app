import React, {FC, memo, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';

// view
import PostListView from './view';

// action
import {request} from '../../../redux/actions/post';

// selectors
import {
  getAllPostsIds,
  getPostsIsLoading,
} from '../../../redux/selectors/posts';

const PostListContainer: FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(request());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const ids = useSelector(getAllPostsIds);
  const isLoading = useSelector(getPostsIsLoading);

  console.log(isLoading);

  return <PostListView data={ids} isLoading={isLoading} />;
};

export default memo(PostListContainer);
