import React, { Component } from 'react';
import { View, ActivityIndicator, StatusBar } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Navkey from '../../constants/Navkey';

export default class AuthLoadingScreen extends Component {
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
    this.props.navigation.navigate(isLoggedIn !== '1' ? Navkey.HOME : Navkey.DASHBOARD);
  }
}