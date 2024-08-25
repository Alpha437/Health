import React from 'react';
import { View, Text } from 'react-native';
import {
  StreamCall,
  StreamVideo,
  StreamVideoClient,
  CallContent,
} from '@stream-io/video-react-native-sdk';

export default function CallScreen({ navigation }) {
  const apiKey = 'm98eeerxerwb';
  const userId = 'doctor';
  const token =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiZG9jdG9yIn0.8y2sQOFhDZKNJrSVgnpf2JZ6ZZlS5A9_LHFpT92q4ZI';
  const callId = 'wV5zScZEXPkj';
  const user = { id: userId };

  const client = new StreamVideoClient({ apiKey, user, token });
  const call = client.call('default', callId);
  call.join({ create: true });
  return (
    <View style={{ flex: 1 }}>
      <StreamVideo client={client}>
        <StreamCall call={call}>
          <CallContent
            onHangupCallHandler={() => {
              navigation.goBack();
            }}
          />
        </StreamCall>
      </StreamVideo>
    </View>
  );
}
