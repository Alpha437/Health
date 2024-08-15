import React, { useContext } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../../screens/admin/HomeScreen';
import UpdateInfo from '../../screens/UpdateInfo';
import Search from '../../screens/Search';
import HeaderTabs from './HeaderTab';
import Account from '../../screens/admin/Account';
import Appointments from '../../screens/Appointments';
import CallScreen from '../../screens/admin/CallScreen';

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
        name='Call'
        component={CallScreen}
        options={{
          headerBackVisible: true,
        }}
      />
      <Stack.Screen
        name='UpdateInfo'
        component={UpdateInfo}
        options={{ headerShown: false, headerBackVisible: true }}
      />
    </Stack.Navigator>
  );
}
