/**
 * If you are not familiar with React Navigation, check out the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import * as React from 'react';
import { ColorSchemeName } from 'react-native';
import LinkingConfiguration from './LinkingConfiguration';
import LoginScreen from '../screens/Login/LoginScreen';
import HomeScreen from '../screens/Home/HomeScreen';
import SignupScreen from '../screens/Signup/SignupScreen';
import AddCasherScreen from '../screens/AddCasher/AddCasherScreen';
import HomeNavigator from './HomeNavigator';
import LoginNavigator from './LoginNavigator';
import SignupNavigator from './SignupNavigator';
import BlacklistScreen from '../screens/Blacklist/BlacklistScreen';
import BlacklistNavigator from './BlacklistNavigator';
import AddCasherNavigator from './AddCasherNavigator';

export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <DrawerScreen />
    </NavigationContainer>
  );
}

// A root stack navigator is often used for displaying modals on top of all other content
// Read more here: https://reactnavigation.org/docs/modal
const Stack = createStackNavigator();
const BlacklistStack = createStackNavigator();
const Drawer = createDrawerNavigator();


const DrawerScreen = () => (
  <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen name="Home" component={HomeNavigator} />
      <Drawer.Screen name="Login" component={LoginNavigator} />
      <Drawer.Screen name="Signup" component={SignupNavigator}  />
      <Drawer.Screen name="Add Casher" component={AddCasherNavigator}  />
      <Drawer.Screen name="Blacklist" component={BlacklistNavigator}  />
  </Drawer.Navigator>
);

function RootNavigator ()  {
  return (
    <Stack.Navigator >
      <Stack.Screen name="Home" component={HomeScreen} options={{title: 'Home'}}/>
      <Stack.Screen name="Login" component={LoginScreen} options={{title: 'Login'}}/>
      <Stack.Screen name="Signup" component={SignupScreen} options={{title: 'Signup'}} />
     <Stack.Screen name="AddCasher" component={AddCasherScreen} options={{title: 'Add Casher'}}/>
  </Stack.Navigator>
    
  );
}
