import React from 'react';
import { View, TextInput, TouchableOpacity } from 'react-native';
import Text from '@kaloraat/react-native-text';
import UserInput from '../components/auth/UserInput';
import SubmitButton from '../components/auth/SubmitButton';

export default function ForgotPassword() {
  return (
    <View style={{ flex: 1, marginVertical: 80, marginHorizontal: 24 }}>
      <Text title bold>
        Forgot password
      </Text>

      <Text medium style={{ marginTop: 10, color:'#333' }}>
        Enter your email address and we'll send you a code to reset your
        password
      </Text>

      <TextInput style={{borderBottomWidth: 0.5, borderBottomColor: '#333', marginVertical: 20, height: 50}} />

      <TouchableOpacity style={{flex:0, justifyContent:'center', backgroundColor: 'blue', height: 55, borderRadius: 10}}>
        <Text large center color='white'>Send</Text>
      </TouchableOpacity>
    </View>
  );
}
