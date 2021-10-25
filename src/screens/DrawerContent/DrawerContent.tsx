import React, { useState, useEffect } from "react";
import { View, StyleSheet } from "react-native";
import {
  Appbar,
  useTheme,
  Avatar,
  Title,
  Caption,
  Drawer,
} from "react-native-paper";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { PreferencesContext } from "../../components/context";
import {
  DrawerContentScrollView,
  DrawerItem,
  DrawerContentComponentProps,
} from "@react-navigation/drawer";

export function DrawerContent(props: DrawerContentComponentProps) {
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const theme = useTheme();
  const { toggleTheme, isThemeDark } = React.useContext(PreferencesContext);

  (async function bootStrap() {
    const username = await AsyncStorage.getItem("username");
    if (username !== null) {
      console.log("in bootsrap username ", username);
      setName(username);
    }
  })();

  const logout = async function () {
    try {
      await AsyncStorage.clear();
      setIsLoggedIn(!isLoggedIn);
      setName("");
      props.navigation.navigate("Logout");
    } catch (error) {
      console.error("Error clearing app data.");
    }
  };

  const initials = Array.prototype.map
    .call(name.split(" "), function (x) {
      return x.substring(0, 1).toUpperCase();
    })
    .join("");

  const route = props.navigation.getState();

  {
    /*useEffect(() => {
    if (
      route?.history &&
      route.history[(route.history?.length || 0) - 1]?.key?.includes("Home-")
    )
      retrieveData();
    console.log(route);
  }, [route.history]);*/
  }

  //   useEffect(() => {
  //     // retrieveData();
  //     async function retrieveData() {
  //       const username = await AsyncStorage.getItem("username");
  //       return username;

  //       //   if (username !== null) {
  //       //     console.log("username not null ", username);
  //       //     setName(username);
  //       //   }
  //     }

  //     retrieveData().then((response) => {
  //       console.log("response ", response);
  //       if (response) {
  //         setName(response);
  //       } else {
  //         console.log("no response");
  //       }
  //     });
  //   }, [name, setName]);

  //   const retrieveData = async () => {
  //     try {
  //       const userName = await AsyncStorage.getItem("username");
  //       //   const number = await AsyncStorage.getItem("phoneNumber");
  //       console.log("username is ", userName);

  //       if (userName !== null) {
  //         setName(userName);
  //         setIsLoggedIn(isLoggedIn);
  //         console.log(userName);
  //       }
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };

  return (
    <View style={{ flex: 1 }}>
      <DrawerContentScrollView {...props}>
        <View style={styles.drawerContent}>
          <View style={styles.userInfoSection}>
            <View style={{ flexDirection: "row", marginTop: 15 }}>
              <Avatar.Text
                label={initials}
                labelStyle={{
                  color: "#fff",
                  fontSize: 24,
                  fontWeight: "600",
                  fontFamily:
                    '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
                }}
                style={styles.avatar}
              />
              <View style={{ marginLeft: 15, flexDirection: "column" }}>
                <Title style={styles.title}>{name}</Title>

                <Caption style={styles.caption}>08063323914</Caption>
              </View>
            </View>
          </View>
          <Drawer.Section style={styles.drawerSection}>
            <DrawerItem
              labelStyle={{
                fontSize: 14,
                color: "#000",
                fontWeight: "700",
                fontFamily:
                  '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
              }}
              label="Home"
              onPress={() => {
                props.navigation.navigate("Home");
              }}
            />
            <DrawerItem
              labelStyle={{
                fontSize: 14,
                color: "#000",
                fontWeight: "700",
                fontFamily:
                  '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
              }}
              label="Add Casher"
              onPress={() => {
                props.navigation.navigate("Add Casher");
              }}
            />
            <DrawerItem
              labelStyle={{
                fontSize: 14,
                color: "#000",
                fontWeight: "700",
                fontFamily:
                  '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
              }}
              label="Blacklist"
              onPress={() => {
                props.navigation.navigate("Blacklist");
              }}
            />
            <DrawerItem
              labelStyle={{
                fontSize: 14,
                color: "#000",
                fontWeight: "700",
                fontFamily:
                  '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
              }}
              label="Logout"
              onPress={logout}
            />
          </Drawer.Section>
        </View>
      </DrawerContentScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
  },
  userInfoSection: {
    paddingLeft: 20,
  },
  title: {
    color: "#000",
    fontSize: 16,
    marginTop: 3,
    fontWeight: "bold",
    fontFamily:
      '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
  },
  row: {
    marginTop: 20,
    flexDirection: "row",
    alignItems: "center",
  },
  section: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 15,
  },
  drawerSection: {
    marginTop: 15,
  },
  bottomDrawerSection: {
    marginBottom: 15,
    borderTopColor: "#f4f4f4",
    borderTopWidth: 1,
  },
  avatar: {
    backgroundColor: "#000",
  },
  preference: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
});
