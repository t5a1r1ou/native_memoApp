import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Alert,
  FlatList,
} from "react-native";
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

const MemoList = ({ memos }) => {
  const navigation = useNavigation();

  const renderItem = ({ item }) => {
    return (
      <TouchableOpacity
        style={memoListItem}
        onPress={() => navigation.navigate("MemoDetail")}
      >
        <View>
          <Text style={memoListItemTitle} numberOfLines={1}>
            {item.bodyText}
          </Text>
          <Text style={memoListItemDate}>{String(item.updatedAt)}</Text>
        </View>
        <TouchableOpacity
          style={memoDelete}
          onPress={() => Alert.alert("Are you sure?")}
        >
          <Icon name="delete" color="#b0b0b0" size={24} />
        </TouchableOpacity>
      </TouchableOpacity>
    );
  };

  return (
    <View>
      <FlatList
        data={memos}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default MemoList;
