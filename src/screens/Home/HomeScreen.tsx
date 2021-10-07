  
import React from 'react';
import { View, Text, Button, StyleSheet, StatusBar,TouchableOpacity } from 'react-native';
import { useTheme } from '@react-navigation/native';


export default function HomeScreen ()  {

  const { colors } = useTheme();

  const theme = useTheme();
  
    return (
      <View style={styles.container}>
        <StatusBar barStyle= { theme.dark ? "light-content" : "dark-content" }/>
        <Text style={{color: colors.text}}>Home Screen</Text>
      </View>
    );
};


const styles = StyleSheet.create({
  container: {
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center'
  },
});