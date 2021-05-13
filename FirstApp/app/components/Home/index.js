
 import React, { Component } from 'react';
 import { Text, View,Image, Button,StyleSheet,TouchableOpacity} from 'react-native';

import styles from './style.js';
 
 export default class HomeScreen extends Component {
   render() {
     return (
       <View style={styles.container}>
         <View style={styles.container1}>
         <Text style={styles.text}>Calib CRM</Text>
         <Image style={styles.img} source={require('./img/calendarAmico.png')} />
         <Text style={styles.text1}>Heading</Text>
         <Text style={styles.text2}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor </Text>
         <View style={styles.row} >
           <View style={styles.minirectangle}></View>
           <View style={styles.rectangle}></View>
           <View style={styles.minirectangle}></View>
         </View>
         </View>
 
         <View style={styles.container2}>
         {/* <Button
           style={{radius:4,paddingBottom:300,fontFamily:'NunitoSans',fontWeight:'600'}}
           onPress={()=> this.props.navigation.navigate('login')}
           title={'Log In'}
           color="rgb(251,112,0)"
           /> */}
           <TouchableOpacity style={{borderRadius:4,width:320,height:48,marginBottom:16,backgroundColor:'rgb(251,112,0)'}} onPress={()=> this.props.navigation.navigate('login')}>
           <Text style={{marginTop:10,marginLeft:137,fontFamily:'NunitoSans',fontSize:16,fontWeight:'600',color:'white'}}>Log In</Text>
           </TouchableOpacity>
           <TouchableOpacity style={{borderRadius:4,width:320,height:48,borderWidth:1,backgroundColor:'white',borderRadius: 4,borderColor:'rgb(50,145,200)',marginTop:5}} onPress={()=>{this.props.navigation.navigate('register')}}>
           <Text style={{marginTop:10,marginLeft:107,fontFamily:'NunitoSans',fontWeight:'600',fontSize:16,color:'rgb(50,145,200)',fontSize:16}}>Create Account</Text><Image style={{width:24,height:24,marginLeft:277,marginVertical:-20}} source={require("./img/launch24Px.png")}/>
           </TouchableOpacity>
 
           {/* <Button
           style={{radius:4,width:80,height:30,paddingTop:50,TextColor:'blue',borderColor:'blue'}}
           onPress={()=> this.props.navigation.navigate('')}
           title="Create Account"
           color='blue'
           /> */}
         </View>
       </View>
     );
   }
 }
 
 