import React, { Component } from 'react';
import { Button, TextInput, View, StyleSheet, Text } from 'react-native';
import styles from './style';
import DefaultStrings from '../../constants/DefaultString';
import Navkey from '../../constants/Navkey';

export default class SignupScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      FirstName: '',
      LastName: '',
      password: '',
      Confirmpassword: '',
    };
  }

  /**
   * On user signup
   */
  onSignup() {
    const { FirstName, LastName, password, Confirmpassword } = this.state;
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          value={this.state.FirstName}
          onChangeText={FirstName => this.setState({ FirstName })}
          placeholder={DefaultStrings.FIRSTNAME}
          style={styles.input}
        />
        <TextInput
          value={this.state.LasttName}
          onChangeText={LasttName => this.setState({ LastName })}
          placeholder={DefaultStrings.LASTNAME}
          style={styles.input}
        />
        <TextInput
          value={this.state.password}
          onChangeText={password => this.setSate({ password })}
          placeholder={DefaultStrings.PASSWORD}
          secureTextEntry={true}
          style={styles.input}
        />
        <TextInput
          value={this.state.Confirmpasswordpassword}
          onChangeText={ConfirmPassword =>
            this.setState({ ConfirmPasswordpassword })
          }
          placeholder={DefaultStrings.CONFIRM_PASSWORD}
          secureTextEntry={true}
          style={styles.input}
        />

        <View style={styles.buttton}>
          <Button
            title={DefaultStrings.SIGNUP_TITLE}
            color="#ef6c00"
            onPress={this.onSignup.bind(this)}
          />
        </View>
      </View>
    );
  }
}

