import React, {useState} from 'react';
import {Image, Modal, Pressable, ScrollView, Text, View} from 'react-native';
import firestore from '@react-native-firebase/firestore';

import {useAuth} from '../navigation/AuthProvider';
import FormButton from '../components/FormComponents/FormButton';
import iconList from '../../assets/iconList';
import theme from '../styles/theme.style';
import styles from '../styles/styles';
import FormStyles from '../styles/FormStyles';

const LifeListScreen = () => {
  const {userData, updateUser} = useAuth();
  const [modalVisible, setModalVisible] = useState(false);
  const [deleteBird, setDeleteBird] = useState();

  const data = {
    'birdData.lifeList': firestore.FieldValue.arrayRemove(deleteBird),
  };

  const retrievedList = () => {
    if (userData?.birdData?.lifeList?.length) {
      return userData.birdData.lifeList;
    } else {
      return '';
    }
  };

  const birdAddedDate = bird => {
    if (userData?.birdData?.lifeList?.length) {
      const birdDate = bird.dateAdded.split(' ');
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
          {birdAddedDate(bird)}
        </Text>
      </View>
      <Pressable
        onPress={() => {
          setModalVisible(true);
          setDeleteBird(bird);
        }}
        style={{
          paddingVertical: theme.spacing_2,
          paddingLeft: theme.spacing_2,
        }}>
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
      </Pressable>
    </View>
  ));

  const DeleteModal = () => (
    <View>
      <Modal
        animationType="slide"
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.centeredScreen}>
          <View style={styles.modalView}>
            <Text style={{textAlign: theme.center}}>
              Are you sure you'd like to remove the
            </Text>
            <Text
              style={{textAlign: theme.center, marginBottom: theme.spacing_6}}>
              {deleteBird?.birdName} from your Life List?
            </Text>
            <View style={FormStyles.buttonGroup}>
              <FormButton
                buttonStyle={[
                  FormStyles.inlineButton,
                  {
                    color: theme.blue_jay_black,
                    paddingLeft: theme.spacing_3,
                  },
                ]}
                buttonTitle="Cancel"
                onPress={() => setModalVisible(!modalVisible)}
              />

              <FormButton
                buttonStyle={[
                  FormStyles.filledButton,
                  {
                    backgroundColor: theme.cardinal_red,
                    marginBottom: theme.spacing_zero,
                  },
                ]}
                buttonTitle="Remove"
                onPress={() => {
                  updateUser(data);
                  setModalVisible(!modalVisible);
                }}
              />
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );

  return (
    <ScrollView>
      <View style={styles.standardScreen}>
        <Text style={[styles.header2Bold, {marginBottom: theme.spacing_6}]}>
          Your Life List
        </Text>
        <DeleteModal />
        <View>{displayBird.reverse()}</View>
      </View>
    </ScrollView>
  );
};

export default LifeListScreen;
