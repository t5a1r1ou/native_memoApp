import React, { useState } from "react";
import { View, StyleSheet, TextInput } from "react-native";
import CircleButton from "../components/CircleButton";
import KeyBoardSafeView from "../components/KeyBoardSafeView";
import firebase from "firebase";

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
  const [bodyText, setBodyText] = useState("");
  const handlePress = () => {
    const { currentUser } = firebase.auth();
    const db = firebase.firestore();
    const ref = db.collection(`users/${currentUser.uid}/memos`);
    ref
      .add({
        bodyText,
        updatedAt: new Date(),
      })
      .then((docRef) => {
        console.log("Created!", docRef.id);
        navigation.goBack();
      })
      .catch((err) => console.log("Error", err));
  };
  return (
    <KeyBoardSafeView style={container}>
      <View style={inputContainer}>
        <TextInput
          value={bodyText}
          onChangeText={(text) => setBodyText(text)}
          multiline
          style={input}
          autoFocus
        />
      </View>
      <CircleButton name="check" onPress={handlePress} />
    </KeyBoardSafeView>
  );
};

export default MemoCreateScreen;
