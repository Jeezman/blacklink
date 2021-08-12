import { Ionicons } from '@expo/vector-icons';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import LoginScreen from '../screens/Login/LoginScreen';
import SignupScreen from '../screens/Signup/SignupScreen';
import  Icon  from 'react-native-vector-icons/MaterialCommunityIcons';
import { TabTwoParamList } from '../utils/types';

//const BottomTab = createBottomTabNavigator<BottomTabParamList>();

const SignupStack = createStackNavigator<TabTwoParamList>();

export default function SignupNavigator({navigation} : any) {
  return (
    <SignupStack.Navigator>
      <SignupStack.Screen
        name="Signup"
        component={SignupScreen}
        options={{ 
          headerLeft: () => (
            <Icon name= "menu" size={30} style={{paddingLeft: 10}} color="#000" onPress={() => navigation.openDrawer()}></Icon>
          ) 
       }}
      />
    </SignupStack.Navigator>
  );
}