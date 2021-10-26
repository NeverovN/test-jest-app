import React from 'react';
import {ReduxProvider} from '../../redux/provider';

// components
import Screen from '../../posts/components/Screen/Screen';

const App = () => {
  return (
    <ReduxProvider>
      <Screen />
    </ReduxProvider>
  );
};

export default App;
