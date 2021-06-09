import React from 'react';
import {Image, ScrollView, Text, View} from 'react-native';

import {useAuth} from '../navigation/AuthProvider';
import iconList from '../../assets/iconList';
import theme from '../styles/theme.style';
import styles from '../styles/styles';

const LifeListScreen = () => {
  const {userData} = useAuth();

  const retrievedList = () => {
    if (userData?.birdData?.lifeList?.length) {
      return userData.birdData.lifeList;
    } else {
      return '';
    }
  };

  const birdAddedDate = () => {
    if (userData?.birdData?.lifeList?.length) {
      const birdDate = Date(retrievedList.dateAdded).split(' ');
      const month = birdDate[1];
      const date = birdDate[2];
      const year = birdDate[3];
      return `Added ${month} ${date}, ${year}`;
    } else {
      return '';
    }
  };

  const displayBird = retrievedList().map((bird, i) => (
    <View
      key={i}
      style={[
        i === 0 ? null : styles.listItem,
        {
          flexDirection: theme.row,
          justifyContent: theme.space_between,
          alignItems: theme.center,
        },
      ]}>
      <View>
        <View style={{flexDirection: theme.row}}>
          <Text>{i + 1}. </Text>
          <Text>{bird.birdName}</Text>
        </View>
        <Text
          style={{
            fontSize: theme.font_size_1,
            fontStyle: theme.italic,
            color: theme.blue_jay_black,
            opacity: theme.fifty,
          }}>
          {birdAddedDate()}
        </Text>
      </View>
      <Image
        source={iconList.delete}
        resizeMode="contain"
        style={{
          tintColor: theme.cardinal_red,
          width: theme.font_size_5,
          height: theme.font_size_5,
          marginRight: theme.spacing_2,
        }}
      />
    </View>
  ));

  return (
    <ScrollView>
      <View style={styles.standardScreen}>
        <Text style={[styles.header2Bold, {marginBottom: theme.spacing_6}]}>
          Your Life List
        </Text>
        <View>{displayBird.reverse()}</View>
      </View>
    </ScrollView>
  );
};

export default LifeListScreen;
