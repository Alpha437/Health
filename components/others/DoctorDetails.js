import React from 'react';
import { View, Image } from 'react-native';
import Text from '@kaloraat/react-native-text';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';

const DoctorDetails = ({}) => {
  return (
    <View
      style={{
        flex: 1,
        flexDirection: 'column',
        rowGap: 10,
        shadowColor: '#333',
        width: 360,
        backgroundColor: 'white',
        elevation: 5,
        padding: 15,
        borderRadius: 10,
        paddingVertical: 25,
      }}
    >
      <View style={{ flexDirection: 'row' }}>
        <Image
          source={require('../../images/leo.png')}
          style={{ width: 70, height: 70 }}
        />
        <View style={{ flexDirection: 'column', marginLeft: 15 }}>
          <View
            style={{
              backgroundColor: '#ffeae5',
              flexDirection: 'row',
              padding: 5,
              borderRadius: 10,
              width: 70,
            }}
          >
            <FontAwesome5Icon
              name='heart'
              size={20}
              color={'#f23a00'}
              style={{ fontWeight: 'bold' }}
            />
            <Text bold color='#f23a00' style={{ marginLeft: 10 }}>
              4.9
            </Text>
          </View>
          <Text bold medium color='#30005e'>
            Dr. Abram George
          </Text>
          <Text color='#333'>General Physician</Text>
        </View>
      </View>

      {/* Time */}
      <View
        style={{
          backgroundColor: '#def2ff',
          flex: 1,
          padding: 10,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <FontAwesome5Icon name='calendar' size={20} color='#ff6d00' />
          <Text bold color='#30005e' style={{ marginLeft: 10 }}>
            Monday
          </Text>
          <Text color='#30005e' style={{ marginLeft: 10 }}>
            Oct 24, 2022
          </Text>
        </View>

        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <FontAwesome5Icon name='clock' size={20} color='#ff6d00' />
          <Text color='#30005e' style={{ marginLeft: 10 }}>
            9:00 - 9:30am
          </Text>
        </View>
      </View>

      {/* Book Appointment */}
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <Text bold medium color='#30005e'>
          $100
        </Text>
        <View
          style={{
            width: 2,
            height: 20,
            backgroundColor: '#333',
            marginLeft: 20,
            opacity: 0.2,
          }}
        ></View>
        <View
          style={{ flexDirection: 'row', alignItems: 'center', marginLeft: 50 }}
        >
          <FontAwesome5Icon name='calendar' size={20} color='#ff6d00' />
          <Text style={{ marginLeft: 10 }} medium color='#ff6d00'>
            Book Appointment
          </Text>
        </View>
      </View>
    </View>
  );
};

export default DoctorDetails;
