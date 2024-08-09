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
          size={20}
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
  // const handlePress = ;

  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 5,
        alignItems: 'center',
        backgroundColor: '#240046',
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20,
      }}
    >
      <Tab
        name='Dashboard'
        icon='border-all'
        handlePress={() => navigation.navigate('Home')}
        screenName='Home'
        routeName={route.name}
      />
      <Tab
        name='Post'
        icon='plus-square'
        handlePress={() => navigation.navigate('Post')}
        screenName='Post'
        routeName={route.name}
      />
      <Tab
        name='Links'
        icon='list-ol'
        handlePress={() => navigation.navigate('Links')}
        screenName='Links'
        routeName={route.name}
      />
      <Tab
        name='Account'
        icon='user'
        handlePress={() => navigation.navigate('Account')}
        screenName='Account'
        routeName={route.name}
      />
    </View>
  );
}
