import React, { useState } from "react";
import { View, StyleSheet, TextInput, Alert } from "react-native";
import firebase from "firebase";
import CircleButton from "../components/CircleButton";
import KeyBoardSafeView from "../components/KeyBoardSafeView";
import { translateErrors } from "../utils";

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  inputContainer: {
    flex: 1,
  },
  input: {
    flex: 1,
    textAlignVertical: "top",
    fontSize: 16,
    lineHeight: 24,
    paddingTop: 32,
    paddingBottom: 32,
    paddingHorizontal: 27,
  },
});

const { container, input, inputContainer } = styles;

const MemoEditScreen = ({ navigation, route }) => {
  const { id, bodyText } = route.params;
  const [body, setBody] = useState(bodyText);

  const handlePress = () => {
    const { currentUser } = firebase.auth();
    if (currentUser) {
      const db = firebase.firestore();
      const ref = db.collection(`users/${currentUser.uid}/memos`).doc(id);
      ref
        .set(
          {
            bodyText: body,
            updatedAt: new Date(),
          },
          { merge: true }
        )
        .then(() => {
          navigation.goBack();
        })
        .catch((err) => {
          const errMsg = translateErrors(err.code);
          Alert.alert(errMsg.title, errMsg.description);
        });
    }
  };

  return (
    <KeyBoardSafeView style={container}>
      <View style={inputContainer}>
        <TextInput
          value={body}
          onChangeText={(text) => setBody(text)}
          multiline
          style={input}
        />
      </View>
      <CircleButton name="check" onPress={handlePress} />
    </KeyBoardSafeView>
  );
};

export default MemoEditScreen;
