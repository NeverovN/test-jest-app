import React, {FC, memo} from 'react';
import {FlatList, ListRenderItem, RefreshControl} from 'react-native';

// type
import {IPost} from '../../../types/post';

// container
import PostContainer from '../Post/index';
import Header from '../Header/Header';

interface IPostListView {
  data: Array<IPost['id']>;
  isLoading: boolean;
}

const renderItem: ListRenderItem<IPost['id']> = ({item}) => {
  return <PostContainer id={item} key={item} />;
};

const PostListView: FC<IPostListView> = props => {
  return (
    <FlatList
      renderItem={renderItem}
      data={props.data}
      ListHeaderComponent={<Header />}
      refreshControl={<RefreshControl refreshing={props.isLoading} />}
    />
  );
};

export default memo(PostListView);
