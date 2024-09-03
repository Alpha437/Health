import React, { useContext } from 'react';
import { View, Image, TouchableOpacity } from 'react-native';
import Text from '@kaloraat/react-native-text';
import { SafeAreaView } from 'react-native-safe-area-context';
import FooterTabs from '../../components/nav/FooterTabs';
import { AuthContext } from '../../context/auth';
import { MenuTab } from '../../components/others/MenuTab';

import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Menu() {
  const [state, setState] = useContext(AuthContext);
  const { name, email } = state.user;

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: 'white',
        paddingTop: 20,
      }}
    >
      <View style={{ flex: 1, paddingHorizontal: 10 }}>
        <Text title color='#240046'>
          Menu
        </Text>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            margin: 20,
          }}
        >
          <Image
            source={require('../../images/leo.png')}
            style={{ width: 100, height: 100 }}
          />
          <View style={{ marginLeft: 10 }}>
            <Text large color='#240046'>
              Dr. {name.split(' ')[0]}
            </Text>
            <Text color='#240046'>Pediatrician</Text>
          </View>
        </View>
        <View
          style={{
            height: 1,
            backgroundColor: '#333',
            width: '100%',
            opacity: 0.2,
          }}
        ></View>

        <View style={{ rowGap: 20, marginVertical: 20 }}>
          <MenuTab
            icon1='wrench'
            title='Account Settings'
            icon2='arrow-right'
          />
          <MenuTab icon1='lock' title='Change Password' icon2='arrow-right' />
        </View>

        <View
          style={{
            height: 1,
            backgroundColor: '#333',
            width: '100%',
            opacity: 0.2,
          }}
        ></View>

        <View style={{ rowGap: 20, marginTop: 20 }}>
          <MenuTab
            icon1='file'
            title='Terms and Conditions'
            icon2='arrow-right'
          />
          <MenuTab
            icon1='newspaper'
            title='News & Bloggs'
            icon2='arrow-right'
          />
          <MenuTab icon1='headphones' title='Support' icon2='arrow-right' />
        </View>

        <TouchableOpacity
          onPress={async () => {
            setState({ token: '', user: null });
            await AsyncStorage.removeItem('@auth');
          }}
          style={{
            marginTop: 20,
            width: '100%',
            padding: 20,
            shadowColor: '#333',
            elevation: 5,
            backgroundColor: 'white',
            borderRadius: 10,
          }}
        >
          <Text medium center color='#ff800e'>
            Logout
          </Text>
        </TouchableOpacity>
      </View>

      <FooterTabs />
    </SafeAreaView>
  );
}
