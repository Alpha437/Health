import React from 'react';
import { ScrollView, TextInput, View } from 'react-native';
import Text from '@kaloraat/react-native-text';
import { SafeAreaView } from 'react-native-safe-area-context';
import FooterTabs from '../components/nav/FooterTabs';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import DoctorDetails from '../components/others/DoctorDetails';

export default function Search() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
      <View style={{ flex: 1, paddingHorizontal: 15, paddingVertical: 20 }}>
        <Text title>Find Doctor</Text>

        <View
          style={{ flexDirection: 'row', marginVertical: 20, columnGap: 20 }}
        >
          <View style={{ position: 'relative', width: '80%' }}>
            <TextInput
              style={{
                padding: 20,
                borderColor: 'black',
                borderRadius: 10,
                paddingLeft: 50,
                borderWidth: 2,
                fontSize: 20,
              }}
            />

            <FontAwesome5Icon
              name='search'
              size={25}
              style={{ position: 'absolute', opacity: 0.7, top: 22, left: 10 }}
            />
          </View>

          <FontAwesome5Icon
            name='filter'
            size={30}
            style={{
              backgroundColor: '#ff7900',
              padding: 20,
              color: 'white',
              borderRadius: 10,
            }}
          />
        </View>

        <ScrollView
          contentContainerStyle={{
            rowGap: 20,
            marginVertical: 20,
            backgroundColor: 'white',
            padding: 5,
          }}
        >
          <DoctorDetails width={'100%'} />
          <DoctorDetails width={'100%'} />
          <DoctorDetails width={'100%'} />
          <DoctorDetails width={'100%'} />
        </ScrollView>
      </View>

      <FooterTabs />
    </SafeAreaView>
  );
}
