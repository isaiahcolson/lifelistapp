import React, {Fragment} from 'react';
import {SafeAreaView, View} from 'react-native';
import theme from './src/styles/theme.style';
import StatusBarColor from './src/components/StatusBar';
import HomeGreeting from './src/components/homeScreen/homeGreeting';

const LifeListApp = () => {
  return (
    <Fragment>
      <StatusBarColor
        backgroundColor={theme.blue_jay_white}
        barStyle="dark-content"
      />
      <SafeAreaView>
        <View>
          <HomeGreeting name="Kenny" />
        </View>
      </SafeAreaView>
    </Fragment>
  );
};

export default LifeListApp;
