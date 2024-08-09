import React from 'react';
import { View, TextInput } from 'react-native';
import Text from '@kaloraat/react-native-text';

const UserInput = ({
  name,
  value,
  setValue,
  autoCapitalize = 'none',
  keyboardType = 'default',
  secureTextEntry = false,
  placeholder = '',
}) => (
  <View style={{ marginHorizontal: 24 }}>
    <Text bold>{name}</Text>
    <TextInput
      placeholder={placeholder}
      placeholderTextColor={'#333'}
      autoCorrect={false}
      autoCapitalize={autoCapitalize}
      keyboardType={keyboardType}
      secureTextEntry={secureTextEntry}
      style={{
        borderBottomWidth: 0.5,
        height: 48,
        borderBottomColor: '#333',
        marginBottom: 30,
      }}
      value={value}
      onChangeText={(text) => setValue(text)}
    />
  </View>
);

export default UserInput;
