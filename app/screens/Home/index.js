import React, { Component } from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import Navkey from '../../constants/Navkey';
import styles from './style.js';
import DefaultStrings from '../../constants/DefaultString';

export default class HomeScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.container1}>
          <Text style={styles.text}>{DefaultStrings.TITLE}</Text>
          <Image style={styles.img} source={require('../../assets/img/calendarAmico.png')} /> 
          <Text style={styles.text1}>{DefaultStrings.HEADING}</Text>
          <Text style={styles.text2}>{DefaultStrings.CONTENT}</Text>
          <View style={styles.row} >
            <View style={styles.minirectangle}></View>
            <View style={styles.rectangle}></View>
            <View style={styles.minirectangle}></View>
          </View>
        </View>

        <View style={styles.container2}>

          <View>
            <TouchableOpacity style={styles.login} onPress={() => { this.props.navigation.navigate(Navkey.LOGIN) }}>
              <Text style={styles.loginText}>{DefaultStrings.LOGIN}</Text>
            </TouchableOpacity>
          </View>

          <View>
            <TouchableOpacity style={styles.signup} onPress={() => { this.props.navigation.navigate(Navkey.SIGNUP) }}>
              <Text style={styles.signupText}>{DefaultStrings.CREATE_ACCOUNT}</Text><Image style={styles.signupImg} source={require("../../assets/img/launch24Px.png")} />
            </TouchableOpacity>
          </View>

        </View>
      </View>
    );
  }
}

