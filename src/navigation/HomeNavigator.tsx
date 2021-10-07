/**
 * Learn more about createBottomTabNavigator:
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */

import { Ionicons } from '@expo/vector-icons';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import  Icon  from 'react-native-vector-icons/MaterialCommunityIcons';
import HomeScreen from '../screens/Home/HomeScreen';
import { TabThreeParamList } from '../utils/types';



// You can explore the built-in icon families and icons on the web at:
// https://icons.expo.fyi/


// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab
const HomeStack = createStackNavigator<TabThreeParamList>();

export default function HomeNavigator({navigation}: any) {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="Home"
        component={HomeScreen}
        options={{ 
          headerLeft: () => (
            <Icon name= "menu" size={30} style={{paddingLeft: 10}} color="#000" onPress={() => navigation.openDrawer()}></Icon>
          ) 

        }}
      />
    </HomeStack.Navigator>
  );
}


