import React, { useEffect, useState } from "react";
import { ScrollView, View, Text, StyleSheet } from "react-native";
import CircleButton from "../components/CircleButton";
import firebase from "firebase";
import { dateToString } from "../utils";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  memoHeader: {
    backgroundColor: "#D34668",
    height: 96,
    justifyContent: "center",
    paddingVertical: 24,
    paddingHorizontal: 19,
  },
  memoTitle: {
    color: "#fff",
    fontSize: 20,
    lineHeight: 32,
    fontWeight: "bold",
  },
  memoDate: {
    color: "#fff",
    fontSize: 12,
    lineHeight: 16,
  },
  memoBody: {
    paddingVertical: 32,
    paddingHorizontal: 27,
  },
  memoText: {
    fontSize: 16,
    lineHeight: 24,
  },
  buttonPosition: {
    top: 60,
    bottom: "auto",
  },
});

const {
  container,
  memoHeader,
  memoTitle,
  memoDate,
  memoBody,
  memoText,
  buttonPosition,
} = styles;

const MemoDetailScreen = ({ navigation, route }) => {
  const [memo, setMemo] = useState(null);
  const { id } = route.params;

  useEffect(() => {
    const { currentUser } = firebase.auth();
    let unsubscribe = () => {};
    if (currentUser) {
      const db = firebase.firestore();
      const ref = db.collection(`/users/${currentUser.uid}/memos`).doc(id);
      unsubscribe = ref.onSnapshot((doc) => {
        const { bodyText, updatedAt } = doc.data();
        setMemo({
          bodyText,
          id: doc.id,
          updatedAt: updatedAt.toDate(),
        });
      });
    }
    return unsubscribe;
  }, []);

  console.log(id);
  return (
    <View style={container}>
      <View style={memoHeader}>
        <Text style={memoTitle} numberOfLines={1}>
          {memo?.bodyText}
        </Text>
        <Text style={memoDate}>{dateToString(memo?.updatedAt)}</Text>
      </View>
      <ScrollView style={memoBody}>
        <Text style={memoText}>{memo?.bodyText}</Text>
      </ScrollView>
      <CircleButton
        style={buttonPosition}
        name="pencil"
        onPress={() => navigation.navigate("MemoEdit")}
      />
    </View>
  );
};

export default MemoDetailScreen;
