import React, {Component} from 'react';
import {Button,TextInput, View, StyleSheet, Text, ScrollView, TouchableOpacity,Image, Alert} from 'react-native';
//import styles from './signupstyle';
//import { Icon } from 'react-native-elements';
import * as ImagePicker from 'react-native-image-picker';
import ModalDropdown from 'react-native-modal-dropdown';
import RNRestart from 'react-native-restart';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import { connect } from 'react-redux';
import * as UserActions from '../../redux/actions/save';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import Icon from 'react-native-vector-icons/FontAwesome5';
import { color } from 'react-native-reanimated';
import { user } from '../../../../collect/app/reducers/UserReducer';

class AddUser extends Component {
  constructor(props) {
    super(props);

    this.state = {
      // username: '',
      // dob: '',
      // language: '',
      // mobileNumber: '',
      // address:'',
      // fileUri:'',
      isShowCalender: false,    
      isUserName: false,
      isDob: false,
      isLanguage: false,
      isMobileNum: false,
      isAddress: false,
      saveData: {
        userName: '',
        dob: 'Date Of Birth',
        // language: '',
        mobileNumber: '',
        address:'',
        fileUri:'',
      }
    };
  }
  onChangeUsername = userName => {
    if (!userName) {
      this.setState({ isUserName: true });
    } else {
      this.setState({ isUserName: false });
    }
    this.setState({ 
      saveData:{...this.state.saveData,userName:userName }
    });
  };
  // onChangeDob = dob => {
  //   if (!dob) {
  //     this.setState({ isDob: true });
  //   } else {
  //     this.setState({ isDob: false });
  //   }
  //   this.setState({ dob });
  // };
  // onChangeLanguage = (language) => {
  //   if (!language) {
  //     this.setState({ isLanguage: true });
  //   } else {
  //     this.setState({ isLanguage: false });
  //   }
  //   this.setState({saveData:{ ...this.state.saveData, language:language }});
  // };
  onChangeMobile = mobileNumber => {
    
    const numberLength = mobileNumber.length.toString(); //here
    if ((!mobileNumber) || numberLength<10 || numberLength>10) {
      this.setState({ isMobileNum: true });
    } else {
      this.setState({ isMobileNum: false });
    }
    this.setState({ saveData:{...this.state.saveData, mobileNumber: mobileNumber },});
       
   
  };
  onChangeAddress = address => {
    if (!address) {
      this.setState({ isAddress: true });
    } else {
      this.setState({ isAddress: false });
    }
    this.setState({saveData:{...this.state.saveData, address:address },});
  };
  openCalender = () => {
    this.setState({
      isShowCalender: true,
    });
  };
  handleConfirm = date => {
    function convert(date){
      const date1 = new Date(date),
          mnth = ("0" + (date1.getMonth() + 1)).slice(-2),
          day = ("0" + date1.getDate()).slice(-2);
        return [ day, mnth, date1.getFullYear()].join("-");
    }
    this.setState({
      saveData:{...this.state.saveData, dob: convert(date)},
    });
    if(!dob){
      this.setState({ isDob: true });
    }
    else{
      this.setState({ isDob: false });
    }
    console.log(this.state.saveData.dob.toString());
  };
  onCancel = () => {
    this.setState({
      isShowCalender: false,
    });
  };

