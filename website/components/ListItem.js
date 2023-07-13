import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import Icon from "./Icon";

const ListItem = ({ name, family, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.mainContainer}>
      <View style={styles.container}>
        <View style={{ width: 50, justifyContent: 'center', alignItems: 'center' }}>
          <Icon family={family} name={name} size={30} />
        </View>

        <View style={styles.textView}>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.family}>{family}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    width: "49.5%",
    marginRight: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  container: {
    textAlign: "center",
    paddingVertical: 15,
    justifyContent: "center",
    alignItems: "center",
    gap: 6,
    backgroundColor: "#fafafa",
    width: "100%",
  },
  textView: {
    flexDirection: "column",
  },
  name: {
    fontSize: 18,
    fontWeight: "500",
  },
  family: {
    fontSize: 13,
    fontWeight: "normal",
    color: "#7e7e7e",
  },
});

export default ListItem;
