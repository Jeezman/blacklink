import { faUnderline } from '@fortawesome/free-solid-svg-icons';
import * as React from 'react';
import { StyleSheet, TextInput, Linking, Button, Alert, ScrollView } from 'react-native';
//import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
//import { faUser } from '@fortawesome/free-solid-svg-icons'

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';

export default function TabOneScreen() {
  return (
    <ScrollView style={styles.scrollView}>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>SIGNUP</Text>
        </View>
        <View style={styles.footer}>
          <Text style={styles.text_footer}>Full Name:</Text>
          <View style={styles.action}>
            <TextInput placeholder="Johnny Gravvy" style={styles.textInput} autoCapitalize="none" 
            />
          </View>
          <Text style={styles.text_footer}>Username:</Text>
          <View style={styles.action}>
            <TextInput placeholder="johnny@gravy" style={styles.textInput} autoCapitalize="none" 
            />
          </View>
          <Text style={styles.text_footer}>Phone Number:</Text>
          <View style={styles.action}>
            <TextInput placeholder="+234 8063343912" style={styles.textInput} autoCapitalize="none" 
            />
          </View>          
          <View>
            <Text style={styles.text_footer}>Password:</Text>
            <View style={styles.action}>
              <TextInput secureTextEntry={true} placeholder="**********" style={styles.textInput} autoCapitalize="none" 
              />
            </View>
            <Text style={styles.text_footer}>Confirm Password:</Text>
            <View style={styles.action}>
              <TextInput secureTextEntry={true} placeholder="**********" style={styles.textInput} autoCapitalize="none" 
              />
            </View>                     
          </View>
          <View style={styles.button}>
            <Button
              title="Signup"
              color="#000"
              
              onPress={() => Alert.alert('Signup successful!')}
            />
          </View>

        </View>
        
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //alignItems: 'center',
    //justifyContent: 'center',
    backgroundColor: '#fff'
  },
  scrollView: {
    backgroundColor: '#fff',
    
  },
  header: {
    flex:1,
    justifyContent: 'center',
    //backgroundColor: '#cecece',
    paddingHorizontal: 20,
    paddingVertical: 50,
    paddingBottom: 30
},
  footer: {
    flex: 3,
    backgroundColor: '#fff',
    //borderTopLeftRadius: 30,
    //borderTopRightRadius: 30,
    paddingHorizontal: 20,
    paddingVertical: 30,
    
  },
  text_header: {
    color: '#fff',
    fontWeight: 'bold',
   
    fontSize: 30
},
  text_footer: {
    color: '#000',
    fontSize: 18,
    paddingBottom:5,
    marginTop:10,
},
textInput: {
  flex: 1,
  height: 40,
  paddingLeft:10,
  //backgroundColor:"#ced4da",
  outlineStyle: 'none',
  
},
textPassword: {
  color: '#395697',
  textDecorationLine: "underline",
  textDecorationStyle: "solid",
  textDecorationColor: "#395697",
},
textCreateAccount: {
  color: '#395697',
  textDecorationLine: "underline",
  textDecorationStyle: "solid",
  textDecorationColor: "#395697",
  marginTop: 4,
  paddingLeft: 5,
  
},
  title: {
    fontSize: 30, 
    textAlign: 'center',
    fontWeight: 'bold',
  },
  action: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1.5,
    //borderRadius: 4,
},
  userIcon:{
    paddingLeft:10,
  },
  eyeIcon:{
    paddingRight: 10,
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  button: {
    marginTop: 20,
  },
});