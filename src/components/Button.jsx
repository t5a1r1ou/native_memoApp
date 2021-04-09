import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { string } from "prop-types";

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

const Button = ({ label }) => {
  return (
    <View style={buttonContainer}>
      <Text style={buttonLabel}>{label}</Text>
    </View>
  );
};

Button.propTypes = {
  label: string.isRequired(),
};

export default Button;
