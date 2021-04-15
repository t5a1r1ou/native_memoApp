import React, { useEffect, useState } from "react";
import { View, StyleSheet, Alert } from "react-native";
import firebase from "firebase";

import MemoList from "../components/MemoList";
import CircleButton from "../components/CircleButton";
import LogOutButton from "../components/LogOutButton";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F0F4F8",
  },
});

const { container } = styles;

const MemoListScreen = ({ navigation }) => {
  const [memos, setMemos] = useState([]);
  useEffect(() => {
    navigation.setOptions({
      // eslint-disable-next-line react/display-name
      headerRight: () => <LogOutButton />,
    });
  }, []);

  useEffect(() => {
    const { currentUser } = firebase.auth();
    const db = firebase.firestore();
    let unsubscribe = () => {};
    if (currentUser) {
      const ref = db
        .collection(`users/${currentUser.uid}/memos`)
        .orderBy("updatedAt", "desc");
      unsubscribe = ref.onSnapshot(
        (snapshot) => {
          const userMemos = [];
          snapshot.forEach((doc) => {
            const { bodyText, updatedAt } = doc.data();
            userMemos.push({
              bodyText,
              id: doc.id,
              updatedAt: updatedAt.toDate(),
            });
          });
          setMemos(userMemos);
        },
        (err) => {
          console.log(err);
          Alert.alert("データの読み込みに失敗しました");
        }
      );
    }
    return unsubscribe;
  }, []);

  return (
    <View style={container}>
      <MemoList memos={memos} />
      <CircleButton
        name="plus"
        onPress={() => navigation.navigate("MemoCreate")}
      />
    </View>
  );
};

export default MemoListScreen;
