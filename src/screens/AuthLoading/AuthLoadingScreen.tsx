import React, { useState, useEffect } from "react";
import { ActivityIndicator, StatusBar, StyleSheet, View } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

export function AuthLoadingScreen({ navigation }: any) {
  const [userToken, setUserToken] = useState("");

  useEffect(() => {
    console.log("auth");
    const _bootstrapAsync = async () => {
      let userToken;
      userToken = null;
      try {
        userToken = await AsyncStorage.getItem("username");
        if (userToken !== null) {
          setUserToken(userToken);
          //navigation.navigate("Home");
        }
      } catch (error) {
        console.log(error);
      }
    };
    _bootstrapAsync();
  }, []);

  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color="#000" />
      <StatusBar barStyle="default" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
