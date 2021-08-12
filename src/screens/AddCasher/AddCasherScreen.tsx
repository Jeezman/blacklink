import * as React from 'react';
import { StyleSheet, TextInput, Linking, Button, Alert, ScrollView } from 'react-native';
import { Text, View } from '../../components/Themed';

export default function AddCasherScreen() {
  return (
    <ScrollView style={styles.scrollView}>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>ADD CASHER</Text>
        </View>
        <View style={styles.footer}>
          <Text style={styles.text_footer}>Username:</Text>
          <View style={styles.action}>
            <TextInput placeholder="chris@okoye" style={styles.textInput} autoCapitalize="none" 
            />
          </View>
          <Text style={styles.text_footer}>Phone Number:</Text>
          <View style={styles.action}>
            <TextInput placeholder="+234 8063345821" style={styles.textInput} autoCapitalize="none" 
            />
          </View>
          <Text style={styles.text_footer}>Bank:</Text>
          <View style={styles.action}>
            <TextInput placeholder="GTBank" style={styles.textInput} autoCapitalize="none" 
            />
          </View>                    
          <View>
            <Text style={styles.text_footer}>Telegram Username (Optional):</Text>
            <View style={styles.action}>
            <TextInput placeholder="Chris Okoye" style={styles.textInput} autoCapitalize="none" 
            />
            </View>
            <Text style={styles.text_footer}>Comments:</Text>
            <View style={styles.action}>
              <TextInput multiline = {true} numberOfLines = {4} placeholder="Comments" style={styles.textAreaInput} autoCapitalize="none" 
              />
            </View>                     
          </View>
          <View style={styles.button}>
            <Button
              title="Add to Blackist"
              color="#000"
              
              onPress={() => Alert.alert('Add Casher successful!')}
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
  
},
textAreaInput:{
  height:100, 
  textAlignVertical: 'top',
  flex:1,
  paddingTop:4,
  paddingLeft:10,
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