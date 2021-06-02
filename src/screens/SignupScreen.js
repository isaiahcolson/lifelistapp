import React, {useContext, useState} from 'react';
import {Text, View} from 'react-native';

import {AuthContext} from '../navigation/AuthProvider';
import FormButton from '../components/FormComponents/FormButton';
import FormInput from '../components/FormComponents/FormInput';
import SocialButton from '../components/FormComponents/SocialButton';
import AuthStyles from '../styles/AuthStyles';
import FormStyles from '../styles/FormStyles';
import styles from '../styles/styles';

const SignupScreen = ({navigation}) => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const {googleLogin, register} = useContext(AuthContext);

  return (
    <View style={styles.standardScreen}>
      <Text style={AuthStyles.pageTitle}>Sign Up</Text>

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
      </View>

      <FormButton
        buttonTitle="Sign Up"
        buttonStyle={FormStyles.fullWidthButton}
        onPress={() => register(email, password)}
      />

      <SocialButton
        buttonTitle="Sign up with Google"
        onPress={() => googleLogin()}
        buttonStyle={AuthStyles.socialButton}
      />

      <View style={FormStyles.inlineButtonGroup}>
        <Text>Have an account? </Text>
        <FormButton
          buttonTitle="Sign in"
          onPress={() => navigation.navigate('Sign In')}
          buttonStyle={FormStyles.inlineButton}
        />
      </View>
    </View>
  );
};

export default SignupScreen;
