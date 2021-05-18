import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { Component } from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import styles from './style.js';
import Navkey from '../../constants/Navkey';
import DefaultStrings from '../../constants/DefaultString';
import { Avatar, ListItem } from 'react-native-elements';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { FlatList } from 'react-native-gesture-handler';

class Dashboard extends Component {

    /**
   * On user logout
   */
    _logout = async () => {
        await AsyncStorage.clear();
        this.props.navigation.navigate(Navkey.HOME);
    }

    render() {
        return (

            <View style={styles.container} >
                <View>
                    <TouchableOpacity style={styles.logout} onPress={this._logout}>
                        <Image source={require('../../assets/img/poweroff.png')} style={styles.imgStyle} resizeMode='stretch' />
                    </TouchableOpacity>
                    <Text style={styles.title}>{DefaultStrings.TITLE}</Text>
                    <Text style={styles.subTitle}>{DefaultStrings.SUB_TITLE}</Text>
                </View>

                <TouchableOpacity
                    activeOpacity={0.7}
                    onPress={() => { this.props.navigation.navigate(Navkey.ADDUSER) }}
                    style={styles.touchableOpacityStyle}>
                    <Image source={require('../../assets/img/addimg2.png')} style={styles.floatingButtonStyle} />
                </TouchableOpacity>
            </View>
        );
    }
}

export default Dashboard;

