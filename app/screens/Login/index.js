import React, { Component } from 'react';
import {
  Alert,
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  LogBox,
} from 'react-native';
import { FilledTextField } from 'react-native-material-textfield';
import AsyncStorage from '@react-native-async-storage/async-storage';
import FontAwesome from 'react-native-vector-icons/FontAwesome5';
import styles from './style.js';
import DefaultStrings from '../../constants/DefaultString';
import Navkey from '../../constants/Navkey';
import { connect } from 'react-redux';
import * as UserActions from '../../redux/actions/save';

class LoginScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userName: '',
      password: '',
      showPassword: true,
      isEmail: false,
      isPassword: false,
      hasFocus: false,
      hasFocus1: false,
      hidePass: true,
    };
  }

  /**
   *  check the remove the log value
   */
  componentDidMount() {
    LogBox.ignoreLogs(['Animated: `useNativeDriver`']);
  }

  /**
   *  check and update the visible password value to user.
   */
  setHidePass(hidePass) {
    this.setState({ hidePass });
  }

  /**
   *  check the user click the userName field
   */
  setFocus(hasFocus) {
    this.setState({ hasFocus });
  }

  /**
   *  check the user click the password field
   */
  setFocus1(hasFocus1) {
    this.setState({ hasFocus1 });
  }

  /**
   * check and updates the state object userName
   * @param {string} userName
   */
  onChangeEmail = userName => {
    if (!userName) {
      this.setState({ isEmail: true });
    } else {
      this.setState({ isEmail: false });
    }
    this.setState({ userName });
  };

   /**
   * check and updates the state object password
   * @param {string} password
   */
  onChangePassword = password => {
    if (!password) {
      this.setState({ isPassword: true });
    } else {
      this.setState({ isPassword: false });
    }
    this.setState({ password });
  };

  /**
   * On user login
   */
  _login = () => {
    const params = {
      email: this.state.userName,
      password: this.state.password,
    };
    this.props.setUserLogin(params, (failureFunc) => {
        console.log('failureFunc', failureFunc);
        Alert.alert(failureFunc);
      }, 
      (successFunc) => {
        console.log('successFunc', successFunc);
        AsyncStorage.setItem('isLoggedIn', successFunc); // Set authentication to logined user
        this.props.navigation.navigate(Navkey.DASHBOARD);
      });
  };

  render() {

    return (
      <ScrollView>
        <View style={styles.container}>

          <Text style={styles.title}>{DefaultStrings.TITLE}</Text>

          <TouchableOpacity style={styles.googlelogin} onPress={() => { this.props.navigation.login; }}>
            <View style={styles.signInGoogle}>
              <Image source={require('../../assets/img/google-logo-9824.png')} style={styles.ImageIconStyle} resizeMode='stretch' />
            </View>
            <Text style={styles.googleText}>{DefaultStrings.CONTINUE_GOOGLE}</Text>
          </TouchableOpacity>

          <View
            style={styles.splitScreen}>

            <View style={styles.lineStyle} />
            <View>
              <Text style={styles.textStyle}>{DefaultStrings.OR}</Text>
            </View>
            <View style={styles.lineStyle} />
          </View>

          <FilledTextField
            label={DefaultStrings.EMAIL}
            value={this.state.userName}
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
              this.state.isEmail && styles.border,
            ]}
          />
          {this.state.isEmail && (<Text style={styles.emailError}>{DefaultStrings.VALID_EMAIL}</Text>)}

          <TouchableOpacity style={{ flexDirection: 'row' }} >
            <FilledTextField
              value={this.state.password}
              onChangeText={this.onChangePassword}
              label={DefaultStrings.PASSWORD}
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
                this.state.isPassword && styles.border,
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
          {this.state.isPassword && (<Text style={styles.passwordError}>{DefaultStrings.VALID_PASSWORD}</Text>)}

          <TouchableOpacity on onPress={() => { this.props.navigation.navigate(Navkey.FORGET) }}>
            <Text style={styles.forgetPasswordStyle}>{DefaultStrings.FORGET}</Text>
          </TouchableOpacity>

          <TouchableOpacity style={[styles.login, this.state.username && this.state.password && styles.loginBg,]} onPress={() => { this._login(); }}>
            <Text style={[styles.logintext, this.state.username && this.state.password && styles.loginTextBg]}>{DefaultStrings.LOGIN}</Text>
          </TouchableOpacity>

          <View style={styles.endContainer}>
            <Text style={styles.accountStyle}>{DefaultStrings.DONT_HAVE_ACCOUNT}</Text>
            <TouchableOpacity onPress={() => { this.props.navigation.navigate(Navkey.SIGNUP) }}>
              <Text style={styles.signUpStyle}> {DefaultStrings.SIGNUP} </Text>
            </TouchableOpacity>
            <Image style={styles.signupImg} source={require('../../assets/img/launch24Px.png')} />
          </View>
        </View>
      </ScrollView>
    );
  }
}



export const mapDispatchToProps = (dispatch) => ({
  setUserLogin: (params, failureFunc, successFunc) => dispatch(UserActions.setUserLogin(params, failureFunc, successFunc)),
})


export default connect( null, mapDispatchToProps)(LoginScreen);