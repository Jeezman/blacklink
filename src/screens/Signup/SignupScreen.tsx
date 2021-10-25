import React, { useState } from "react";
import { Button } from "react-native-paper";
import { FormError, FormSuccess } from "../../components/common";
import {
  StyleSheet,
  TextInput,
  Linking,
  Alert,
  ScrollView,
  Text,
  View,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Formik } from "formik";
import * as Yup from "yup";

//API client
import axios from "axios";
import { response } from "express";

export default function SignupScreen({ navigation }: any) {
  const userInfo = {
    name: "",
    username: "",
    phoneNumber: "",
    password: "",
    confirmPassword: "",
  };
  const [success, setSuccess] = useState(null);
  const [error, setError] = useState(null);
  const { name, username, phoneNumber, password, confirmPassword } = userInfo;

  const validationSchema = Yup.object({
    name: Yup.string()
      .trim()
      .min(4, "Invalid name!")
      .required("Fullname is required!"),
    username: Yup.string()
      .trim()
      .min(4, "Invalid username!")
      .required("Username is required!"),
    phoneNumber: Yup.string()
      .trim()
      .min(11, "Invalid phonenumber!")
      .max(11, "Invalid phonenumber")
      .required("Phonenumber is required!"),
    password: Yup.string()
      .trim()
      .min(8, "Please enter a strong password!")
      .required("Password is required!"),
    confirmPassword: Yup.string()
      .required("Please confirm password")
      .equals([Yup.ref("password"), null], "Password does not match!"),
  });

  const onSubmit = async (values: any, formikActions: any) => {
    const { confirmPassword, ...data } = values;
    const response = await axios
      .post("https://blacklink-project.herokuapp.com/user/signup", data)
      .catch((err) => {
        if (err && err.response && err.response.data)
          setError(err.response.data.message);
        setSuccess(null);
        console.log(err);
      });

    if (response && response.data) {
      setError(null);
      setSuccess(response.data.message);
      console.log(phoneNumber);

      navigation.navigate("Home");
    }

    formikActions.resetForm();
    formikActions.setSubmitting(false);
  };
  {
    /* const handleSignup = (userInfo: any) => {
    console.log();
    axios
      .post("https://blacklink-project.herokuapp.com/user/signup", {
        name: name,
        username: username,
        phoneNumber: phoneNumber,
        password: password,
        confirmPassword,
      })
      .then((response) => {
        {
          //setUserInfo({
          // name: "",
          // username: "",
          // phoneNumber: "",
          // password: "",
          // confirmPassword: "",
          //});
        }
        console.log(response);
        navigation.navigate("Home");
      })

      .catch((err) => {
        console.log(err);
      });
  };
*/
  }

  return (
    <ScrollView style={styles.scrollView}>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>SIGNUP</Text>
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
            const { name, username, phoneNumber, password, confirmPassword } =
              values;
            return (
              <>
                {/*<TouchableWithoutFeedback onPress={Keyboard.dismiss}>*/}
                <View style={styles.footer}>
                  <Text style={styles.text_footer}>Full Name:</Text>
                  <View style={styles.action}>
                    <TextInput
                      value={name}
                      onChangeText={handleChange("name")}
                      onBlur={handleBlur("name")}
                      placeholder="Johnny Gravvy"
                      style={styles.textInput}
                      autoCapitalize="none"
                    />
                  </View>
                  {touched.name && errors.name ? (
                    <Text style={styles.error}>{errors.name}</Text>
                  ) : null}
                  <Text style={styles.text_footer}>Username:</Text>
                  <View style={styles.action}>
                    <TextInput
                      value={username}
                      onChangeText={handleChange("username")}
                      onBlur={handleBlur("username")}
                      placeholder="johnny@gravy"
                      style={styles.textInput}
                      autoCapitalize="none"
                    />
                  </View>
                  {touched.username && errors.username ? (
                    <Text style={styles.error}>{errors.username}</Text>
                  ) : null}
                  <Text style={styles.text_footer}>Phone Number:</Text>
                  <View style={styles.action}>
                    <TextInput
                      value={phoneNumber}
                      onChangeText={handleChange("phoneNumber")}
                      onBlur={handleBlur("phoneNumber")}
                      placeholder="+234 8063343912"
                      style={styles.textInput}
                      keyboardType="numeric"
                      autoCapitalize="none"
                    />
                  </View>
                  {touched.phoneNumber && errors.phoneNumber ? (
                    <Text style={styles.error}>{errors.phoneNumber}</Text>
                  ) : null}
                  <View>
                    <Text style={styles.text_footer}>Password:</Text>
                    <View style={styles.action}>
                      <TextInput
                        value={password}
                        onChangeText={handleChange("password")}
                        onBlur={handleBlur("password")}
                        secureTextEntry={true}
                        placeholder="**********"
                        style={styles.textInput}
                        autoCapitalize="none"
                      />
                    </View>
                    {touched.password && errors.password ? (
                      <Text style={styles.error}>{errors.password}</Text>
                    ) : null}
                    <Text style={styles.text_footer}>Confirm Password:</Text>
                    <View style={styles.action}>
                      <TextInput
                        value={confirmPassword}
                        onChangeText={handleChange("confirmPassword")}
                        onBlur={handleBlur("confirmPassword")}
                        secureTextEntry={true}
                        placeholder="**********"
                        style={styles.textInput}
                        autoCapitalize="none"
                      />
                    </View>
                    {touched.confirmPassword && errors.confirmPassword ? (
                      <Text style={styles.error}>{errors.confirmPassword}</Text>
                    ) : null}
                  </View>
                  <View style={styles.button}>
                    <Button
                      color="black"
                      mode="contained"
                      onPress={handleSubmit as any}
                      loading={isSubmitting}
                      disabled={isSubmitting}
                    >
                      Signup
                    </Button>
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
    marginTop: 10,
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
  error: {
    color: "#ff0000",
    fontSize: 14,
    marginVertical: 8,
    fontWeight: "bold",
  },
  formError: {
    color: "#ff0000",
    fontSize: 16,
    //marginTop: 8,
    paddingHorizontal: 18,
    fontWeight: "bold",
  },
  success: {
    color: "#238C34",
    fontSize: 16,
    //marginTop: 8,
    paddingHorizontal: 18,
    fontWeight: "bold",
  },
});
