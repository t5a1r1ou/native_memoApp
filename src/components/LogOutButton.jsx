import React from "react";
import { TouchableOpacity, Text, StyleSheet, Alert } from "react-native";
import firebase from "firebase";
import { useNavigation } from "@react-navigation/native";

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 12,
    paddingVertical: 4,
  },
  label: {
    fontSize: 14,
    color: "rgba(255, 255, 255, 0.7)",
  },
});

const { container, label } = styles;

const LogOutButton = () => {
  const navigation = useNavigation();
  const handlePress = () => {
    firebase
      .auth()
      .signOut()
      .then(() => {
        navigation.reset({
          index: 0,
          routes: [{ name: "LogIn" }],
        });
      })
      .catch(() => {
        Alert.alert("ログアウトに失敗しました。");
      });
  };
  return (
    <TouchableOpacity style={container} onPress={handlePress}>
      <Text style={label}>ログアウト</Text>
    </TouchableOpacity>
  );
};

export default LogOutButton;
