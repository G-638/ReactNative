import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { Component } from 'react';
import { Text, View,Image, Button,StyleSheet,BackHandler,ToastAndroid,Alert,TouchableOpacity} from 'react-native';

import styles from './style.js';

class Dashboard extends Component{
    componentDidMount() {
        BackHandler.addEventListener('hardwareBackPress', this.handleBackButton);
    }

    componentWillUnmount() {
        BackHandler.removeEventListener('hardwareBackPress', this.handleBackButton);
    }

    handleBackButton() {
        BackHandler.exitApp();
        return true;
    }
    _logout = async()=> {
        await AsyncStorage.clear();
        this.props.navigation.navigate('Home');
    }

    render(){
        return (
            <View style={styles.container}>
                <Text style={styles.title}>Welcome to Calib CRM</Text>
                <Text style={styles.subTitle}>Login successfully</Text>
                <TouchableOpacity style={styles.logout} onPress={this._logout}>
                    <Text style={styles.logoutTextStyle}>Logout</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

export default Dashboard;

