import React from 'react';

import {AuthProvider} from './AuthProvider';
import DeviceNotch from '../components/DeviceNotch';
import Routes from './Routes';

const Providers = () => {
  return (
    <AuthProvider>
      <DeviceNotch barStyle="dark-content" />
      <Routes />
    </AuthProvider>
  );
};

export default Providers;
