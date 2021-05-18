import { StyleSheet } from 'react-native';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
  } from 'react-native-responsive-screen';

export default StyleSheet.create({
    container: {
      flex: 1,
      flexDirection:'column',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'white',
    },
    imgContainer:{
      alignSelf: 'center',
      marginTop: 35,
    },
    img:{
      height: 100, 
      width: 100, 
      borderRadius: 50, 
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
    saveButton: {
      borderRadius:4, 
      width:120, 
      height:35, 
      marginLeft:50, 
      marginTop:10, 
      backgroundColor:'rgb(251,112,0)'
    },
    border:{
      borderColor: 'rgb(250,62,62)'
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
    resetButton:{
      borderRadius:4, 
      width:120, 
      height:35, 
      marginLeft:5, 
      marginTop:10, 
      backgroundColor:'rgb(251,112,0)',
    },
    saveText:{
      marginTop:5,
      marginLeft:40, 
      fontFamily:'NunitoSans', 
      fontSize:16, 
      fontWeight:'600', 
      color:'white',
    },
    saveText1:{
      marginTop:5, 
      marginLeft:40, 
      fontFamily:'NunitoSans', 
      fontSize:16, 
      fontWeight:'600', 
      color:'white'
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