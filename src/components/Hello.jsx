import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { shape, string } from "prop-types";

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

Hello.propTypes = {
  text: string.isRequired,
  style: shape(),
};

Hello.defaultProps = {
  style: null,
};

export default Hello;
