import React from "react";
import { View, StyleSheet } from "react-native";
import MemoList from "../components/MemoList";
import CircleButton from "../components/CircleButton";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F0F4F8",
  },
});

const { container } = styles;

const MemoListScreen = ({ navigation }) => {
  return (
    <View style={container}>
      <MemoList />
      <CircleButton
        name="plus"
        onPress={() => navigation.navigate("MemoCreate")}
      />
    </View>
  );
};

export default MemoListScreen;
