import React from "react";
import { View, Text, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  appbar: {
    width: "100%",
    height: 104,
    backgroundColor: "#D34668",
    justifyContent: "flex-end",
  },
  appbarInner: {
    alignItems: "center",
  },
  appbarTitle: {
    marginBottom: 8,
    fontSize: 22,
    fontWeight: "bold",
    lineHeight: 32,
    color: "#fff",
  },
  appbarRight: {
    position: "absolute",
    right: 19,
    bottom: 16,
    color: "#fff",
    opacity: 0.8,
  },
});

const { appbar, appbarInner, appbarTitle, appbarRight } = styles;

const AppBar = () => {
  return (
    <View style={appbar}>
      <View style={appbarInner}>
        <Text style={appbarTitle}>Memo App</Text>
        <Text style={appbarRight}>ログアウト</Text>
      </View>
    </View>
  );
};

export default AppBar;
