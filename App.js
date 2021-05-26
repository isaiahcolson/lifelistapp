import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  center: {
    alignItems: 'center',
  },
});

const Greeting = props => {
  return (
    <View style={styles.center}>
      <Text>Hello {props.name},</Text>
      <Text>here is your Life List</Text>
    </View>
  );
};

const LifeListApp = () => {
  return (
    <View style={[styles.center, {top: 50}]}>
      <Greeting name="Kenny" />
    </View>
  );
};

export default LifeListApp;
