import React, { Component } from 'react';
import { View, ActivityIndicator, StatusBar,TouchableOpacity,Text } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Navkey from '../../constants/Navkey';
import { connect } from 'react-redux';
// import { TouchableOpacity } from 'react-native-gesture-handler';
class AuthLoadingScreen extends Component {
  constructor(props) {
    super(props);
    this._loadData();
  }
  // componentDidMount(){
  //   this._loadData;
  // }
  render() {
    return (
      <View>
        {/* <TouchableOpacity onPress={() => {this._loadData()}}>
          <Text>Auth Loading</Text>
        </TouchableOpacity> */}
        <ActivityIndicator />
        <StatusBar barStyle="dark-content" />
      </View>
    );
  }
  _loadData() {
    console.log(this.props.gettoken);
    this.props.navigation.navigate( Navkey.DASHBOARD);
  }
}

export const mapStateToProps = (state) => ({
  gettoken: state.user.token,
})

export default connect( mapStateToProps, null)(AuthLoadingScreen);