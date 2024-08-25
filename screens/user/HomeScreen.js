import React, { useState, useContext, useEffect } from 'react';
import {
  Image,
  ScrollView,
  View,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import Text from '@kaloraat/react-native-text';
import { AuthContext } from '../../context/auth';
import FooterTabs from '../../components/nav/FooterTabs';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import DoctorDetails from '../../components/others/DoctorDetails';
import HealthArticle from '../../components/others/HealthArticle';
import axios from 'axios';

export default function HomeScreen({ navigation }) {
  const [state, setState] = useContext(AuthContext);
  const [loading, setLoading] = useState(true);
  const [callId, setCallId] = useState('');
  const [doctors, setDoctors] = useState('');

  async function getDoctors() {
    try {
      const { data } = await axios.get('/getAllDoctors');
      setDoctors(data);
      setLoading(false);
    } catch (error) {
      if (error) {
        console.log('Could not get doctors.');
      }
    }
  }

  useEffect(() => {
    getDoctors();
  }, []);

  // function genRandomString(number) {
  //   const chars =
  //     'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  //   const charLength = chars.length;
  //   let result = '';
  //   for (let i = 0; i < length; i++) {
  //     result += chars.charAt(Math.floor(Math.random() * charLength));
  //   }
  //   return result;
  // }

  // function handlePress() {
  //   const id = genRandomString(5);
  //   setCallId(id);
  //   console.log('CALL ID => ', callId);
  //   console.log(this);
  // }

  return (
    <View style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={{ backgroundColor: '#fff' }}>
        <View
          style={{
            paddingVertical: 30,
            paddingHorizontal: 10,
            backgroundColor: '#240046',
          }}
        >
          <Text title color='white'>
            Hey, {state.user ? state.user.name.split(' ')[0] : 'Adeniji'}!
          </Text>
          <Text color='white'>You have an upcoming appointment</Text>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginTop: 20,
            }}
          >
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
              }}
            >
              <Image
                source={(uri = require('../../images/emma.png'))}
                style={{ width: 50, height: 50 }}
              />
              <View style={{ marginLeft: 10 }}>
                <Text large color='white'>
                  Dr. Emma Mia
                </Text>
                <Text color='white'>General Physician</Text>
              </View>
            </View>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('Call');
              }}
              style={{
                backgroundColor: '#ff6d00',
                justifyContent: 'center',
                borderRadius: 10,
                paddingHorizontal: 20,
                paddingVertical: 18,
              }}
            >
              <Text medium center color='white'>
                Attend Now
              </Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              backgroundColor: '#def2ff',
              flex: 1,
              padding: 10,
              flexDirection: 'row',
              marginTop: 10,
              justifyContent: 'space-between',
            }}
          >
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <FontAwesome5Icon name='calendar' size={20} color='#ff6d00' />
              <Text bold color='#30005e' style={{ marginLeft: 10 }}>
                Monday, May 12
              </Text>
            </View>

            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <FontAwesome5Icon name='clock' size={20} color='#ff6d00' />
              <Text color='#30005e' style={{ marginLeft: 10 }}>
                11:00 - 12:00 am
              </Text>
            </View>
          </View>
        </View>

        {/* Doctors */}
        <View style={{ flex: 1, flexDirection: 'column' }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              backgroundColor: 'white',
              alignItems: 'center',
              padding: 10,
            }}
          >
            <Text large color='black'>
              Top Doctors
            </Text>
            <Text color='#333'>See All</Text>
          </View>
          <ScrollView
            horizontal={true}
            contentContainerStyle={{
              flexGrow: 1,
              padding: 10,
              columnGap: 10,
              backgroundColor: 'white',
            }}
          >
            {loading ? (
              <ActivityIndicator
                size='large'
                color='#333'
                style={{ flex: 1 }}
              />
            ) : (
              doctors.map(function (doctor) {
                return <DoctorDetails doctor={doctor} />;
              })
            )}

            {/* <DoctorDetails doctor={doctors[0]} /> */}
            {/* <DoctorDetails />
            <DoctorDetails />
            <DoctorDetails />
            <DoctorDetails /> */}
          </ScrollView>
        </View>

        {/* Download Prescription */}
        <TouchableOpacity
          style={{ flex: 1, padding: 10, backgroundColor: 'white' }}
        >
          <Image
            source={require('../../images/prescriptions.png')}
            style={{ width: '100%' }}
          />
        </TouchableOpacity>

        {/* Doctors */}
        <View style={{ flex: 1, flexDirection: 'column' }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              backgroundColor: 'white',
              alignItems: 'center',
              padding: 10,
            }}
          >
            <Text large color='black'>
              Health Articles
            </Text>
            <Text color='#333'>See All</Text>
          </View>
          <ScrollView
            horizontal={true}
            contentContainerStyle={{
              flexGrow: 1,
              padding: 10,
              columnGap: 10,
              backgroundColor: 'white',
            }}
          >
            <HealthArticle />
            <HealthArticle />
            <HealthArticle />
            <HealthArticle />
          </ScrollView>
        </View>

        {/* How to book appointments */}
        <View
          style={{ backgroundColor: 'white', padding: 10, paddingVertical: 20 }}
        >
          <Text medium bold color='#30005e'>
            Book an appointment in three easy steps
          </Text>
          <View style={{ marginTop: 20, flexDirection: 'column', rowGap: 10 }}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                paddingHorizontal: 10,
              }}
            >
              <FontAwesome5Icon
                name='search'
                size={20}
                style={{
                  backgroundColor: '#ff6d00',
                  padding: 10,
                  borderRadius: 10,
                  color: 'white',
                }}
              />
              <Text
                medium
                color='#30005e'
                style={{ flex: 1, flexWrap: 'wrap', marginLeft: 20 }}
              >
                Search for doctors by speciality, service or disease
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                paddingHorizontal: 10,
              }}
            >
              <FontAwesome5Icon
                name='search'
                size={20}
                style={{
                  backgroundColor: '#ff6d00',
                  padding: 10,
                  borderRadius: 10,
                  color: 'white',
                }}
              />
              <Text
                medium
                color='#30005e'
                style={{ flex: 1, flexWrap: 'wrap', marginLeft: 20 }}
              >
                Book and confirmed appointment within seconds
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                paddingHorizontal: 10,
              }}
            >
              <FontAwesome5Icon
                name='search'
                size={20}
                style={{
                  backgroundColor: '#ff6d00',
                  padding: 10,
                  borderRadius: 10,
                  color: 'white',
                }}
              />
              <Text
                medium
                color='#30005e'
                style={{ flex: 1, flexWrap: 'wrap', marginLeft: 20 }}
              >
                Select based on experience, fee or rating.
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>

      <FooterTabs />
    </View>
  );
}
