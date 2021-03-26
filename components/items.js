import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Add } from "../assets/svg";

export const CustomItems = ({
  icon,
  title,
  blendType,
  money,
  onPress,
  onAdd,
}) => {
  return (
    <TouchableOpacity
      style={styles.itemHolder}
      onPress={onPress}
      activeOpacity={0.8}
    >
      <Image source={icon} style={styles.weeds} />
      <View>
        <Text style={[styles.location]}>{title} </Text>
        <Text style={[styles.indica]}>{blendType} </Text>
        <Text style={[styles.payment]}>{money} </Text>
      </View>
      <TouchableOpacity onPress={onAdd}>
        <Add />
      </TouchableOpacity>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  payment: {
    color: "green",
    fontWeight: "bold",
  },
  location: {
    fontSize: 10,
  },
  indica: {
    fontWeight: "bold",
    fontSize: 16,
  },
  weeds: {
    width: 60,
    height: 60,
  },
  itemHolder: {
    backgroundColor: "white",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    width: "100%",
    height: 90,
    borderRadius: 7,
    marginTop: 20,
    overflow: "hidden",
  },
});
