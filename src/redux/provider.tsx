import React from 'react';
import {Provider} from 'react-redux';

// store
import {buildStore} from './store';

export const ReduxProvider: React.FC = props => {
  const store = buildStore();
  return <Provider store={store}>{props.children}</Provider>;
};
