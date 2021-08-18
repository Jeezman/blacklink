import { Ionicons } from '@expo/vector-icons';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import LoginScreen from '../screens/Login/LoginScreen';
import AddCasherScreen from '../screens/AddCasher/AddCasherScreen';
import  Icon  from 'react-native-vector-icons/MaterialCommunityIcons';
import { TabFourParamList } from '../utils/types';

//const BottomTab = createBottomTabNavigator<BottomTabParamList>();

const AddCasherStack = createStackNavigator<TabFourParamList>();

export default function AddCasherNavigator({navigation} : any) {
  return (
    <AddCasherStack.Navigator>
      <AddCasherStack.Screen
        name="AddCasher"
        component={AddCasherScreen}
        options={{ 
          headerLeft: () => (
            <Icon name= "menu" size={30} style={{paddingLeft: 10}} color="#000" onPress={() => navigation.openDrawer()}></Icon>
          ) 
       }}
      />
    </AddCasherStack.Navigator>
  );
}