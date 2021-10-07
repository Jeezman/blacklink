import { Ionicons } from '@expo/vector-icons';
//import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import LoginScreen from '../screens/Login/LoginScreen';
import SignupScreen from '../screens/Signup/SignupScreen';
import  Icon  from 'react-native-vector-icons/MaterialCommunityIcons';
import {  TabOneParamList } from '../utils/types';

//const BottomTab = createBottomTabNavigator<BottomTabParamList>();

const LoginStack = createStackNavigator<TabOneParamList>();

export default function LoginNavigator({navigation}: any) {
  return (
    <LoginStack.Navigator>
      <LoginStack.Screen
        name="Login"
        component={LoginScreen}
        options={{ 
          headerLeft: () => (
            <Icon name= "menu" size={30} style={{paddingLeft: 10}} color="#000" onPress={() => navigation.openDrawer()}></Icon>
          ) 


       }}
      />
    </LoginStack.Navigator>
  );
}