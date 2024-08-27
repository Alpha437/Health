import React, { useState, useContext } from 'react';
import { View } from 'react-native';
import Text from '@kaloraat/react-native-text';
import UserInput from '../components/auth/UserInput.js';
import SubmitButton from '../components/auth/SubmitButton.js';
import axios from 'axios';
import CircleLogo from '../components/auth/CircleLogo.js';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { API } from '../config.js';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { AuthContext } from '../context/auth.js';

const Signin = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  // context
  const [state, setState] = useContext(AuthContext);

  const handleSubmit = async () => {
    setLoading(true);
    if (!email || !password) {
      alert('All fields required');
      setLoading(false);
      return;
    }
    // console.log('SIGNUP REQUEST => ', email, password);

    try {
      const { data } = await axios.post(`/login`, {
        email,
        password,
      });

      if (data.error) {
        alert(data.err);
        setLoading(false);
      } else {
        // save in context
        setState(data);
        //save response in async storage
        await AsyncStorage.setItem('@auth', JSON.stringify(data));
        // console.log(state);

        setLoading(false);
        console.log('SIGN IN SUCCESS =>', data);
        // alert('Sign in successful');

        // redirect
        navigation.navigate('Home');
      }
    } catch (err) {
      console.log(err);
      setLoading(false);
    }
  };

  return (
    <KeyboardAwareScrollView
      contentContainerStyle={{
        flex: 1,
        justifyContents: 'center',
        paddingHorizontal: 10,
      }}
    >
      <View
        style={{
          marginVertical: 100,
        }}
      >
        <CircleLogo />

        <Text title center>
          Sign In
        </Text>

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

        <SubmitButton
          title='Sign In'
          handleSubmit={handleSubmit}
          loading={loading}
        />

        <Text small center style={{ marginTop: 10 }}>
          Not yet registered?{'  '}
          <Text
            bold
            onPress={() => navigation.navigate('Signup')}
            color='#ff2222'
          >
            Sign Up
          </Text>
        </Text>

        <Text
          onPress={() => {
            navigation.navigate('Forgot');
          }}
          small
          center
          color='#ff9900'
          style={{ marginTop: 10 }}
        >
          Forgot password?
        </Text>
      </View>
    </KeyboardAwareScrollView>
  );
};

export default Signin;
