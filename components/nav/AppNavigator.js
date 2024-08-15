import React, { useContext } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../../screens/user/HomeScreen';
import UpdateInfo from '../../screens/UpdateInfo';
import Signin from '../../screens/Signin';
import VerifyEmail from '../../screens/VerifyEmail';
import Appointments from '../../screens/Appointments';
import Search from '../../screens/Search';
import HeaderTabs from './HeaderTab';
import Menu from '../../screens/user/Menu';
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
        name='Menu'
        component={Menu}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name='Appointments'
        component={Appointments}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name='Search'
        component={Search}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name='UpdateInfo'
        component={UpdateInfo}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name='Call'
        component={CallScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}
