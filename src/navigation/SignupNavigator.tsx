import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import LoginScreen from '../screens/LoginScreen';
import SignupScreen from '../screens/SignupScreen';
import { BottomTabParamList, TabOneParamList, TabTwoParamList } from '../utils/types';

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

const TabTwoStack = createStackNavigator<TabTwoParamList>();

export default function SignupNavigator() {
  return (
    <TabTwoStack.Navigator>
      <TabTwoStack.Screen
        name="Signup"
        component={SignupScreen}
        options={{ headerTitle: 'Signup' }}
      />
    </TabTwoStack.Navigator>
  );
}