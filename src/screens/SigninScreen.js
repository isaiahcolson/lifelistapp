import React, {useState} from 'react';
import {Text, View} from 'react-native';

import {useAuth} from '../navigation/AuthProvider';
import FormButton from '../components/FormComponents/FormButton';
import FormInput from '../components/FormComponents/FormInput';
import IconButton from '../components/FormComponents/IconButton';
import iconList from '../../assets/iconList';
import AuthStyles from '../styles/AuthStyles';
import FormStyles from '../styles/FormStyles';
import styles from '../styles/styles';

const SigninScreen = ({navigation}) => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const {googleLogin, login} = useAuth();

  return (
    <View style={styles.centeredScreen}>
      <Text style={AuthStyles.pageTitle}>Sign In</Text>

      <View style={FormStyles.formGroup}>
        <Text style={FormStyles.inputLabel}>Email</Text>
        <FormInput
          autoCapitalize="none"
          autoCorrect={false}
          keyboardType="email-address"
          labelValue={email}
          onChangeText={userEmail => {
            setEmail(userEmail);
          }}
          style={FormStyles.fullWidthInput}
        />

        <Text style={FormStyles.inputLabel}>Password</Text>
        <FormInput
          labelValue={password}
          onChangeText={userPassword => {
            setPassword(userPassword);
          }}
          secureTextEntry={true}
          style={FormStyles.fullWidthInput}
        />

        {/* eslint-disable no-alert */}
        <FormButton
          buttonTitle="Forgot password?"
          onPress={() => alert('TODO')}
          buttonStyle={FormStyles.inlineButton}
          style={FormStyles.inlineButtonFloat}
        />
        {/* eslint-enable no-alert */}
      </View>

      <FormButton
        buttonTitle="Sign In"
        buttonStyle={FormStyles.fullWidthButton}
        onPress={() => login(email, password)}
      />

      <IconButton
        onPress={() => googleLogin()}
        buttonIcon={iconList.googleIcon}
        buttonStyle={AuthStyles.iconButton}
        buttonTitle="Sign in with Google"
      />

      <View style={FormStyles.inlineButtonGroup}>
        <Text>Don't have an account? </Text>
        <FormButton
          buttonTitle="Create one"
          onPress={() => navigation.push('Sign Up')}
          buttonStyle={FormStyles.inlineButton}
        />
      </View>
    </View>
  );
};

export default SigninScreen;
