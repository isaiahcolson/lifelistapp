import React, {useContext, useState} from 'react';
import {Text, View} from 'react-native';

import FormButton from '../components/FormComponents/FormButton';
import FormInput from '../components/FormComponents/FormInput';
import SocialButton from '../components/FormComponents/SocialButton';
import {AuthContext} from '../navigation/AuthProvider';

const SigninScreen = ({navigation}) => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const {googleLogin, login} = useContext(AuthContext);

  return (
    <View>
      <Text>Sign in screen.</Text>

      <FormInput
        autoCapitalize="none"
        autoCorrect={false}
        keyboardType="email-address"
        labelValue={email}
        onChangeText={userEmail => {
          setEmail(userEmail);
        }}
        placeholderText="Email"
      />

      <FormInput
        labelValue={password}
        onChangeText={userPassword => {
          setPassword(userPassword);
        }}
        placeholderText="Password"
        secureTextEntry={true}
      />

      <FormButton
        buttonTitle="Sign In"
        onPress={() => login(email, password)}
      />

      {/* eslint-disable no-alert */}
      <FormButton buttonTitle="Forgot Password" onPress={() => alert('TODO')} />
      {/* eslint-enable no-alert */}

      <SocialButton
        buttonTitle="Sign in with Google"
        onPress={() => googleLogin()}
      />

      <FormButton
        buttonTitle="Don't have an account? Create one"
        onPress={() => navigation.push('Sign Up')}
      />
    </View>
  );
};

export default SigninScreen;
