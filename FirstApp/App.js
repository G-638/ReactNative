/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { Component } from 'react';
import { View, ActivityIndicator, StatusBar } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './app/components/Home';
import Dashboard from './app/components/Dashboard';
import LoginScreen from './app/components/Login';

const Stack = createStackNavigator();

export default class App extends Component {

  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="AuthLoading" component={AuthLoadingScreen} options={{ headerShown: false }} />
          <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
          <Stack.Screen name="login" component={LoginScreen} options={{ headerShown: false }} />
          <Stack.Screen name="dashboard" component={Dashboard} options={{ headerShown: false, headerLeft: null }} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  };
}

class AuthLoadingScreen extends Component {
  constructor(props) {
    super(props);
    this._loadData();
  }
  render() {
    return (
      <View>
        <ActivityIndicator />
        <StatusBar barStyle="dark-content" />
      </View>
    );
  }
  _loadData = async () => {
    const isLoggedIn = await AsyncStorage.getItem('isLoggedIn');
    this.props.navigation.navigate(isLoggedIn !== '1' ? 'Home' : 'dashboard');
  }
}
