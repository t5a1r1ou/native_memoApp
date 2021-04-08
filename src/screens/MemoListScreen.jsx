import React from "react";
import { View, StyleSheet } from "react-native";
import AppBar from "../components/AppBar";
import MemoList from "../components/MemoList";
import CircleButton from "../components/CircleButton";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F0F4F8",
  },
});

const { container } = styles;

const MemoListScreen = () => {
  return (
    <View style={container}>
      <AppBar />
      <MemoList />
      <CircleButton>+</CircleButton>
    </View>
  );
};

export default MemoListScreen;
