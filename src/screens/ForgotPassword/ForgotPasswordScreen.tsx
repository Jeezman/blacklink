//import React from 'react';
import * as React from "react";
import { Text, View, StyleSheet } from "react-native";

interface ForgotPasswordScreenProps {}

const ForgotPasswordScreen = (props: ForgotPasswordScreenProps) => {
  return (
    <View style={styles.container}>
      <Text>ForgotPasswordScreen</Text>
    </View>
  );
};

export default ForgotPasswordScreen;

const styles = StyleSheet.create({
  container: {},
});
