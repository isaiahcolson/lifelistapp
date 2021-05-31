import React, {useContext, useState} from 'react';
import {Text, View} from 'react-native';

import FormButton from '../components/FormComponents/FormButton';
import FormInput from '../components/FormComponents/FormInput';
import SocialButton from '../components/FormComponents/SocialButton';
import {AuthContext} from '../navigation/AuthProvider';

const SignupScreen = ({navigation}) => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const {register} = useContext(AuthContext);

  return (
    <View>
      <Text>Create an account.</Text>

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
        buttonTitle="Sign Up"
        onPress={() => register(email, password)}
      />

      <SocialButton
        buttonTitle="Sign up with Google"
        onPress={() => alert('Sign up with Google button clicked.')}
      />

      <FormButton
        buttonTitle="Have an account? Sign in"
        onPress={() => navigation.navigate('Sign In')}
      />
    </View>
  );
};

export default SignupScreen;
