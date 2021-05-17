import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { Component } from 'react';
import { Text, View,Image, Button,StyleSheet,BackHandler,ToastAndroid,Alert,TouchableOpacity} from 'react-native';
import styles from './style.js';
import { Avatar, ListItem } from 'react-native-elements';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
  } from 'react-native-responsive-screen';
import { FlatList } from 'react-native-gesture-handler';
import { ScrollView } from 'react-native-gesture-handler';

class Dashboard extends Component{
    // componentDidMount() {
    //     BackHandler.addEventListener('hardwareBackPress', this.handleBackButton);
    // }

    // componentWillUnmount() {
    //     BackHandler.removeEventListener('hardwareBackPress', this.handleBackButton);
    // }

    // handleBackButton() {
    //     BackHandler.exitApp();
    //     return true;
    // }
    _logout = async()=> {
        await AsyncStorage.clear();
        this.props.navigation.navigate('Home');
    }

    render(){
        return (
            
            <View style={styles.container} >
                <View>
                <TouchableOpacity style={styles.logout} onPress={this._logout}>
                <Image source={require('./img/poweroff.png')} style={styles.imgStyle} resizeMode='stretch' />
                </TouchableOpacity>
                <Text style={styles.title}>Calib CRM</Text>
                <Text style={styles.subTitle}>Choose a workspace</Text>
                </View>
                {/* <ListItem>
                    <Avatar
                        rounded
                        source={require('./img/addimg2.png')}
                    />
                    <ListItem.Content>
                        <ListItem.Title>Sathish</ListItem.Title>
                        <ListItem.SubTitle>developers </ListItem.SubTitle>
                    </ListItem.Content>
                    
                    </ListItem>    */}

                <TouchableOpacity
                    activeOpacity={0.7}
                    onPress={() => {this.props.navigation.navigate('adduser')}}
                    style={styles.touchableOpacityStyle}>
                    <Image source={require('./img/addimg1.png')} style={styles.floatingButtonStyle} />
                </TouchableOpacity>
            </View>
        );
    }
}

export default Dashboard;

