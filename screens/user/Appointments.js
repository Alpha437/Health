import React from 'react';
import { ScrollView, View } from 'react-native';
import Text from '@kaloraat/react-native-text';
import { SafeAreaView } from 'react-native-safe-area-context';
import FooterTabs from '../../components/nav/FooterTabs';
import {
  AppointmentCard,
  AppointmentDates,
} from '../../components/others/AppointmentDates';

export default function Appointments() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
      <ScrollView contentContainerStyle={{ flex: 1, padding: 20 }}>
        <Text large color='#18273b'>
          August 2024
        </Text>
        <View>
          <ScrollView
            horizontal={true}
            contentContainerStyle={{
              flexGrow: 1,
              padding: 10,
              columnGap: 10,
            }}
          >
            <AppointmentDates date={9} day={'Mon'} backgroundColor='#240046' />
            <AppointmentDates
              date={10}
              day={'Tue'}
              backgroundColor='#f5f5f5'
              color='#333'
            />
            <AppointmentDates
              date={11}
              day={'Wed'}
              backgroundColor='#f5f5f5'
              color='#333'
            />
            <AppointmentDates
              date={12}
              day={'Thu'}
              backgroundColor='#f5f5f5'
              color='#333'
            />
            <AppointmentDates
              date={13}
              day={'Fri'}
              backgroundColor='#f5f5f5'
              color='#333'
            />
          </ScrollView>
        </View>

        <View style={{ rowGap: 20, marginBottom: 40 }}>
          <Text large color='#18273b'>
            3 Appointments
          </Text>

          <View
            style={{
              flexDirection: 'row',
              columnGap: 20,
              alignItems: 'center',
            }}
          >
            <View
              style={{
                paddingVertical: 5,
                paddingHorizontal: 10,
                backgroundcolor: '#ffe3af',
              }}
            >
              <Text bold color='#ff7900'>
                All
              </Text>
            </View>
            <Text bold color='#838a93'>
              Upcoming
            </Text>
            <Text bold color='#838a93'>
              Completed
            </Text>
            <Text bold color='#838a93'>
              Canceled
            </Text>
          </View>
        </View>

        <View style={{ rowGap: 10 }}>
          <AppointmentCard
            color='#ff7900'
            bgColor='#ffe2b3'
            title={'Upcoming'}
            btnDisplay1='flex'
            btnText1={'Attend Now'}
            btnTextColor1={'white'}
            btnBgColor1={'#ff7900'}
          />
          <AppointmentCard
            color='#0db00a'
            bgColor='#e2f8e3'
            title={'Completed'}
            btnDisplay1='flex'
            btnText1={'View Details'}
            btnTextColor1={'#ff7900'}
            btnBorderWidth={2}
            btnColor={'#ff7900'}
          />
          <AppointmentCard color='red' bgColor='#ffeae5' title={'Canceled'} />
        </View>
      </ScrollView>

      <FooterTabs />
    </SafeAreaView>
  );
}
