import React from "react";
import { View, StyleSheet, TextInput } from "react-native";
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

const MemoCreateScreen = ({ navigation }) => {
  return (
    <KeyBoardSafeView style={container}>
      <View style={inputContainer}>
        <TextInput value="" multiline style={input} />
      </View>
      <CircleButton name="check" onPress={() => navigation.goBack()} />
    </KeyBoardSafeView>
  );
};

export default MemoCreateScreen;
