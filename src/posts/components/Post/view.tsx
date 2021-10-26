import React, {FC, memo} from 'react';
import {View, Text} from 'react-native';

// style
import styles from './styles';

interface IPostView {
  title: string;
  body: string;
}

const PostView: FC<IPostView> = props => {
  return (
    <View style={styles.post}>
      <Text style={styles.title}>{props.title}</Text>
      <Text style={styles.body}>{props.body}</Text>
    </View>
  );
};

export default memo(PostView);
