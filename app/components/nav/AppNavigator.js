import React, { useContext } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../../screens/user/HomeScreen';
import UpdateInfo from '../../screens/UpdateInfo';
import Signin from '../../screens/Signin';
import VerifyEmail from '../../screens/VerifyEmail';
import Post from '../../screens/Post';
import Links from '../../screens/Links';
import HeaderTabs from './HeaderTab';
import Account from '../../screens/user/Account';
import CallScreen from '../../screens/user/CallScreen';

const Stack = createNativeStackNavigator();

export default function AdminNavigator() {
  return (
    <Stack.Navigator
      initialRouteName='Home'
      screenOptions={{ headerTitleAlign: 'center' }}
    >
      <Stack.Screen
        name='Home'
        component={HomeScreen}
        options={{
          title: 'MediCare',
          headerRight: () => <HeaderTabs />,
        }}
      />
      <Stack.Screen
        name='Account'
        component={Account}
        options={{
          headerBackVisible: true,
        }}
      />
      <Stack.Screen
        name='Post'
        component={Post}
        options={{
          headerBackVisible: true,
        }}
      />
      <Stack.Screen
        name='Links'
        component={Links}
        options={{
          headerBackVisible: true,
        }}
      />
      <Stack.Screen
        name='Signin'
        component={Signin}
        options={{ headerShown: false, headerBackVisible: true }}
      />
      <Stack.Screen
        name='UpdateInfo'
        component={UpdateInfo}
        options={{ headerShown: false, headerBackVisible: true }}
      />
      <Stack.Screen
        name='CallScreen'
        component={CallScreen}
        options={{ headerShown: false, headerBackVisible: true }}
      />
    </Stack.Navigator>
  );
}
