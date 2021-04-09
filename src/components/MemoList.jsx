import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";

import Icon from "./Icon";

const styles = StyleSheet.create({
  memoListItem: {
    backgroundColor: "#fff",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 16,
    paddingHorizontal: 19,
    alignItems: "center",
    borderBottomWidth: 1,
    borderColor: "rgba(0, 0, 0, 0.15)",
  },
  memoListItemTitle: {
    fontSize: 16,
    lineHeight: 32,
  },
  memoListItemDate: {
    fontSize: 12,
    lineHeight: 16,
    color: "#848484",
  },
  memoDelete: {
    padding: 8,
  },
});

const {
  memoListItem,
  memoListItemDate,
  memoListItemTitle,
  memoDelete,
} = styles;

const MemoList = () => {
  const navigation = useNavigation();
  return (
    <View>
      <TouchableOpacity
        style={memoListItem}
        onPress={() => navigation.navigate("MemoDetail")}
      >
        <View>
          <Text style={memoListItemTitle}>買い物リスト</Text>
          <Text style={memoListItemDate}>2021年4月8日 10:00</Text>
        </View>
        <TouchableOpacity
          style={memoDelete}
          onPress={() => Alert.alert("Are you sure?")}
        >
          <Icon name="delete" color="#b0b0b0" size={24} />
        </TouchableOpacity>
      </TouchableOpacity>
      <TouchableOpacity
        style={memoListItem}
        onPress={() => navigation.navigate("MemoDetail")}
      >
        <View>
          <Text style={memoListItemTitle}>買い物リスト</Text>
          <Text style={memoListItemDate}>2021年4月8日 10:00</Text>
        </View>
        <TouchableOpacity
          style={memoDelete}
          onPress={() => Alert.alert("Are you sure?")}
        >
          <Icon name="delete" color="#b0b0b0" size={24} />
        </TouchableOpacity>
      </TouchableOpacity>
      <TouchableOpacity
        style={memoListItem}
        onPress={() => navigation.navigate("MemoDetail")}
      >
        <View>
          <Text style={memoListItemTitle}>買い物リスト</Text>
          <Text style={memoListItemDate}>2021年4月8日 10:00</Text>
        </View>
        <TouchableOpacity
          style={memoDelete}
          onPress={() => Alert.alert("Are you sure?")}
        >
          <Icon name="delete" color="#b0b0b0" size={24} />
        </TouchableOpacity>
      </TouchableOpacity>
    </View>
  );
};

export default MemoList;
