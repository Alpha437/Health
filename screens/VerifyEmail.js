import React, { useState, useContext, useEffect } from 'react';
import Text from '@kaloraat/react-native-text';
import { SafeAreaView } from 'react-native-safe-area-context';
import { View, TextInput } from 'react-native';
import SubmitButton from '../components/auth/SubmitButton';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { AuthContext } from '../context/auth';

export default function VerifyEmail({ navigation }) {
  const [email, setEmail] = useState('');
  const [code, setCode] = useState('');
  const [loading, setLoading] = useState(false);

  //context
  const [state, setState] = useContext(AuthContext);
  const populateState = async () => {
    setEmail(state.user.email);
    setCode(state.user.emailToken);
  };

  useEffect(() => {
    populateState();
  }, [state]);

  const handleSubmit = async () => {
    try {
      setLoading(true);
      if (!code || !email) {
        alert('All fields required');
        setLoading(false);
        return;
      }

      //process verification
      const { data } = await axios.post(`/activate`, {
        email,
        code,
      });
      setLoading(false);
      console.log('EMAIL VERIFIED =>', data);
      alert('Email Verified');

      //redirecct
      navigation.navigate('Signin');
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  return (
    <SafeAreaView style={{ padding: 20, paddingTop: 40, flex: 1 }}>
      <Text title bold color='blue'>
        Verify Email
      </Text>
      <View style={{ flex: 1, marginTop: 10 }}>
        <Text color='#333' medium>
          We have sent a verification code to {email}. Enter the code to verify
          your account.
        </Text>
        <TextInput
          autoCorrect={false}
          autoCapitalize={'none'}
          keyboardType={'number-pad'}
          secureTextEntry={true}
          style={{
            borderBottomWidth: 0.5,
            height: 48,
            borderBottomColor: '',
            marginBottom: 30,
          }}
          onChangeText={(text) => setCode(text)}
        />
        <Text medium>
          Didn't recieve the code?{' '}
          <Text
            color='blue'
            medium
            onPress={async () => await sendEmail(email, code)}
          >
            Resend
          </Text>
        </Text>
      </View>

      <SubmitButton
        title={'CONTINUE'}
        handleSubmit={handleSubmit}
        loading={loading}
      />
    </SafeAreaView>
  );
}
