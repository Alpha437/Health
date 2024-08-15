import React, { useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { AuthContext, AuthProvider } from './context/auth';
import AppNavigator from './components/nav/AppNavigator';
import AdminNavigator from './components/nav/AdminNavigator';
import AuthNavigator from './components/nav/AuthNavigator';

function RootNavigator() {
  const [state, setState] = useContext(AuthContext);

  const authenticated =
    state && state.user !== null && state.token !== '' && state.token !== null;

  if (!authenticated) {
    return <AuthNavigator />;
  }

  if (!state.user.active) {
    return <AuthNavigator />;
  }

  if (state.user.role === 'doctor') {
    return <AdminNavigator />;
  }

  return <AppNavigator />;
}

function App() {
  return (
    <AuthProvider>
      <NavigationContainer>
        <RootNavigator />
      </NavigationContainer>
    </AuthProvider>
  );
}

export default App;
