/**
 * If you are not familiar with React Navigation, check out the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import React, { useState, useEffect, useContext } from "react";
import { ColorSchemeName, ActivityIndicator, View } from "react-native";
import LinkingConfiguration from "./LinkingConfiguration";
import LoginScreen from "../screens/Login/LoginScreen";
import HomeScreen from "../screens/Home/HomeScreen";
import SignupScreen from "../screens/Signup/SignupScreen";
import AddCasherScreen from "../screens/AddCasher/AddCasherScreen";
import HomeNavigator from "./HomeNavigator";
import LoginNavigator from "./LoginNavigator";
import SignupNavigator from "./SignupNavigator";
import { AuthLoadingScreen } from "../screens/AuthLoading/AuthLoadingScreen";
import BlacklistScreen from "../screens/Blacklist/BlacklistScreen";
import BlacklistNavigator from "./BlacklistNavigator";
import AddCasherNavigator from "./AddCasherNavigator";
import Icon from "react-native-vector-icons/Ionicons";
import LoginProvider, { useLogin } from "../components/LoginProvider";
import { DrawerContent } from "../screens/DrawerContent/DrawerContent";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Navigation(
  {
    colorScheme,
  }: {
    colorScheme: ColorSchemeName;
  },
  { navigation }: any
) {
  const [isLoading, setIsLoading] = useState(true);
  const [userToken, setUserToken] = useState("");
  const { isLoggedIn } = useLogin();
  useEffect(() => {
    setTimeout(async () => {
      setIsLoading(false);

      try {
        const userToken = await AsyncStorage.getItem("username");
        if (userToken !== null) {
          setUserToken(userToken);
          //navigation.navigate("Home");
        } else {
          setUserToken("");
        }
      } catch (error) {
        console.log(error);
      }
    }, 1000);
  }, []);
  return (
    <LoginProvider>
      <NavigationContainer
        linking={LinkingConfiguration}
        theme={colorScheme === "dark" ? DarkTheme : DefaultTheme}
      >
        {isLoading ? <AuthLoadingScreen /> : <MainNavigator />}
      </NavigationContainer>
    </LoginProvider>
  );
}

// A root stack navigator is often used for displaying modals on top of all other content
// Read more here: https://reactnavigation.org/docs/modal
const Stack = createStackNavigator();
const BlacklistStack = createStackNavigator();
const Drawer = createDrawerNavigator();

const BlacklistStackScreen = ({ navigation }: any) => (
  <BlacklistStack.Navigator>
    <BlacklistStack.Screen
      name="List"
      component={BlacklistScreen}
      options={{
        headerTitle: "Blacklist",
        headerLeft: () => (
          <Icon
            name="arrow-back"
            size={30}
            style={{ paddingLeft: 10 }}
            color="#000"
            onPress={() => navigation.goBack()}
          ></Icon>
        ),
        headerRight: () => (
          <Icon
            name="search"
            size={25}
            style={{ paddingRight: 15 }}
            color="#000"
          ></Icon>
        ),
      }}
    />
  </BlacklistStack.Navigator>
);

const AuthStack = createStackNavigator();
const AuthStackScreen = () => (
  <AuthStack.Navigator>
    <AuthStack.Screen
      name="Logout"
      component={LoginScreen}
      options={{ headerShown: false }}
    />
    <AuthStack.Screen name="Signup" component={SignupScreen} />
  </AuthStack.Navigator>
);
const DrawerScreen = () => (
  <Drawer.Navigator drawerContent={(props) => <DrawerContent {...props} />}>
    <Drawer.Screen name="Home" component={HomeScreen} />
    <Drawer.Screen name="Add Casher" component={AddCasherScreen} />
    <Drawer.Screen
      name="Blacklist"
      component={BlacklistStackScreen}
      options={{ headerShown: false }}
    />
  </Drawer.Navigator>
);
const MainNavigator = () => {
  const { isLoggedIn } = useLogin();
  return isLoggedIn ? <DrawerScreen /> : <AuthStackScreen />;
};
function Root() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Signup"
        component={SignupScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}
