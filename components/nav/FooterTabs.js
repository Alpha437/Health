import React, { useState } from 'react';
import { View, TouchableOpacity } from 'react-native';
import Text from '@kaloraat/react-native-text';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { useNavigation, useRoute } from '@react-navigation/native';

export const Tab = ({ name, icon, handlePress, screenName, routeName }) => {
  const activeScreen = screenName === routeName;
  const backgroundColor = activeScreen && '#30005e';
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: backgroundColor,
        padding: 10,
        borderRadius: 10,
      }}
    >
      <TouchableOpacity>
        <FontAwesome5
          name={icon}
          size={25}
          onPress={handlePress}
          color={'white'}
        />
      </TouchableOpacity>
      <Text medium style={{ marginLeft: 10, color: 'white' }}>
        {activeScreen ? name : ''}
      </Text>
    </View>
  );
};

export default function FooterTabs() {
  const navigation = useNavigation();
  const route = useRoute();

  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10,
        alignItems: 'center',
        backgroundColor: '#240046',
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20,
      }}
    >
      <Tab
        name='Dashboard'
        icon='border-all'
        handlePress={() => {
          navigation.navigate('Home');
        }}
        screenName='Home'
        routeName={route.name}
      />
      <Tab
        name='Appointments'
        icon='layer-group'
        handlePress={() => {
          navigation.navigate('Appointments');
        }}
        screenName='Appointments'
        routeName={route.name}
      />
      {/* <Tab
        name='Search'
        icon='search'
        handlePress={() => {
          navigation.navigate('Search');
        }}
        screenName='Search'
        routeName={route.name}
      /> */}
      <Tab
        name='Menu'
        icon='bars'
        handlePress={() => {
          navigation.navigate('Menu');
        }}
        screenName='Menu'
        routeName={route.name}
      />
    </View>
  );
}
