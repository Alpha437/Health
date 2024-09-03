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
  Doctor,
  Patient,
  handlePress1,
  handlePress2,
  title,
  color,
  bgColor,
  btnDisplay1 = 'none',
  btnDisplay2 = 'none',
  btnColor,
  btnText1,
  btnText2,
  btnTextColor1,
  btnTextColor2,
  btnBorderWidth = 0,
  btnBgColor1 = 'white',
  btnBgColor2 = 'white',
  width = '100%',
}) => {
  if (btnDisplay2 === 'flex') {
    width = '45%';
  }
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
            {Doctor ? 'Dr. ' + Doctor : Patient}
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

      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <TouchableOpacity
          style={{
            backgroundColor: btnBgColor1,
            borderColor: btnColor,
            borderWidth: btnBorderWidth,
            borderRadius: 10,
            display: btnDisplay1,
            padding: 15,
            width: width,
          }}
          onPress={handlePress1}
        >
          <Text center medium color={btnTextColor1}>
            {btnText1}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            backgroundColor: btnBgColor2,
            borderColor: btnColor,
            borderWidth: btnBorderWidth,
            borderRadius: 10,
            display: btnDisplay2,
            padding: 15,
            width: width,
          }}
          onPress={handlePress2}
        >
          <Text center medium color={btnTextColor2}>
            {btnText2}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
