import React, {FC, memo} from 'react';
import {SafeAreaView} from 'react-native';

// component
import PostListContainer from '../PostList/index';

import styles from './styles';

const Screen: FC = () => {
  return (
    <SafeAreaView style={styles.screen}>
      <PostListContainer />
    </SafeAreaView>
  );
};

export default memo(Screen);
