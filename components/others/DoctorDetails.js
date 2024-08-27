import React, { useState } from 'react';
import { View, Image, TouchableOpacity, Alert } from 'react-native';
import Text from '@kaloraat/react-native-text';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import genRandomString from '../call/RandomString';
import axios from 'axios';

const DoctorDetails = ({
  width = 360,
  handlePress,
  doctor,
  patientName,
  func,
  date,
  time,
}) => {
  const [loading, setLoading] = useState(false);
  const { name, email } = doctor;

  const id = genRandomString(5);
  return (
    <View
      style={{
        flex: 1,
        flexDirection: 'column',
        rowGap: 10,
        shadowColor: '#333',
        width: width,
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
            Dr. {doctor ? name : 'Abram George'}
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
      <TouchableOpacity
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          marginLeft: 50,
          width: '90%',
        }}
        onPress={async () => {
          try {
            setLoading(true);
            await axios.post('/book', {
              email,
              patient: patientName,
              callId: id,
            });
            setLoading(false);
            Alert.alert(
              'Success',
              'Appointment booked. You wil be notified when the doctor is available.'
            );
          } catch (error) {
            if (error) {
              Alert.alert('Failed', 'Could not book appointment. Try again.');
              setLoading(false);
              console.log(error);
            }
          }
        }}
      >
        <FontAwesome5Icon name='calendar' size={20} color='#ff6d00' />
        <Text style={{ marginLeft: 10 }} medium color='#ff6d00'>
          {loading ? 'Please wait...' : 'Book Appointment'}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default DoctorDetails;
