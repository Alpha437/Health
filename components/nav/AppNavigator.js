import React, { useContext } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../../screens/user/HomeScreen';
import UpdateInfo from '../../screens/UpdateInfo';
import Signin from '../../screens/Signin';
import VerifyEmail from '../../screens/VerifyEmail';
import Appointments from '../../screens/Appointments';
import Search from '../../screens/Search';
import HeaderTabs from './HeaderTab';
import Account from '../../screens/user/Account';
import CallScreen from '../../screens/user/CallScreen';

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
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
          headerBackVisible: false,
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
        name='Appointments'
        component={Appointments}
        options={{
          headerBackVisible: true,
        }}
      />
      <Stack.Screen
        name='Search'
        component={Search}
        options={{
          headerBackVisible: true,
        }}
      />
      <Stack.Screen
        name='UpdateInfo'
        component={UpdateInfo}
        options={{ headerShown: false, headerBackVisible: true }}
      />
      <Stack.Screen
        name='Call'
        component={CallScreen}
        options={{ headerShown: false, headerBackVisible: true }}
      />
    </Stack.Navigator>
  );
}
