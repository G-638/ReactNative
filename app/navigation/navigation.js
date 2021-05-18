import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from '../screens/Home';
import Dashboard from '../screens/Dashboard';
import LoginScreen from '../screens/Login';
import ForgetScreen from '../screens/forget';
import SignupScreen from '../screens/signup';
import AddUser from '../screens/AddUser';
import AuthLoadingScreen from '../screens/AuthLoading/authLoading';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from '../redux/store/configStore';
import Navkey from '../constants/Navkey';

const Stack = createStackNavigator();

export default class Navigation extends Component {
  render() {
    return (
      <NavigationContainer>
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <Stack.Navigator>
              <Stack.Screen
                name={Navkey.AUTH_LOADING}
                component={AuthLoadingScreen}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name={Navkey.HOME}
                component={HomeScreen}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name={Navkey.LOGIN}
                component={LoginScreen}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name={Navkey.DASHBOARD}
                component={Dashboard}
                options={{ headerShown: false, headerLeft: null }}
              />
              <Stack.Screen
                name={Navkey.FORGET}
                component={ForgetScreen}
                options={{ headerShown: false, headerLeft: null }}
              />
              <Stack.Screen
                name={Navkey.SIGNUP}
                component={SignupScreen}
                options={{ headerShown: false, headerLeft: null }}
              />
              <Stack.Screen
                name={Navkey.ADDUSER}
                component={AddUser}
                options={{ headerShown: false, headerLeft: null }}
              />
            </Stack.Navigator>
          </PersistGate>
        </Provider>
      </NavigationContainer>
    );
  }
}
