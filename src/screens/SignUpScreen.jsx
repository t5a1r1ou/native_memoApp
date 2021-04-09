import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
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
  return (
    <View style={container}>
      <View style={inner}>
        <Text style={title}>Sign Up</Text>
        <TextInput style={input} value="Email" />
        <TextInput style={input} value="Password" />
        <Button
          label="Submit"
          onPress={() =>
            navigation.reset({
              index: 0,
              routes: [{ name: "MemoList" }],
            })
          }
        />
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
