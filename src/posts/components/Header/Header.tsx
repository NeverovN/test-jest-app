import React, {FC, memo} from 'react';
import {View, Text} from 'react-native';

// styles
import styles from './styles';

const Header: FC = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.text}>Sample application with FlatList</Text>
    </View>
  );
};

export default memo(Header);
