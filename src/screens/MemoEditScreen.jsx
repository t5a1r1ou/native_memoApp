import React from "react";
import { View, StyleSheet, TextInput } from "react-native";
import CircleButton from "../components/CircleButton";
import KeyBoardSafeView from "../components/KeyBoardSafeView";

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  inputContainer: {
    paddingHorizontal: 27,
    paddingVertical: 32,
    flex: 1,
  },
  input: {
    flex: 1,
    textAlignVertical: "top",
    fontSize: 16,
    lineHeight: 24,
  },
});

const { container, input, inputContainer } = styles;

const MemoEditScreen = ({ navigation }) => {
  return (
    <KeyBoardSafeView style={container}>
      <View style={inputContainer}>
        <TextInput value="買い物リスト" multiline style={input} />
      </View>
      <CircleButton name="check" onPress={() => navigation.goBack()} />
    </KeyBoardSafeView>
  );
};

export default MemoEditScreen;
