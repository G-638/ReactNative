import React, { Component } from 'react';
import {
  Alert,
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  LogBox,
} from 'react-native';
import { FilledTextField } from 'react-native-material-textfield';
import AsyncStorage from '@react-native-async-storage/async-storage';
import FontAwesome from 'react-native-vector-icons/FontAwesome5';

import styles from './style.js';
import { postApi } from './services/api';
import { login } from './services/user';
const userInfo = { username: 'eve.holt@reqres.in', password: 'cityslicka' };

export default class LoginScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: '',
      showPassword: true,
      isEmail: false,
      isPassword: false,
      hasFocus: false,
      hasFocus1: false,
      hidePass: true,
    };
  }
  componentDidMount() {
    LogBox.ignoreLogs(['Animated: `useNativeDriver`']);
  }
  setHidePass(hidePass) {
    this.setState({ hidePass });
  }
  setFocus(hasFocus) {
    this.setState({ hasFocus });
  }
  setFocus1(hasFocus1) {
    this.setState({ hasFocus1 });
  }

  onChangeEmail = username => {
    if (username !== userInfo.username) {
      this.setState({ isEmail: true });
    } else {
      this.setState({ isEmail: false });
    }
    this.setState({ username });
  };
  onChangePassword = password => {
    if (password !== userInfo.password) {
      this.setState({ isPassword: true });
    } else {
      this.setState({ isPassword: false });
    }
    this.setState({ password });
  };

  // _login = async () => {

  //   if (userInfo.username === this.state.username || userInfo.password === this.state.password) {

  //     await AsyncStorage.setItem('isLoggedIn', '1');
  //     this.props.navigation.navigate('dashboard');
  //   }
  //   else {
  //     Alert.alert('email and password is incorrect');
  //   }
  // }

  _login = async () => {
    let params = {
      email: this.state.username,
      password: this.state.password,
    };
    let data = await login(params);
    console.log(data);
    Alert.alert('login successfully');
    await AsyncStorage.setItem('isLoggedIn', '1');
    this.props.navigation.navigate('dashboard');
  };

  render() {

    return (
      <ScrollView>
        <View style={styles.container}>

          <Text style={styles.title}>Calib CRM</Text>

          <TouchableOpacity style={styles.googlelogin} onPress={() => { this.props.navigation.login; }}>
            <View style={{ backgroundColor: 'white', width: 46, height: 44 }}>
              <Image source={require('./img/google-logo-9824.png')} style={styles.ImageIconStyle} resizeMode='stretch' />
            </View>
            <Text style={styles.googleText}>Continue With Google</Text>
          </TouchableOpacity>

          <View
            style={styles.splitScreen}>

            <View style={styles.lineStyle} />
            <View>
              <Text style={styles.textStyle}>OR</Text>
            </View>
            <View style={styles.lineStyle} />
          </View>

          <FilledTextField
            label='Email'
            value={this.state.username}
            onChangeText={this.onChangeEmail}
            onFocus={this.setFocus.bind(this, true)}
            tintColor={this.state.isEmail ? 'rgb(250,62,62)' : 'rgb(110,116,124)'}
            tintSize={12}
            lineWidth={0}
            activeLineWidth={0}
            baseColor={'rgb(110,116,124)'}
            textColor={'rgb(32,42,54)'}
            inputContainerStyle={[
              styles.input, this.state.hasFocus ? styles.focusedTextInput : styles.input,
              this.state.isEmail && { borderColor: 'rgb(250,62,62)' },
            ]}
          />
          {this.state.isEmail && (<Text style={styles.emailError}>Enter valid emai id</Text>)}

          <TouchableOpacity style={{ flexDirection: 'row' }} >
            <FilledTextField
              value={this.state.password}
              onChangeText={this.onChangePassword}
              label='Password'
              secureTextEntry={this.state.hidePass ? true : false}
              onFocus={this.setFocus1.bind(this, true)}
              tintColor={this.state.isPassword ? 'rgb(250,62,62)' : 'rgb(110,116,124)'}
              tintSize={12}
              lineWidth={0}
              activeLineWidth={0}
              baseColor={'rgb(110,116,124)'}
              textColor={'rgb(32,42,54)'}
              inputContainerStyle={{ position: 'absolute' }, [
                styles.input, this.state.hasFocus1 ? styles.focusedTextInput : styles.input,
                this.state.isPassword && { borderColor: 'rgb(250,62,62)' },
              ]}
            />
            <FontAwesome
              name={this.state.hidePass ? 'eye' : 'eye-slash'}
              size={18}
              color="gray"
              style={{ position: 'absolute', marginTop: 25, marginLeft: 285, }}
              onPress={() => this.setHidePass(!this.state.hidePass)}
            />
          </TouchableOpacity>
          {this.state.isPassword && (<Text style={styles.passwordError}>Enter valid password </Text>)}

          <Text style={styles.forgetPasswordStyle}>Forget Password?</Text>

          <TouchableOpacity style={[styles.login, this.state.username && this.state.password && { backgroundColor: 'rgb(251,112,0)' },]} onPress={() => {this._login();}}>
            <Text style={[styles.logintext, this.state.username && this.state.password && { color: 'white' },]}>Log In</Text>
          </TouchableOpacity>

          <View style={styles.endContainer}>
            <Text style={styles.accountStyle}>Don’t have an account? </Text>
            <Text style={styles.signUpStyle}> sign up </Text>
            <Image style={{ width: 16, height: 16, marginTop: 5 }} source={require('./img/launch24Px.png')} />
          </View>
        </View>
      </ScrollView>
    );
  }
}

