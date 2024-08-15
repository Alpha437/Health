import React from 'react';
import { View } from 'react-native';
import Text from '@kaloraat/react-native-text';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';

export const MenuTab = ({ icon1, title, icon2 }) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
    >
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <FontAwesome5Icon
          name={icon1}
          size={20}
          style={{
            backgroundColor: '#fff5e5',
            color: '#ff800e',
            padding: 15,
            borderRadius: 10,
          }}
        />
        <Text medium color='#240046' style={{ marginLeft: 10 }}>
          {title}
        </Text>
      </View>

      <FontAwesome5Icon
        name={icon2}
        size={15}
        color={'#333'}
        style={{ opacity: 0.3 }}
      />
    </View>
  );
};
