import React from "react";
import { StyleSheet, View } from "react-native";
import AppBar from "./src/components/AppBar";
import CircleButton from "./src/components/CircleButton";
import MemoList from "./src/components/MemoList";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F0F4F8",
  },
});

const { container } = styles;

const App = () => {
  return (
    <View style={container}>
      <AppBar />
      <MemoList />
      <CircleButton>+</CircleButton>
    </View>
  );
};

export default App;
