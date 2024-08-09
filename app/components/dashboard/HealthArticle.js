import React from 'react';
import { View, Image } from 'react-native';
import Text from '@kaloraat/react-native-text';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';

const HealthArticle = ({}) => {
  return (
    <View
      style={{
        flex: 1,
        flexDirection: 'column',
        rowGap: 10,
        width: 180,
        backgroundColor: '#ff7900',
        padding: 15,
        borderRadius: 10,
        paddingVertical: 25,
      }}
    >
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <Text medium color='white'>
          02 July 2022
        </Text>
        <FontAwesome5Icon name='bookmark' color='white' size={15} />
      </View>

      {/* Title */}

      <Text bold medium color='#fff' style={{}}>
        COVID-19 Vaccine
      </Text>

      {/* Highlight from article */}
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <Text color='#fff'>
          Official public service announcement on coronavirus from the world
        </Text>

        <FontAwesome5Icon name='arrow-right' size={15} color='#fff' />
      </View>
    </View>
  );
};

export default HealthArticle;
