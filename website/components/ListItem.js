import React from "react";
import { StyleSheet, View, Text } from "react-native";
import Icon from "./Icon";
import PressableOpacity from "./PressableOpacity";

const ListItem = ({ name, family, onPress }) => {
  return (
    <PressableOpacity onPress={onPress} style={{ flex: 1 }}>
      <View style={styles.container}>
        <View style={{ width: 50, justifyContent: 'center', alignItems: 'center' }}>
          <Icon family={family} name={name} size={30} />
        </View>
        <View style={styles.textView}>
          <Text numberOfLines={1} style={styles.name}>{name}</Text>
          <Text numberOfLines={1} style={styles.family}>{family}</Text>
        </View>
      </View>
    </PressableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    paddingLeft: 20,
    paddingVertical: 15,
    alignItems: "center",
    borderBottomWidth: 1,
    borderRightWidth: 1,
    borderColor: "#e3e3e3",
  },
  textView: {
    flexDirection: "column",
    marginLeft: 20,
    marginRight: 10,
    flex: 1,
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
  },
  family: {
    fontSize: 13,
    fontWeight: "normal",
  },
});

export default ListItem;
