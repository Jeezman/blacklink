import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import LoginScreen from '../screens/Login/LoginScreen';
import SignupScreen from '../screens/Signup/SignupScreen';
import { BottomTabParamList, TabOneParamList, TabTwoParamList } from '../utils/types';

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

const SignupStack = createStackNavigator<TabTwoParamList>();

export default function SignupNavigator() {
  return (
    <SignupStack.Navigator>
      <SignupStack.Screen
        name="Signup"
        component={SignupScreen}
        options={{ headerTitle: 'Signup' }}
      />
    </SignupStack.Navigator>
  );
}