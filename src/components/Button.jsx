import React from "react";
import { Text, StyleSheet, TouchableOpacity } from "react-native";

const styles = StyleSheet.create({
  buttonContainer: {
    backgroundColor: "#D34668",
    borderRadius: 4,
    alignSelf: "flex-start",
    marginBottom: 24,
  },
  buttonLabel: {
    fontSize: 16,
    lineHeight: 32,
    paddingVertical: 8,
    paddingHorizontal: 32,
    color: "#fff",
  },
});

const { buttonContainer, buttonLabel } = styles;

const Button = ({ label, onPress }) => {
  return (
    <TouchableOpacity style={buttonContainer} onPress={onPress}>
      <Text style={buttonLabel}>{label}</Text>
    </TouchableOpacity>
  );
};

export default Button;
