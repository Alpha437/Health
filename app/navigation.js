import React, { useContext } from 'react';
import { AuthContext } from './context/auth';
import AuthNavigator from './components/nav/AuthNavigator';
import { NavigationContainer } from '@react-navigation/native';
import { AuthProvider } from './context/auth';
import AdminNavigator from './components/nav/AdminNavigator';
import AppNavigator from './components/nav/AppNavigator';

export default function RootNavigation() {
  const Navigator = () => {
    const [state, setState] = useContext(AuthContext);

    const authenticated = state && state.token !== '' && state.user !== null;

    if (!authenticated) return <AuthNavigator />;

    if (state.user.role === 'doctor') return <AdminNavigator />;

    return <AppNavigator />;
  };

  return (
    <AuthProvider>
      <NavigationContainer>
        <AppNavigator />
      </NavigationContainer>
    </AuthProvider>
  );
}
