import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { string } from "prop-types";

const styles = StyleSheet.create({
  circleButton: {
    backgroundColor: "#D34668",
    width: 64,
    height: 64,
    borderRadius: 32,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    right: 40,
    bottom: 40,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.25,
    shadowRadius: 8,
    elevation: 8,
  },
  circleButtonLabel: {
    color: "#fff",
    fontSize: 40,
    lineHeight: 40,
  },
});

const { circleButton, circleButtonLabel } = styles;

const CircleButton = (props) => {
  const { children } = props;
  return (
    <View style={circleButton}>
      <Text style={circleButtonLabel}>{children}</Text>
    </View>
  );
};

CircleButton.propTypes = {
  children: string.isRequired,
};

export default CircleButton;
