import React, { useState, useContext } from 'react';
import { Image, ScrollView, View, TouchableOpacity } from 'react-native';
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
  const { name } = state.user;
  return (
    <View style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={{ backgroundColor: 'white' }}>
        <View
          style={{
            paddingVertical: 30,
            paddingHorizontal: 10,
            backgroundColor: '#ff6d00',
          }}
        >
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              rowGap: 20,
              justifyContent: 'space-between',
            }}
          >
            {/* Greet user */}
            <View>
              <Text title color='white'>
                Hey, Dr. {state ? name : 'name'}!
              </Text>
              <Text medium color='white'>
                Today is a busy day
              </Text>
            </View>
            <FontAwesome5Icon
              name='bell'
              size={20}
              style={{
                padding: 10,
                borderRadius: 10,
                backgroundColor: 'white',
              }}
            />
          </View>

          {/* Patient appointment card */}
          <View
            style={{
              flexDirection: 'column',
              alignItems: 'center',
              marginTop: 20,
              borderRadius: 20,
              padding: 20,
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
                  Alicent Hightower
                </Text>
                <View style={{ flexDirection: 'row' }}>
                  <Text color='#333'>Migraines</Text>
                  <Text style={{ marginHorizontal: 20 }} color='#333'>
                    ●
                  </Text>
                  <Text color='#333'>Online Visit</Text>
                </View>
              </View>
            </View>

            <View
              style={{
                backgroundColor: '#def2ff',
                flex: 1,
                padding: 10,
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}
            >
              <View>
                <FontAwesome5Icon name='calendar' size={15} color='#ff6d00' />
                <Text bold color='#30005e' style={{ marginLeft: 10 }}>
                  Monday
                </Text>
                <Text color='#30005e' style={{ marginLeft: 10 }}>
                  May, 12
                </Text>
              </View>

              <View>
                <FontAwesome5Icon name='clock' size={15} color='#ff6d00' />
                <Text color='#30005e' style={{ marginLeft: 60 }}>
                  11:00 - 12:00am
                </Text>
              </View>
            </View>

            <View>
              <TouchableOpacity
                style={{
                  backgroundColor: 'white',
                  padding: 20,
                  borderColor: '#30005e',
                  borderRadius: 20,
                }}
              >
                <Text color='#30005e'>Reschedule</Text>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => {}}
                style={{
                  backgroundColor: '#30005e',
                  padding: 20,
                  borderRadius: 20,
                }}
              >
                <Text color='#fff'>Join Session</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>

        {/* Visits */}
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
