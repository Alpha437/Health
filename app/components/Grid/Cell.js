import React from 'react';
import { View } from 'react-native';
import Text from '@kaloraat/react-native-text';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';

const Cell = ({ title, iconName }) => {
  return (
    <View
      style={{
        borderColor: '#f2f2f2',
        backgroundColor: '#fff',
        borderWidth: 5,
        flexDirection: 'column',
        padding: 10,
        height: 150,
        flex: 1,
        alignItems: 'center',
      }}
    >
      <FontAwesome5Icon
        name={iconName}
        size={80}
        color={'#ff6d00'}
        style={{ fontWeight: 100 }}
      />
      <Text color='#462c68' medium>
        {title}
      </Text>
    </View>
  );
};

export default Cell;
