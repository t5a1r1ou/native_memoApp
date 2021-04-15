import React from "react";
import { View, StyleSheet, ActivityIndicator } from "react-native";

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    width: "100%",
    height: "100%",
    top: 0,
    right: 0,
    left: 0,
    bottom: 0,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(255, 255, 255, 0.5)",
    zIndex: 5,
  },
  inner: {
    marginBottom: 80,
  },
});

const { container, inner } = styles;

const Loading = ({ isLoading }) => {
  return isLoading ? (
    <View style={container}>
      <View style={inner}>
        <ActivityIndicator size="large" color="#000" />
      </View>
    </View>
  ) : null;
};

export default Loading;
