import React from "react";
import { View, Text, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  text: {
    color: "#fff",
    backgroundColor: "blue",
    fontSize: 40,
    fontWeight: "bold",
    padding: 16,
  },
});

const Hello = ({ text, style }) => {
  return (
    <View>
      <Text style={[styles.text, style]}>Hello {text}</Text>
    </View>
  );
};

export default Hello;
