import React from 'react';
import Text from '@kaloraat/react-native-text';
import { TouchableOpacity } from 'react-native';

const SubmitButton = ({ title, handleSubmit, loading, ...style }) => (
  <TouchableOpacity
    onPress={handleSubmit}
    style={{
      backgroundColor: '#ff6d00',
      height: 50,
      justifyContent: 'center',
      borderRadius: 10,
      ...style,
    }}
  >
    <Text medium center color='white'>
      {loading ? 'Please wait...' : title}
    </Text>
  </TouchableOpacity>
);

export default SubmitButton;
