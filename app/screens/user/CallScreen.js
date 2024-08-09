import React from 'react';
import Text from '@kaloraat/react-native-text';
import { View } from 'react-native';
import {
  StreamCall,
  StreamVideo,
  StreamVideoClient,
  CallContent,
} from '@stream-io/video-react-native-sdk';
import { useEffect, useState } from 'react';

const apiKey = 'm98eeerxerwb';
const token =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoicGF0aWVudCJ9.tm1em0tudJgpT3PPlBsW0p2JnKL-52G_l9PCvXA_U18';
const user = {
  id: 'patient',
};

export default function CallScreen({ navigation }) {
  const [callId, setCallId] = useState('');
  const client = new StreamVideoClient({ apiKey, user, token });
  const call = client.call('default', callId);

  useEffect(() => {
    call.join({ create: true });
  }, [call]);

  return (
    <View style={{ flex: 1 }}>
      <StreamVideo client={client}>
        <StreamCall call={call}>
          <CallContent
            CallTopView={() => `ID: ${callId}`}
            onHangupCallHandler={() => navigation.goBack()}
          />
        </StreamCall>
      </StreamVideo>
    </View>
  );
}
