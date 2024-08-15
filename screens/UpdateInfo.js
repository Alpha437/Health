import React, { useState } from 'react';
import { View, TouchableOpacity, TextInput } from 'react-native';
import Text from '@kaloraat/react-native-text';
import UserInput from '../components/auth/UserInput.js';
import SubmitButton from '../components/auth/SubmitButton.js';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function UpdateInfo({ navigation }) {
  return (
    <KeyboardAwareScrollView contentContainerStyle={{}}>
      <View style={{ display: 'flex', flexDirection: 'column', padding: 10 }}>
        <Text title bold>
          Update your information
        </Text>

        <View
          style={{
            width: 110,
            height: 110,
            backgroundColor: 'blue',
            borderRadius: 60,
            alignSelf: 'center',
          }}
        ></View>

        <UserInput name='First Name*' />
        <UserInput name='Last Name*' />
        <UserInput name='Date of Birth*' />
        <UserInput name='Phone Number*' />

        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginHorizontal: 10,
          }}
        >
          <View
            style={{
              flexGrow: 1,
              marginHorizontal: 10,
            }}
          >
            <Text>Gender</Text>
            <TextInput
              style={{
                borderBottomColor: 'black',
                borderBottomWidth: 0.5,
                height: 50,
              }}
            />
          </View>

          <View
            style={{
              flexGrow: 1,
              marginHorizontal: 10,
            }}
          >
            <Text>Blood Group</Text>
            <TextInput
              style={{
                borderBottomColor: 'black',
                borderBottomWidth: 0.5,
                height: 50,
              }}
            />
          </View>
        </View>

        <TouchableOpacity
          style={{
            flex: 0,
            justifyContent: 'center',
            height: 60,
            backgroundColor: 'blue',
            marginHorizontal: 10,
            borderRadius: 10,
            marginTop: 20,
          }}
          onPress={() => {
            navigation.navigate('Signin');
          }}
        >
          <Text large center color='white'>
            Save
          </Text>
        </TouchableOpacity>
      </View>
    </KeyboardAwareScrollView>
  );
}
