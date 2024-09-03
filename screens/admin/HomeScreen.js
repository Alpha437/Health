import React, { useState, useContext } from 'react';
import { Image, ScrollView, View, TouchableOpacity } from 'react-native';
import Text from '@kaloraat/react-native-text';
import { AuthContext } from '../../context/auth';
import FooterTabs from '../../components/nav/FooterTabs';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import DoctorDetails from '../../components/others/DoctorDetails';
import HealthArticle from '../../components/others/HealthArticle';
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
                Hey, Dr. {state ? name.split(' ')[0] : 'name'}!
              </Text>
              <Text medium color='white'>
                Today is a busy day
              </Text>
            </View>
            <FontAwesome5Icon
              name='bell'
              size={35}
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
              marginTop: 20,
              borderRadius: 20,
              padding: 20,
              backgroundColor: 'white',
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
                <Text large bold color='#30005e'>
                  Alicent Hightower
                </Text>
                <View style={{ flexDirection: 'row' }}>
                  <Text color='#333'>Migraines</Text>
                  <Text
                    style={{ marginLeft: 15, marginRight: 15 }}
                    color='#333'
                  >
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
                marginTop: 15,
                alignItems: 'center',
              }}
            >
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <FontAwesome5Icon name='calendar' size={25} color='#ff6d00' />
                <Text medium color='#30005e' style={{ marginLeft: 10 }}>
                  Monday,
                </Text>
                <Text medium color='#30005e' style={{ marginLeft: 10 }}>
                  May 12
                </Text>
              </View>

              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <FontAwesome5Icon name='clock' size={25} color='#ff6d00' />
                <Text medium color='#30005e' style={{ marginLeft: 10 }}>
                  11:00 - 12:00am
                </Text>
              </View>
            </View>

            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginTop: 10,
              }}
            >
              <TouchableOpacity
                style={{
                  backgroundColor: 'white',
                  padding: 20,
                  paddingHorizontal: 35,
                  borderColor: '#30005e',
                  borderRadius: 10,
                  borderWidth: 2,
                }}
              >
                <Text medium color='#30005e'>
                  Reschedule
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('Call');
                }}
                style={{
                  backgroundColor: '#30005e',
                  padding: 20,
                  paddingHorizontal: 35,
                  borderRadius: 10,
                }}
              >
                <Text medium color='#fff'>
                  Join Session
                </Text>
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
              Visits
            </Text>
            <Text color='#333'>See All</Text>
          </View>
          <View
            style={{
              padding: 10,
              backgroundColor: 'white',
            }}
          ></View>
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
          <Text large color='black'>
            Book an appointment in three easy steps
          </Text>
          <View style={{ marginTop: 20, flexDirection: 'column', rowGap: 10 }}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
              }}
            >
              <FontAwesome5Icon
                name='search'
                size={20}
                style={{
                  backgroundColor: '#ff6d00',
                  padding: 15,
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
              }}
            >
              <FontAwesome5Icon
                name='bookmark'
                size={20}
                style={{
                  backgroundColor: '#ff6d00',
                  padding: 15,
                  borderRadius: 10,
                  color: 'white',
                }}
              />
              <Text
                medium
                color='#30005e'
                style={{ flex: 1, flexWrap: 'wrap', marginLeft: 20 }}
              >
                Book and confirm appointment within seconds.
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
              }}
            >
              <FontAwesome5Icon
                name='check'
                size={15}
                style={{
                  backgroundColor: '#ff6d00',
                  padding: 15,
                  borderRadius: 10,
                  color: 'white',
                }}
              />
              <Text
                medium
                color='#30005e'
                style={{ flex: 1, flexWrap: 'wrap', marginLeft: 20 }}
              >
                Select based on experience, fee or rating
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>

      <FooterTabs backgroundColor='#ff7900' />
    </View>
  );
}
