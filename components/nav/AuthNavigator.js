import React, { useContext } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Signup from '../../screens/Signup';
import Signin from '../../screens/Signin';
import VerifyEmail from '../../screens/VerifyEmail';
import ForgotPassword from '../../screens/ForgotPassword';

const Stack = createNativeStackNavigator();

export default function AuthNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name='Signin' component={Signin} />
      <Stack.Screen name='VerifyEmail' component={VerifyEmail} />
      <Stack.Screen name='Signup' component={Signup} />
      <Stack.Screen
        name='Forgot'
        component={ForgotPassword}
        options={{
          headerShown: true,
          headerTitle: 'Forgot Password',
          headerBackVisible: true,
        }}
      />
    </Stack.Navigator>
  );
}
