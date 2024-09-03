import React, { useContext, useEffect, useState } from 'react';
import { ActivityIndicator, Alert, ScrollView, View } from 'react-native';
import Text from '@kaloraat/react-native-text';
import { SafeAreaView } from 'react-native-safe-area-context';
import FooterTabs from '../../components/nav/FooterTabs';
import {
  AppointmentCard,
  AppointmentDates,
} from '../../components/others/AppointmentDates';
import { AuthContext } from '../../context/auth';
import axios from 'axios';

export default function Appointments({ navigation }) {
  const [state, setState] = useContext(AuthContext);
  const [callId, setCallId] = useState('');
  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(false);
  const getUserAppointments = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get(`/getUser/${state.user.email}`);
      setAppointments(data.data.appointments);
      setLoading(false);
    } catch (error) {
      if (error) {
        console.log(error, 'Could not get user.');
        setLoading(false);
      }
    }
  };
  useEffect(() => {
    getUserAppointments();
  }, []);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
      <View style={{ flex: 1, padding: 10, paddingTop: 20 }}>
        <Text large color='#18273b'>
          August 2024
        </Text>
        <View>
          <ScrollView
            horizontal={true}
            contentContainerStyle={{
              flexGrow: 1,
              padding: 10,
              columnGap: 10,
            }}
          >
            <AppointmentDates date={9} day={'Mon'} backgroundColor='#240046' />
            <AppointmentDates
              date={10}
              day={'Tue'}
              backgroundColor='#f5f5f5'
              color='#333'
            />
            <AppointmentDates
              date={11}
              day={'Wed'}
              backgroundColor='#f5f5f5'
              color='#333'
            />
            <AppointmentDates
              date={12}
              day={'Thu'}
              backgroundColor='#f5f5f5'
              color='#333'
            />
            <AppointmentDates
              date={13}
              day={'Fri'}
              backgroundColor='#f5f5f5'
              color='#333'
            />
          </ScrollView>
        </View>

        <View style={{ rowGap: 20, marginBottom: 40 }}>
          <Text large color='#18273b'>
            0{appointments?.length} Appointments
          </Text>

          <View
            style={{
              flexDirection: 'row',
              columnGap: 20,
              alignItems: 'center',
            }}
          >
            <View
              style={{
                paddingVertical: 5,
                paddingHorizontal: 10,
                backgroundcolor: '#ffe3af',
              }}
            >
              <Text bold color='#ff7900'>
                All
              </Text>
            </View>
            <Text bold color='#838a93'>
              Upcoming
            </Text>
            <Text bold color='#838a93'>
              Completed
            </Text>
            <Text bold color='#838a93'>
              Canceled
            </Text>
          </View>
        </View>

        <ScrollView contentContainerStyle={{ rowGap: 10, padding: 10 }}>
          {!loading ? (
            appointments?.length > 0 ? (
              // Sort appointments in a descending order according to their id
              appointments
                .sort((a, b) => b.id - a.id)
                .map((appointment) => {
                  if (appointment.status === 'pending') {
                    return (
                      <AppointmentCard
                        Patient={appointment.patientName}
                        key={appointment.id}
                        color='#ff7900'
                        bgColor='#ffe2b3'
                        title={'Pending'}
                        btnDisplay1='flex'
                        handlePress1={async () => {
                          try {
                            setCallId(appointment.callId);

                            // Update appointment status for doctor
                            await axios.patch('/update', {
                              email: state.user.email,
                              appointmentId: appointment.id,
                              status: 'upcoming',
                            });

                            // Update appointment status for patient
                            await axios.patch('/update', {
                              email: appointment.patientEmail,
                              appointmentId: appointment.id,
                              status: 'upcoming',
                            });
                          } catch (error) {
                            console.log(error);
                          }
                        }}
                        btnText1={'Accept'}
                        btnTextColor1={'white'}
                        btnBgColor1={'#ff7900'}
                        btnDisplay2='flex'
                        handlePress2={async () => {
                          try {
                            // Update appointment status for doctor
                            await axios.patch('/update', {
                              email: state.user.email,
                              appointmentId: appointment.id,
                              status: 'canceled',
                            });

                            // Update appointment status for patient
                            await axios.patch('/update', {
                              email: appointment.patientEmail,
                              appointmentId: appointment.id,
                              status: 'canceled',
                            });
                          } catch (error) {
                            console.log(error);
                          }
                        }}
                        btnText2={'Decline'}
                        btnTextColor2={'white'}
                        btnBgColor2={'#ff7900'}
                      />
                    );
                  }
                  if (appointment.status === 'upcoming') {
                    return (
                      <AppointmentCard
                        Patient={appointment.patientName}
                        key={appointment.id}
                        color='#ff7900'
                        bgColor='#ffe2b3'
                        title={'Upcoming'}
                        btnDisplay1='flex'
                        handlePress1={async () => {
                          try {
                            setCallId(appointment.callId);

                            // Update appointment status
                            await axios.patch('/update', {
                              email: state.user.email,
                              appointmentId: appointment.id,
                              status: 'completed',
                            });
                            navigation.navigate('Call');
                          } catch (error) {
                            console.log(error);
                          }
                        }}
                        btnText1={'Attend Now'}
                        btnTextColor1={'white'}
                        btnBgColor1={'#ff7900'}
                      />
                    );
                  }
                  if (appointment.status === 'completed') {
                    return (
                      <AppointmentCard
                        Patient={appointment.patientName}
                        color='#0db00a'
                        key={appointment.id}
                        bgColor='#e2f8e3'
                        title={'Completed'}
                        btnDisplay1='flex'
                        btnText1={'View Details'}
                        btnTextColor1={'#ff7900'}
                        btnBorderWidth={2}
                        btnColor={'#ff7900'}
                      />
                    );
                  }
                  if (appointment.status === 'canceled') {
                    return (
                      <AppointmentCard
                        Patient={appointment.patientName}
                        color='red'
                        key={appointment.id}
                        bgColor='#ffeae5'
                        title={'Canceled'}
                      />
                    );
                  }
                })
            ) : (
              <Text large center>
                {' '}
                You have no appointments.{' '}
              </Text>
            )
          ) : (
            <>
              {/* Show loading indicator if the appointments are not ready. */}
              <ActivityIndicator
                size='large'
                color='#333'
                style={{ flex: 1 }}
              />
            </>
          )}
        </ScrollView>
      </View>

      <FooterTabs />
    </SafeAreaView>
  );
}
