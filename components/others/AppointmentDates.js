import React from 'react';
import { View, Image, TouchableOpacity } from 'react-native';
import Text from '@kaloraat/react-native-text';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';

export const AppointmentDates = ({ color = '#fff', date, day, ...styles }) => {
  return (
    <View
      style={{
        alignItems: 'center',
        padding: 20,
        paddingHorizontal: 40,
        rowGap: 10,
        borderRadius: 10,
        ...styles,
      }}
    >
      <Text color={color} center large>
        {date}
      </Text>
      <Text color={color} center large>
        {day}
      </Text>
      <Text color={color} center large>
        ...
      </Text>
    </View>
  );
};

export const AppointmentCard = ({
  title,
  color,
  bgColor,
  btnDisplay = 'none',
  btnColor,
  btnText,
  btnTextColor,
  btnBorderWidth = 0,
  btnBgColor = 'white',
}) => {
  return (
    <View
      style={{
        rowGap: 20,
        shadowColor: '#333',
        elevation: 5,
        backgroundColor: 'white',
        borderRadius: 10,
        padding: 10,
      }}
    >
      <View style={{ flexDirection: 'row' }}>
        <Image
          source={require('../../images/leo.png')}
          style={{ width: 70, height: 70 }}
        />
        <View style={{ flexDirection: 'column', marginLeft: 15 }}>
          <Text bold medium color='black'>
            Dr. Abram George
          </Text>
          <Text color='#333'>General Physician</Text>
          <View
            style={{
              paddingVertical: 5,
              paddingHorizontal: 10,
              backgroundcolor: bgColor,
            }}
          >
            <Text bold color={color}>
              {title}
            </Text>
          </View>
        </View>
      </View>

      <TouchableOpacity
        style={{
          backgroundColor: btnBgColor,
          borderColor: btnColor,
          borderWidth: btnBorderWidth,
          borderRadius: 10,
          display: btnDisplay,
          padding: 15,
        }}
      >
        <Text center medium color={btnTextColor}>
          {btnText}
        </Text>
      </TouchableOpacity>
    </View>
  );
};
