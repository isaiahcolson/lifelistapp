import React from 'react';

import Routes from './src/navigation/Routes';
import {ProvideAuth} from './src/navigation/AuthProvider';

const LifeListApp = () => {
  return (
    <ProvideAuth>
      <Routes />
    </ProvideAuth>
  );
};

export default LifeListApp;
