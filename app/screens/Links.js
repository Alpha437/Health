import React from 'react';
import { View } from 'react-native';
import Text from '@kaloraat/react-native-text';
import { SafeAreaView } from 'react-native-safe-area-context';
import FooterTabs from '../components/nav/FooterTabs';

export default function Links() {
  return (
    <SafeAreaView style={{ padding: 10, flex: 1 }}>
      <View style={{ flex: 1 }}>
        <Text>Links</Text>
      </View>

      <FooterTabs />
    </SafeAreaView>
  );
}
