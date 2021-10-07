import React, { useState } from "react";
import { Button } from "react-native-paper";
import {
  StyleSheet,
  TextInput,
  Linking,
  Alert,
  ScrollView,
  TouchableOpacity,
  View,
  Text,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import { Formik } from "formik";
import * as Yup from "yup";

//API client
import axios from "axios";

export default function LoginScreen({ navigation }: any) {
  const [data, setData] = React.useState({
    username: "",
    password: "",
    confirm_password: "",
    check_textInputChange: false,
    secureTextEntry: true,
    confirm_secureTextEntry: true,
  });

  const userInfo = {
    username: "",
    password: "",
  };
  const [success, setSuccess] = useState(null);
  const [error, setError] = useState(null);
  const { username, password } = userInfo;

  const validationSchema = Yup.object({
    username: Yup.string().trim().required("Username is required!"),
    password: Yup.string().trim().required("Password is required!"),
  });

  const onSubmit = async (values: any) => {
    setError(null);
    const response = await axios
      .post("https://blacklink-project.herokuapp.com/user/login", values)
      .catch((err) => {
        if (err && err.response) setError(err.response.data.message);
        console.log(err);
      });

    if (response && response.data) {
      //console.log(response);
      navigation.navigate("Home");
      setSuccess(response.data.message);
    }
  };
  const handleLogin = (values: any, formikActions: any) => {
    console.log();
    axios
      .post("https://blacklink-project.herokuapp.com/user/login", {
        ...values,
      })
      .then((response) => {
        // const result = response.data;
        // const { status, data, message } = result;
        // if (status !== "SUCCESS") {
        // handleMessage(message, status);
        // } else {
        //navigation.navigate("Home", { ...data[0] });
        //}
        //{
        // setUserInfo({ username: "", password: "" });
        //}
        if (validationSchema) {
          console.log(response);
          navigation.navigate("Home");
        }
        //console.log(response);
      })

      .catch((err) => {
        console.log(err);
      });
    formikActions.resetForm();
    formikActions.setSubmitting(false);
  };

  // const handleOnChangeText = (value: any, fieldName: any) => {
  // setUserInfo({ ...userInfo, [fieldName]: value });
  //};

  const updateSecureTextEntry = () => {
    setData({
      ...data,
      secureTextEntry: !data.secureTextEntry,
    });
  };

  const updateConfirmSecureTextEntry = () => {
    setData({
      ...data,
      confirm_secureTextEntry: !data.confirm_secureTextEntry,
    });
  };
  return (
    <ScrollView style={styles.scrollView}>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>LOGIN</Text>
        </View>
        {!error && <Text style={styles.success}>{success ? success : ""}</Text>}
        {!success && <Text style={styles.formError}>{error ? error : ""}</Text>}
        <Formik
          initialValues={userInfo}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          {({
            values,
            errors,
            touched,
            isSubmitting,
            handleBlur,
            handleChange,
            handleSubmit,
          }) => {
            const { username, password } = values;
            return (
              <>
                {/*<TouchableWithoutFeedback onPress={Keyboard.dismiss}>*/}
                <View style={styles.footer}>
                  <Text style={styles.text_footer}>Username:</Text>
                  <View style={styles.action}>
                    <TextInput
                      value={username}
                      placeholder="Johnny@gravy"
                      onChangeText={handleChange("username")}
                      onBlur={handleBlur("username")}
                      style={styles.textInput}
                      autoCapitalize="none"
                    />
                  </View>
                  {touched.username && errors.username ? (
                    <Text style={styles.error}>{errors.username}</Text>
                  ) : null}
                  <View style={{ marginTop: 10 }}>
                    <Text style={styles.text_footer}>Password:</Text>
                    <View style={styles.action}>
                      <TextInput
                        secureTextEntry={data.secureTextEntry ? true : false}
                        onChangeText={handleChange("password")}
                        onBlur={handleBlur("password")}
                        placeholder="**********"
                        value={password}
                        style={styles.textInput}
                        autoCapitalize="none"
                      />
                      <TouchableOpacity onPress={updateSecureTextEntry}>
                        {data.secureTextEntry ? (
                          <Feather
                            name="eye-off"
                            color="grey"
                            style={styles.eyeIcon}
                            size={18}
                          />
                        ) : (
                          <Feather
                            name="eye"
                            color="grey"
                            style={styles.eyeIcon}
                            size={18}
                          />
                        )}
                      </TouchableOpacity>
                    </View>
                    <Text
                      style={styles.textPassword}
                      onPress={() => Linking.openURL("http://google.com")}
                    >
                      Forgot Password?
                    </Text>
                  </View>
                  {touched.password && errors.password ? (
                    <Text style={styles.error}>{errors.password}</Text>
                  ) : null}
                  <View style={styles.button}>
                    <Button
                      color="black"
                      mode="contained"
                      onPress={handleSubmit as any}
                      loading={isSubmitting}
                      disabled={isSubmitting}
                    >
                      Login
                    </Button>
                  </View>
                  <View style={{ flex: 1, flexDirection: "row" }}>
                    <Text style={styles.text_footer}>Or </Text>
                    <TouchableOpacity
                      onPress={() => navigation.navigate("Signup")}
                    >
                      <Text style={styles.textCreateAccount}>
                        Create Account!
                      </Text>
                    </TouchableOpacity>
                  </View>
                </View>
                {/*</TouchableWithoutFeedback>*/}
              </>
            );
          }}
        </Formik>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //alignItems: 'center',
    //justifyContent: 'center',
    backgroundColor: "#fff",
  },
  scrollView: {
    backgroundColor: "#fff",
  },
  header: {
    flex: 1,
    justifyContent: "center",
    //backgroundColor: '#cecece',
    paddingHorizontal: 20,
    paddingVertical: 50,
    paddingBottom: 30,
  },
  footer: {
    flex: 3,
    backgroundColor: "#fff",
    //borderTopLeftRadius: 30,
    //borderTopRightRadius: 30,
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  text_header: {
    color: "#fff",
    fontWeight: "bold",

    fontSize: 30,
  },
  text_footer: {
    color: "#000",
    fontSize: 18,
    paddingBottom: 5,
  },
  textInput: {
    flex: 1,
    height: 40,
    paddingLeft: 10,
  },
  textPassword: {
    color: "#395697",
    textDecorationLine: "underline",
    textDecorationStyle: "solid",
    textDecorationColor: "#395697",
  },
  textCreateAccount: {
    color: "#395697",
    textDecorationLine: "underline",
    textDecorationStyle: "solid",
    textDecorationColor: "#395697",
    marginTop: 4,
    paddingLeft: 5,
  },
  title: {
    fontSize: 30,
    textAlign: "center",
    fontWeight: "bold",
  },
  action: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1.5,
    //borderRadius: 4,
  },
  userIcon: {
    paddingLeft: 10,
  },
  eyeIcon: {
    paddingRight: 10,
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
  button: {
    marginTop: 20,
  },

  msgbox: {
    textAlign: "center",
    fontSize: 13,
    color: "#ff0000",
  },
  error: {
    color: "#ff0000",
    fontSize: 14,
    marginVertical: 8,
    fontWeight: "bold",
  },
  success: {
    color: "#238C34",
    fontSize: 16,
    //marginTop: 8,
    paddingHorizontal: 18,
    fontWeight: "bold",
  },
  formError: {
    color: "#ff0000",
    fontSize: 16,
    //marginTop: 8,
    paddingHorizontal: 18,
    fontWeight: "bold",
  },
});
