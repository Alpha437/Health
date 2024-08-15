import React, { useState, useContext } from 'react';
import { Image, ScrollView, View, Button } from 'react-native';
import Text from '@kaloraat/react-native-text';
import { AuthContext } from '../../context/auth';
import FooterTabs from '../../components/nav/FooterTabs';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import DoctorDetails from '../../components/dashboard/DoctorDetails';
import HealthArticle from '../../components/dashboard/HealthArticle';
import axios from 'axios';

export default function HomeScreen({ navigation }) {
  const [state, setState] = useContext(AuthContext);
  const [loading, setLoading] = useState('');
  const [callId, setCallId] = useState('');
  return (
    <View style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={{ backgroundColor: '#240046' }}>
        <View
          style={{
            paddingVertical: 30,
            paddingHorizontal: 10,
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
            <Button
              title='Attend Now'
              onPress={() => {
                navigation.navigate('Call');
              }}
              style={{
                backgroundColor: '#ff6d00',
                height: 60,
                justifyContent: 'center',
                borderRadius: 10,
                paddingHorizontal: 60,
              }}
            />
          </View>
          <View
            style={{
              backgroundColor: '#def2ff',
              flex: 1,
              padding: 10,
              flexDirection: 'row',
            }}
          >
            <FontAwesome5Icon name='clock' size={15} color='#ff6d00' />
            <Text bold color='#30005e' style={{ marginLeft: 10 }}>
              Monday, May 12
            </Text>
            <Text color='#30005e' style={{ marginLeft: 60 }}>
              11:00 - 12:00 am
            </Text>
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
            showsHorizontalScrollIndicator={true}
            contentContainerStyle={{
              flexGrow: 1,
              padding: 10,
              columnGap: 10,
              backgroundColor: 'white',

              width: 2000,
            }}
          >
            <DoctorDetails />
            <DoctorDetails />
            <DoctorDetails />
            <DoctorDetails />
          </ScrollView>
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
            showsHorizontalScrollIndicator={true}
            contentContainerStyle={{
              flexGrow: 1,
              padding: 10,
              columnGap: 10,
              backgroundColor: 'white',

              width: 2000,
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
                Search for doctors by speciality, service or disease.
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
                Search for doctors by speciality, service or disease.
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
                Search for doctors by speciality, service or disease.
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>

      <FooterTabs />
    </View>
  );
}
