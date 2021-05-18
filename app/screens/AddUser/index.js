import React, { Component } from 'react';
import { TextInput, View, Text, ScrollView, TouchableOpacity, Image, Alert } from 'react-native';
import styles from './style';
import Navkey from '../../constants/Navkey';
import DefaultStrings from '../../constants/DefaultString';
import * as ImagePicker from 'react-native-image-picker';
import RNRestart from 'react-native-restart';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import { connect } from 'react-redux';
import * as UserActions from '../../redux/actions/save';
import Icon from 'react-native-vector-icons/FontAwesome5';

class AddUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isShowCalender: false,
      isUserName: false,
      isDob: false,
      isLanguage: false,
      isMobileNum: false,
      isAddress: false,
      saveData: {
        userName: '',
        dob: 'Date Of Birth',
        mobileNumber: '',
        address: '',
        fileUri: '',
      }
    };
  }

  /**
   * check and updates the state object userName
   * @param {string} userName
   */
  onChangeUsername = userName => {
    if (!userName) {
      this.setState({ isUserName: true });
    } else {
      this.setState({ isUserName: false });
    }
    this.setState({
      saveData: { ...this.state.saveData, userName: userName }
    });
  };

  /**
   * check and updates the state object mobileNumber
   * @param {number} mobileNumber
   */
  onChangeMobile = mobileNumber => {
    const numberLength = mobileNumber.length.toString();
    if ((!mobileNumber) || numberLength < 10 || numberLength > 10) {
      this.setState({ isMobileNum: true });
    } else {
      this.setState({ isMobileNum: false });
    }
    this.setState({ saveData: { ...this.state.saveData, mobileNumber: mobileNumber }, });


  };

  /**
   * check and updates the state object address
   * @param {string} address
   */
  onChangeAddress = address => {
    if (!address) {
      this.setState({ isAddress: true });
    } else {
      this.setState({ isAddress: false });
    }
    this.setState({ saveData: { ...this.state.saveData, address: address }, });
  };

  /**
   * check and set visible the calendar object to user
   */
  openCalender = () => {
    this.setState({
      isShowCalender: true,
    });
  };

  /**
   * check and updates the state object DateOfBirth
   * @param {string} dob
   */
  handleConfirm = date => {
    function convert(date) {
      const date1 = new Date(date),
        mnth = ("0" + (date1.getMonth() + 1)).slice(-2),
        day = ("0" + date1.getDate()).slice(-2);
      return [day, mnth, date1.getFullYear()].join("-");
    }
    this.setState({
      saveData: { ...this.state.saveData, dob: convert(date) },
    });
    if (!dob) {
      this.setState({ isDob: true });
    }
    else {
      this.setState({ isDob: false });
    }
    console.log(this.state.saveData.dob.toString());
  };

  /**
   * On user cancel the calendar
   */
  onCancel = () => {
    this.setState({
      isShowCalender: false,
    });
  };

  /**
   * check and updates the state object fileUri
   * @param {string} fileUri
   */
  chooseImage = () => {
    let options = {
      title: 'Select Avatar',
      cameraType: 'front',
      mediaType: 'photo',
      storageOptions: {
        skipBackup: true,
        path: 'img',
      },
    };

    ImagePicker.launchImageLibrary(options, (response) => {
      console.log('Response = ', response.uri);
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
        alert(response.customButton);
      } else {
        this.setState({
          saveData: { ...this.state.saveData, fileUri: response.uri } //update state to update Image
        })
      }
    });
  }

  /**
   * On user reset a fields
   */
  reset() {
    RNRestart.Restart();
  }

  /**
   * On user save data to store
   */
  save() {
    if (this.state.saveData.fileUri && this.state.saveData.userName && this.state.saveData.dob && this.state.saveData.mobileNumber && this.state.saveData.address) {
      const userObj = {
        fileUri: this.state.saveData.fileUri,
        userName: this.state.saveData.userName,
        dob: this.state.saveData.dob,
        mobileNumber: this.state.saveData.mobileNumber,
        address: this.state.saveData.address,
      }
      if (this.props.setUserDetails(userObj)) { // save data to store
        this.props.navigation.navigate(Navkey.DASHBOARD);
      }
      else {
        console.log('Error at navigation');
      }
    }
    else {
      Alert.alert("Enter valid fields");
    }
  }

  render() {

    return (
      <View style={styles.container}>
        <ScrollView>
          <View style={styles.imgContainer}>
            <Image
              style={styles.img}
              source={this.state.saveData.fileUri ? { uri: this.state.saveData.fileUri } : // if clicked a new img
                require('../../assets/img/profile.png')} //else show random
            />
            <TouchableOpacity style={styles.addPictureIcon} onPress={() => { this.chooseImage() }}>
              <Icon name="camera" size={20} />
            </TouchableOpacity>
          </View>

          <TextInput
            value={this.state.saveData.userName}
            onChangeText={this.onChangeUsername}
            placeholder={DefaultStrings.USERNAME}
            placeholderTextColor="rgb(110,116,124)"
            textInputStyle={{ fontSize: 12 }}
            style={[styles.input, { marginTop: 30 }, this.state.isUserName && styles.border,]}
          />
          {this.state.isUserName && (<Text style={styles.fieldError}>{DefaultStrings.VALID_USERNAME}</Text>)}

          <TouchableOpacity style={[styles.touch, this.state.isDob && styles.border,]} onPress={this.openCalender}>
            <Text style={styles.text2}>{this.state.saveData.dob.toString()}</Text>
          </TouchableOpacity>
          <DateTimePickerModal
            isVisible={this.state.isShowCalender}
            mode="date"
            onConfirm={date => {
              this.handleConfirm(date);
            }}
            onCancel={this.onCancel}
          />
          {this.state.idDob && (<Text style={styles.fieldError}>{DefaultStrings.VALID_PASSWORD}</Text>)}

          <TextInput
            value={this.state.saveData.mobileNumber}
            onChangeText={this.onChangeMobile}
            placeholder={DefaultStrings.MOBILE_NUMBER}
            placeholderTextColor="rgb(110,116,124)"
            keyboardType="numeric"
            style={[styles.input, this.state.isMobileNum && styles.border,]}
          />
          {this.state.isMobileNum && (<Text style={styles.fieldError}>{DefaultStrings.VALID_MOBILE_NO}</Text>)}

          <TextInput
            value={this.state.saveData.address}
            onChangeText={this.onChangeAddress}
            placeholder={DefaultStrings.ADDRESS}
            placeholderTextColor="rgb(110,116,124)"
            multiline
            style={[styles.input, this.state.isAddress && styles.border,]}
          />
          {this.state.isAddress && (<Text style={styles.fieldError}>{DefaultStrings.VALID_ADDRESS}</Text>)}

          <View style={styles.buttons}>
            <View>
              <TouchableOpacity style={styles.resetButton} onPress={() => { this.reset() }}>
                <Text style={styles.saveText}>{DefaultStrings.RESET}</Text>
              </TouchableOpacity>
            </View>

            <View>
              <TouchableOpacity style={styles.saveButton} onPress={() => { this.save() }}>
                <Text style={styles.saveText1}>{DefaultStrings.SAVE}</Text>
              </TouchableOpacity>
            </View>
          </View>

        </ScrollView>
      </View>
    );
  }
}



export const mapStateToProps = (state) => ({
  userName: state.user.userName
})

export const mapDispatchToProps = (dispatch) => ({
  setUserDetails: (userObj) => dispatch(UserActions.setUserDetails(userObj))
})


export default connect(mapStateToProps, mapDispatchToProps)(AddUser);