import React, { useContext } from 'react';
import { ScrollView } from 'react-native';
import Text from '@kaloraat/react-native-text';
import { SafeAreaView } from 'react-native-safe-area-context';
import FooterTabs from '../../components/nav/FooterTabs';
import { AuthContext } from '../../context/auth';

export default function Account() {
  const [state, setState] = useContext(AuthContext);
  const { name, email } = state.user;

  return (
    <SafeAreaView style={{ padding: 10, flex: 1 }}>
      <ScrollView contentContainerStyle={{ flex: 1 }}>
        <Text>Account Doctor</Text>
        <Text title bold>
          {name}
        </Text>
        <Text medium light>
          {email}
        </Text>
      </ScrollView>

      <FooterTabs />
    </SafeAreaView>
  );
}
