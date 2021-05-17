/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React, { Component } from 'react';
 import { View, ActivityIndicator, StatusBar } from 'react-native';
 import AsyncStorage from '@react-native-async-storage/async-storage';
 import { NavigationContainer } from '@react-navigation/native';
 import { createStackNavigator } from '@react-navigation/stack';
 
 import HomeScreen from './app/components/Home';
 import Dashboard from './app/components/Dashboard';
 import LoginScreen from './app/components/Login';
 import ForgetScreen from './app/components/forget';
 import SignupScreen from './app/components/signup';
 import AddUser from './app/components/AddUser';
 import {Provider} from 'react-redux';
 import { PersistGate } from 'redux-persist/integration/react'
import {store, persistor}  from './app/redux/store/configStore';
// import {store, persistor} from 
 const Stack = createStackNavigator();
//  const {store, persistor} = configureStore();
 export default class App extends Component {
 
   render() {
     return (

       <NavigationContainer>
          <Provider store = { store }>
              <PersistGate loading={null} persistor={persistor}>
         <Stack.Navigator>
           <Stack.Screen name="AuthLoading" component={AuthLoadingScreen} options={{ headerShown: false }} />
           <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
           <Stack.Screen name="login" component={LoginScreen} options={{ headerShown: false }} />
           <Stack.Screen name="dashboard" component={Dashboard} options={{ headerShown: false, headerLeft: null }} />
           <Stack.Screen name="forget" component={ForgetScreen} options={{ headerShown: false,headerLeft: null }} />
           <Stack.Screen name="signup" component={SignupScreen} options={{ headerShown: false,headerLeft: null }} />
           <Stack.Screen name="adduser" component={AddUser} options={{ headerShown: false,headerLeft: null }} />
         </Stack.Navigator>

         </PersistGate>
        </Provider>
       </NavigationContainer>

     );
   };
 }
 
 class AuthLoadingScreen extends Component {
   constructor(props) {
     super(props);
     this._loadData();
   }
   render() {
     return (
       <View>
         <ActivityIndicator />
         <StatusBar barStyle="dark-content" />
       </View>
     );
   }
   _loadData = async () => {
     const isLoggedIn = await AsyncStorage.getItem('isLoggedIn');
     this.props.navigation.navigate(isLoggedIn !== '1' ? 'Home' : 'dashboard');
   }
 }
 