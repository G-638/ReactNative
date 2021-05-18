import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import styles from './style';
import DefaultStrings from '../../constants/DefaultString';

export default class ForgetScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>{DefaultStrings.TITLE}</Text>
        <Text style={styles.forgot}>{DefaultStrings.FORGET}</Text>
        <Text style={styles.text1}>
          {DefaultStrings.PASSWORD_RESET_LINK}{' '}
        </Text>
        <Text style={styles.text2}>{DefaultStrings.GUIDANCE}</Text>

        <TextInput style={styles.input} placeholder={DefaultStrings.EMAIL} />

        <TouchableOpacity style={styles.touch}>
          <Text style={styles.text3}>{DefaultStrings.REQUEST_RESET_LINK}</Text>
        </TouchableOpacity>

        <Text style={styles.text4}>{DefaultStrings.BACK}</Text>
        
        <TouchableOpacity>
          <Text style={styles.text5}>{DefaultStrings.LOGIN}</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
