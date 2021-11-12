import React, { useEffect, useState } from "react";
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
  ActivityIndicator,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Feather } from "@expo/vector-icons";
import { Formik } from "formik";
import * as Yup from "yup";

//API client
import axios from "axios";
import { useLogin } from "../../components/LoginProvider";
import { profile } from "console";

export default function ForgotPasswordScreen({ navigation }: any) {
  const [data, setData] = React.useState({
    email: "",
    //redirectUrl: "https://blacklink-project.herokuapp.com/user/passwordReset",
  });

  const userInfo = {
    email: "",
    //redirectUrl: "https://blacklink-project.herokuapp.com/user/passwordReset",
  };

  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  //const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState({});
  const { email } = userInfo;
  const { setIsLoggedIn, setProfile } = useLogin();
  const validationSchema = Yup.object({
    email: Yup.string().trim().required("Email is required!"),
  });

  const onSubmit = async (values: any, formikActions: any) => {
    const response = await axios
      .post(
        "https://blacklink-project.herokuapp.com/user/requestPasswordReset",
        values
      )
      .catch((err) => {
        if (err && err.response) setError(err.response.data.message);
        setSuccess(null);
        console.log(err);
      });

    if (response && response.data) {
      setError(null);
      //const _user = response.data.user;
      //await AsyncStorage.setItem("username", JSON.stringify(_user));
      //setProfile(_user);
      //setIsLoggedIn(true);
      setSuccess(response.data.message);
      console.log(response.data.message);
    }
    formikActions.resetForm();
    formikActions.setSubmitting(false);
  };

  return (
    <ScrollView style={styles.scrollView}>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>PASSWORD RESET</Text>
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
            const { email } = values;
            return (
              <>
                <View style={styles.footer}>
                  <Text style={styles.text_footer}>Email Address:</Text>
                  <View style={styles.action}>
                    <TextInput
                      value={email}
                      placeholder="johnnygravy@gmail.com"
                      onChangeText={handleChange("email")}
                      onBlur={handleBlur("email")}
                      style={styles.textInput}
                      autoCapitalize="none"
                    />
                  </View>
                  {touched.email && errors.email ? (
                    <Text style={styles.error}>{errors.email}</Text>
                  ) : null}

                  <View style={styles.button}>
                    <Button
                      color="black"
                      mode="contained"
                      onPress={handleSubmit as any}
                      loading={isSubmitting}
                      disabled={isSubmitting}
                    >
                      Submit
                    </Button>
                  </View>
                </View>
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
