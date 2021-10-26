import React, {FC, memo} from 'react';
import {useSelector} from 'react-redux';

// view
import PostView from './view';

// selector
import {getPostById} from '../../../redux/selectors/posts';

interface IPostContainer {
  id: string | number;
}

const PostContainer: FC<IPostContainer> = props => {
  const post = useSelector(state => getPostById(state, props.id));
  console.log(props.id);
  if (!post) {
    return null;
  }
  return <PostView title={post.title} body={post.body} />;
};

export default memo(PostContainer);
