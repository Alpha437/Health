import React from 'react';
import { View } from 'react-native';
import Text from '@kaloraat/react-native-text';
import { SafeAreaView } from 'react-native-safe-area-context';
import FooterTabs from '../components/nav/FooterTabs';

export default function Appointments() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1 }}>
        <Text>Post</Text>
      </View>

      <FooterTabs />
    </SafeAreaView>
  );
}
