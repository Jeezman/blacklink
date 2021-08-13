/**
 * Learn more about createBottomTabNavigator:
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */

 import { Ionicons } from '@expo/vector-icons';
 import { createStackNavigator } from '@react-navigation/stack';
 import * as React from 'react';
 import BlacklistScreen from '../screens/Blacklist/BlacklistScreen';
 import { TabFiveParamList } from '../utils/types';
 import  Icon  from 'react-native-vector-icons/Ionicons';

 
 
 
 // You can explore the built-in icon families and icons on the web at:
 // https://icons.expo.fyi/
 function TabBarIcon(props: { name: React.ComponentProps<typeof Ionicons>['name']; color: string }) {
   return <Ionicons size={30} style={{ marginBottom: -3 }} {...props} />;
 }
 
 // Each tab has its own navigation stack, you can read more about this pattern here:
 // https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab
 const BlacklistStack = createStackNavigator<TabFiveParamList>();
 
 export default function BlacklistNavigator({navigation} : any) {
   return (
     <BlacklistStack.Navigator>
       <BlacklistStack.Screen
         name="Blacklist"
         component={BlacklistScreen}
         options={{
              headerTitle: 'Blacklist',
              headerLeft: () => (
                <Icon name= "arrow-back" size={30} style={{paddingLeft: 10}} color="#000" onPress={() => navigation.goBack()}></Icon>
              ),
              headerRight: () => (
                <Icon name= "search" size={25} style={{paddingRight: 15}} color="#000" ></Icon>
              ) 
         }}
       />
     </BlacklistStack.Navigator>
   );
 }
 
 
 