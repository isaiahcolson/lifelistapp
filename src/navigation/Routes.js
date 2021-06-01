import React, {useContext, useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import auth from '@react-native-firebase/auth';

import {AuthContext} from './AuthProvider';
import TabBar from '../components/TabBar';
import AuthStackScreen from './AuthStackScreen';

const Routes = () => {
  const {user, setUser} = useContext(AuthContext);
  const [initializing, setInitializing] = useState(true);

  const onAuthStateChanged = givenUser => {
    setUser(givenUser);
    if (initializing) {
      setInitializing(false);
    }
  };

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber;
  });

  if (initializing) {
    return null;
  }

  return (
    <NavigationContainer>
      {user ? <TabBar /> : <AuthStackScreen />}
    </NavigationContainer>
  );
};

export default Routes;