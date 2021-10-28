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
import LoginProvider, { useLogin } from "../../components/LoginProvider";
import {
  DrawerContentScrollView,
  DrawerItem,
  DrawerContentComponentProps,
} from "@react-navigation/drawer";
import { set } from "react-native-reanimated";

export function DrawerContent(props: DrawerContentComponentProps) {
  const { setIsLoggedIn, profile, setProfile } = useLogin();

  const logout = async function () {
    try {
      await AsyncStorage.clear();
      setIsLoggedIn(false);
      setProfile({ name: "", username: "", phoneNumber: "", password: "" });
    } catch (error) {
      console.error("Error clearing app data.");
    }
  };

  const initials = Array.prototype.map
    .call(profile.username.split(" "), function (x) {
      return x.substring(0, 1).toUpperCase();
    })
    .join("");

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
                <Title style={styles.title}>{profile.username}</Title>

                <Caption style={styles.caption}>{profile.phoneNumber}</Caption>
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
