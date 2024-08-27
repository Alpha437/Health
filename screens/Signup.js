import React, { useState, useContext } from 'react';
import { Alert, View } from 'react-native';
import Text from '@kaloraat/react-native-text';
import UserInput from '../components/auth/UserInput.js';
import SubmitButton from '../components/auth/SubmitButton.js';
import axios from 'axios';
import CircleLogo from '../components/auth/CircleLogo.js';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { AuthContext } from '../context/auth.js';

const Signup = ({ navigation }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loading, setLoading] = useState(false);

  // context
  const [state, setState] = useContext(AuthContext);

  // console.log('NAVIGATION -> ', navigation);

  const handleSubmit = async () => {
    setLoading(true);
    if (!confirmPassword || !email || !password || !name) {
      alert('All fields required');
      setLoading(false);
      return;
    }

    console.log('SIGNUP REQUEST => ', email, password, confirmPassword);

    try {
      const { data } = await axios.post(`/signup`, {
        name,
        email,
        password,
        confirmPassword,
      });

      if (data.error) {
        alert(data.error);
        setLoading(false);
      } else {
        // save to context
        setState(data);
        console.log(state);
        //save response in async storage
        await AsyncStorage.setItem('@auth', JSON.stringify(data));

        setLoading(false);
        console.log('SIGN UP SUCCESS =>', data);
        Alert.alert(
          'Success',
          'Your account has been successfully created.\\n Enter the email verification code sent to your email to verify your account.'
        );

        // redirect
        navigation.navigate('VerifyEmail');
      }
      // redirect
    } catch (err) {
      console.log(err);
      setLoading(false);
    }
  };

  return (
    <KeyboardAwareScrollView
      contentContainerStyle={{
        flex: 1,
        justifyContent: 'center',
        paddingHorizontal: 10,
      }}
    >
      <View style={{ marginVertical: 100 }}>
        <CircleLogo />

        <Text title center>
          Sign Up
        </Text>

        <UserInput
          name='NAME'
          value={name}
          setValue={setName}
          autoCapitalize='words'
          keyboardType='default'
          placeholder='Firstname LastName'
        />
        <UserInput
          name='EMAIL'
          value={email}
          setValue={setEmail}
          autoCompleteType='email'
          keyboardType='email-address'
        />
        <UserInput
          name='PASSWORD'
          value={password}
          setValue={setPassword}
          secureTextEntry={true}
          autoCompleteType='password'
        />
        <UserInput
          name='CONFIRM PASSWORD'
          value={confirmPassword}
          setValue={setConfirmPassword}
          secureTextEntry={true}
          autoCompleteType={'password'}
        />

        <SubmitButton
          title='Sign Up'
          handleSubmit={handleSubmit}
          loading={loading}
        />

        <Text small center>
          {' '}
          Already Joined?{' '}
          <Text
            onPress={() => {
              navigation.navigate('Signin');
            }}
            color='#ff2222'
            style={{ marginTop: 10 }}
          >
            Sign In
          </Text>{' '}
        </Text>
      </View>
    </KeyboardAwareScrollView>
  );
};

export default Signup;
