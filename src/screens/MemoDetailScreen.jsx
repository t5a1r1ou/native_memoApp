import React from "react";
import { ScrollView, View, Text, StyleSheet } from "react-native";
import AppBar from "../components/AppBar";
import CircleButton from "../components/CircleButton";

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
    top: 160,
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

const MemoDetailScreen = () => {
  return (
    <View style={container}>
      <AppBar />
      <View style={memoHeader}>
        <Text style={memoTitle}>買い物リスト</Text>
        <Text style={memoDate}>2021年4月8日 10:00</Text>
      </View>
      <ScrollView style={memoBody}>
        <Text style={memoText}>
          samplesamplesamplesamplesamplesamplesamplesamplesamplesample sample
          sample sample sample sample sample sample sample sample sample
        </Text>
      </ScrollView>
      <CircleButton style={buttonPosition}>+</CircleButton>
    </View>
  );
};

export default MemoDetailScreen;
