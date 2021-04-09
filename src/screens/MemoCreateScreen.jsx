import React from "react";
import {
  View,
  StyleSheet,
  TextInput,
} from "react-native";
import AppBar from "../components/AppBar";
import CircleButton from "../components/CircleButton";
import KeyBoardSafeView from "../components/KeyBoardSafeView";

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  inputContainer: {
    flex: 1,
    paddingHorizontal: 27,
    paddingVertical: 32,
  },
  input: {
    flex: 1,
    textAlignVertical: "top",
    fontSize: 16,
    lineHeight: 24,
  },
});

const { container, input, inputContainer } = styles;

const MemoCreateScreen = () => {
  return (
    <KeyBoardSafeView style={container}>
      <AppBar />
      <View style={inputContainer}>
        <TextInput value="" multiline style={input} />
      </View>
      <CircleButton name="check" />
    </KeyBoardSafeView>
  );
};

export default MemoCreateScreen;
