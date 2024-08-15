import React from 'react';
import { View } from 'react-native';
import Text from '@kaloraat/react-native-text';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';

const Row = ({ columns, children }) => {
  return (
    <View
      style={{
        backgroundColor: 'white',
        flex: columns,
      }}
    >
      <View style={{ flexDirection: 'row' }}>{children}</View>
    </View>
  );
};
export default Row;
