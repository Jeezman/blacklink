import * as React from 'react';
import { StyleSheet, TextInput, Linking, Button, Alert, ScrollView, TouchableOpacity,  } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { Feather } from '@expo/vector-icons';
import { Text, View } from '../components/Themed';

export default function LoginScreen({navigation}: any) {

  const [data, setData] = React.useState({
    username: '',
    password: '',
    confirm_password: '',
    check_textInputChange: false,
    secureTextEntry: true,
    confirm_secureTextEntry: true,
});

  
  const handlePasswordChange = (value: any) => {
    setData({
        ...data,
        password: value
    });
}

const handleConfirmPasswordChange = (value: any) => {
    setData({
        ...data,
        confirm_password: value
    });
}

const updateSecureTextEntry = () => {
    setData({
        ...data,
        secureTextEntry: !data.secureTextEntry
    });
}

const updateConfirmSecureTextEntry = () => {
    setData({
        ...data,
        confirm_secureTextEntry: !data.confirm_secureTextEntry
    });
}
  return (
    <ScrollView style={styles.scrollView}>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>LOGIN</Text>
        </View>
        <View style={styles.footer}>
          <Text style={styles.text_footer}>Username:</Text>
          <View style={styles.action}>
            
            <TextInput placeholder="Johnny@gravy" style={styles.textInput} autoCapitalize="none" 
            />
          </View>
          <View style={{marginTop: 10}}>
          
            <Text style={styles.text_footer}>Password:</Text>
            <View style={styles.action}>
              
              <TextInput 
              secureTextEntry={data.secureTextEntry ? true : false} 
              onChangeText={(value) => handlePasswordChange(value)}
              placeholder="**********" 
              style={styles.textInput} 
              autoCapitalize="none" 
              />
              <TouchableOpacity
                  onPress={updateSecureTextEntry}
                >
                  {data.secureTextEntry ? 
                <Feather 
                  name="eye-off"
                  color="grey"
                  style={styles.eyeIcon}
                  size={18}
                />
                :
                <Feather 
                  name="eye"
                  color="grey"
                  style={styles.eyeIcon}
                  size={18}
                />
                }
              </TouchableOpacity>
            </View>
            <Text 
              style={styles.textPassword}
              onPress={() => Linking.openURL('http://google.com')}>
                Forgot Password?
            </Text>                    
          </View>
          <View style={styles.button}>
            <Button
              title="Login"
              color="#000"
              
              onPress={() => Alert.alert('Login successful!')}
            />
          </View>
          <View style={{flex: 1,  flexDirection: 'row'}}>
            <Text style={styles.text_footer}>Or </Text>
            <TouchableOpacity onPress={() => navigation.navigate('TabTwoScreen')}>
              <Text 
                style={styles.textCreateAccount}
                >
                  Create Account!
              </Text>
            </TouchableOpacity>
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
    paddingVertical: 30
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
},
textInput: {
  flex: 1,
  height: 40,
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
