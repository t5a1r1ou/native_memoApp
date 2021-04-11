import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Alert,
} from "react-native";
import firebase from "firebase";
import Button from "../components/Button";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f0f4f8",
  },
  inner: {
    paddingHorizontal: 27,
    paddingVertical: 24,
  },
  title: {
    fontSize: 24,
    lineHeight: 32,
    fontWeight: "bold",
    marginBottom: 24,
  },
  input: {
    fontSize: 16,
    height: 48,
    borderColor: "#ddd",
    borderWidth: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 8,
    marginBottom: 16,
  },
  footer: {
    flexDirection: "row",
  },
  footerText: {
    fontSize: 14,
    lineHeight: 24,
    marginRight: 8,
  },
  footerLink: {
    fontSize: 14,
    lineHeight: 24,
    color: "#D34668",
  },
});

const {
  container,
  inner,
  title,
  input,
  footer,
  footerText,
  footerLink,
} = styles;

const SignUpScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handlePress = () => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        const { user } = userCredential;
        console.log(user.uid);
        navigation.reset({
          index: 0,
          routes: [{ name: "MemoList" }],
        });
      })
      .catch((err) => {
        Alert.alert(err.code);
      });
  };
  return (
    <View style={container}>
      <View style={inner}>
        <Text style={title}>Sign Up</Text>
        <TextInput
          style={input}
          value={email}
          onChangeText={(text) => setEmail(text)}
          autoCapitalize="none"
          keyboardType="email-address"
          placeholder="Email Address"
          textContentType="emailAddress"
        />
        <TextInput
          style={input}
          value={password}
          onChangeText={(text) => setPassword(text)}
          autoCapitalize="none"
          placeholder="Password"
          textContentType="password"
          secureTextEntry
        />
        <Button label="Submit" onPress={() => handlePress()} />
        <View style={footer}>
          <Text style={footerText}>Already resigtered?</Text>
          <TouchableOpacity
            onPress={() =>
              navigation.reset({
                index: 0,
                routes: [{ name: "LogIn" }],
              })
            }
          >
            <Text style={footerLink}>Log in.</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default SignUpScreen;
