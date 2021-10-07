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
import  Icon  from 'react-native-vector-icons/Ionicons';

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

const BlacklistStackScreen = ({navigation} : any) => (
  <BlacklistStack.Navigator>
  <BlacklistStack.Screen
    name="List"
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


const DrawerScreen = () => (
  <Drawer.Navigator initialRouteName="Logout" > 
      <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen name="Add Casher" component={AddCasherScreen}  />
      <Drawer.Screen name="Blacklist" component={BlacklistStackScreen} options={{ headerShown: false }}/>
      <Drawer.Screen name="Logout" component={Root} options={{ headerShown: false }}/>
  </Drawer.Navigator>
);

function Root ()  {
  return (
    <Stack.Navigator >
      <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }}/>
      <Stack.Screen name="Signup" component={SignupScreen} options={{ headerShown: false }}  />
     
  </Stack.Navigator>
    
  );
}
