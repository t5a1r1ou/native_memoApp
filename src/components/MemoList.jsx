import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

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
});

const { memoListItem, memoListItemDate, memoListItemTitle } = styles;

const MemoList = () => {
  return (
    <View>
      <View style={memoListItem}>
        <View>
          <Text style={memoListItemTitle}>買い物リスト</Text>
          <Text style={memoListItemDate}>2021年4月8日 10:00</Text>
        </View>
        <TouchableOpacity>
          <Icon name="delete" color="#b0b0b0" size={24} />
        </TouchableOpacity>
      </View>
      <View style={memoListItem}>
        <View>
          <Text style={memoListItemTitle}>買い物リスト</Text>
          <Text style={memoListItemDate}>2021年4月8日 10:00</Text>
        </View>
        <TouchableOpacity>
          <Icon name="delete" color="#b0b0b0" size={24} />
        </TouchableOpacity>
      </View>
      <View style={memoListItem}>
        <View>
          <Text style={memoListItemTitle}>買い物リスト</Text>
          <Text style={memoListItemDate}>2021年4月8日 10:00</Text>
        </View>
        <TouchableOpacity>
          <Icon name="delete" color="#b0b0b0" size={24} />
        </TouchableOpacity>
      </View>
      <View style={memoListItem}>
        <View>
          <Text style={memoListItemTitle}>買い物リスト</Text>
          <Text style={memoListItemDate}>2021年4月8日 10:00</Text>
        </View>
        <TouchableOpacity>
          <Icon name="delete" color="#b0b0b0" size={24} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default MemoList;
