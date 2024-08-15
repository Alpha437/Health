import React, { useState, useEffect, createContext } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { API } from '../config';
import axios from 'axios';

// Gives the context
const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [state, setState] = useState({
    user: null,
    token: '',
  });

  // Configure axios
  axios.defaults.baseURL = API;

  // Loads user and token automatically whenever the app is ready
  useEffect(() => {
    const loadFromAsyncStorage = async () => {
      // Get data from async storage
      let data = await AsyncStorage.getItem('@auth');

      // Convert JSON format to javascript object
      const as = JSON.parse(data);

      // Update the state
      setState({ ...state, user: as.user, token: as.user.accessToken });
    };

    // Execute function
    loadFromAsyncStorage();
  }, []);

  // Return the component
  return (
    <AuthContext.Provider value={[state, setState]}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
