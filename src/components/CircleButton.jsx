import React from "react";
import { View, StyleSheet } from "react-native";
import { shape, string } from "prop-types";
import { Feather } from "@expo/vector-icons";
import Icon from "./Icon";

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
});

const { circleButton } = styles;

const CircleButton = ({ style, name }) => {
  return (
    <View style={[circleButton, style]}>
      <Icon name={name} size={40} color="#fff" />
    </View>
  );
};

CircleButton.propTypes = {
  style: shape(),
  name: string.isRequired,
};

CircleButton.defaultProps = {
  style: null,
};

export default CircleButton;