  chooseImage = () => {
    let options = {
        title: 'Select Avatar', 
        cameraType: 'front',
        mediaType: 'photo' ,
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
          saveData:{ ...this.state.saveData, fileUri: response.uri}
        }) //update state to update Image
    }
    });
    }
    reset(){
      // console.log('state ',this.props.username)
      RNRestart.Restart();
      // this.props.navigation.navigate('adduser');
    }
    save(){
      if( this.state.saveData.fileUri && this.state.saveData.userName && this.state.saveData.dob && this.state.saveData.mobileNumber && this.state.saveData.address){
        // this.props.setUserDetails();
      const userObj={
        fileUri : this.state.saveData.fileUri,
        userName: this.state.saveData.userName,
        dob: this.state.saveData.dob,
        // language: this.state.saveData.language,
        mobileNumber: this.state.saveData.mobileNumber,
        address: this.state.saveData.address,
      }
          console.log(this.state.saveData); 
          console.log(userObj); 
          if(this.props.setUserDetails(userObj))
          {
            this.props.navigation.navigate('dashboard');
          }
          else{
            console.log('Error at navigation');
          }
      }
        //Alert.alert("Successfullly Login");
      else{
        Alert.alert("Enter valid fields");
      }
    }

  render() {
   
    return (
      <View style={styles.container}>
        <ScrollView>
        <View style={{
              alignSelf: 'center',
              marginTop: 35,
              }}>
           <Image
              style={{ height: 100, width: 100, borderRadius: 50, }}
              source={ this.state.saveData.fileUri ? { uri: this.state.saveData.fileUri} : // if clicked a new img
              require('./img/profile.png')} //else show random
           />
           <TouchableOpacity style={styles.addPictureIcon} onPress={
              () => {this.chooseImage()}
              }>
              <Icon name="camera" size={20} />
            </TouchableOpacity>
          </View>

        <TextInput
          value={this.state.saveData.userName}
          onChangeText={ this.onChangeUsername}
          placeholder="Username"
          placeholderTextColor="rgb(110,116,124)"
          textInputStyle={{fontSize:12}}
          style={[styles.input,{marginTop:30},this.state.isUserName && { borderColor: 'rgb(250,62,62)' },]}
        />
        {this.state.isUserName && (<Text style={styles.fieldError}>Enter valid username</Text>)}
         <TouchableOpacity style={[styles.touch,this.state.isDob && { borderColor: 'rgb(250,62,62)' },]} onPress={this.openCalender}>
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
        {this.state.idDob && (<Text style={styles.fieldError}>Enter valid DOB</Text>)}

      {/* <ModalDropdown 
          options={['Tamil', 'English']} 
          style={[styles.input,this.state.isLanguage && { borderColor: 'rgb(250,62,62)' },]}
          defaultValue={'Choose Language'}
          onSelect={this.onChangeLanguage}
          dropdownStyle={{width:280,height:80, borderColor:'gray',borderWidth:2}}
          dropdownTextStyle={{fontSize:14,fontWeight:'600',fontFamily:'NunitoSans'}}
          textStyle={{fontSize:14,fontWeight:'500',fontFamily:'NunitoSans',color:'rgb(110,116,124)'}}
          />
          {this.state.isLanguage && (<Text style={styles.fieldError}>Enter valid Language</Text>)} */}
        <TextInput
          value={this.state.saveData.mobileNumber}
          onChangeText={this.onChangeMobile}
          placeholder="Mobile No."
          placeholderTextColor="rgb(110,116,124)"
          keyboardType="numeric"
          style={[styles.input,this.state.isMobileNum && { borderColor: 'rgb(250,62,62)' },]}
        />
        {this.state.isMobileNum && (<Text style={styles.fieldError}>Enter valid mobile number</Text>)}
        <TextInput
          value={this.state.saveData.address}
          onChangeText={this.onChangeAddress}
          placeholder="Address"
          placeholderTextColor="rgb(110,116,124)"
          multiline
          style={[styles.input,this.state.isAddress && { borderColor: 'rgb(250,62,62)' },]}
        />
        {this.state.isAddress && (<Text style={styles.fieldError}>Enter valid address</Text>)}
        <View style={styles.buttons}>
          <View>
          <TouchableOpacity style={{borderRadius:4,width:120,height:35,marginLeft:5,marginTop:10,backgroundColor:'rgb(251,112,0)'}} onPress={()=> {this.reset()}}>
           <Text style={{marginTop:5,marginLeft:40,fontFamily:'NunitoSans',fontSize:16,fontWeight:'600',color:'white'}}>Reset</Text>
           </TouchableOpacity>
          </View>
          <View>
          <TouchableOpacity style={{borderRadius:4,width:120,height:35,marginLeft:50,marginTop:10,backgroundColor:'rgb(251,112,0)'}} onPress={()=> {this.save()}}>
           <Text style={{marginTop:5,marginLeft:40,fontFamily:'NunitoSans',fontSize:16,fontWeight:'600',color:'white'}}>Save</Text>
           </TouchableOpacity>
          </View>
        </View>

        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection:'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },

  input: {
    marginTop:2,
    width: 300,
    height: 40,
    padding: 10,
    borderWidth: 2,
    borderColor: 'rgb(223,227,235)',
    marginBottom: 10,
    borderRadius:4,
    backgroundColor:'white',
  },
  icon: {
    height: 50,
    width: 50,
  },
  buttons:{
    flexDirection:'row',
  },
  saveButtton: {
   
    backgroundColor:'rgb(251,112,0)',
    
  },
  addPictureIcon:{
    height: 30,
    width: 30,
    backgroundColor: 'white',
    borderRadius: 50,
    borderColor:'red',
    position: 'absolute',
    left: 65,
    top: 75,
    justifyContent: 'center',
    alignItems: 'center',
    alignItems: 'center',
  },
  textButton:{
    fontSize:16,
    fontFamily: 'NunitoSans',
    fontWeight:'600',

  },
  fieldError:{
    fontSize:12,
    fontFamily: 'NunitoSans',
    fontWeight:'600',
    color:'red'
  },
  alignText: {
    marginBottom: 12,
    fontSize: 17,
    color: '#00b0ff',
  },
  touch:{
    marginTop:hp(2),
    marginBottom:hp(2),
    height: 40,
    width: 300,
    borderWidth: 2,
    borderColor: 'rgb(223,227,235)',
    backgroundColor:'white',
  },
  text2:{
    color:'rgb(110,116,124)',
    fontSize:13,
    marginLeft:5,
    marginTop:7
  }
});
export const mapStateToProps = (state) => ({
  userName:state.user.userName
})

export const mapDispatchToProps = (dispatch) => ({
  setUserDetails: (userObj) => dispatch(UserActions.setUserDetails(userObj))
})


export default connect(mapStateToProps, mapDispatchToProps)(AddUser);