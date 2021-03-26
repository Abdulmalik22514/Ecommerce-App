import React from "react";
import { StyleSheet, TextInput, TouchableOpacity, Text } from "react-native";

export const CustomButton = ({
  title,
  titleColor,
  isSmall,
  style,
  hasBorder,
  onPress,
}) => {
  return (
    <TouchableOpacity
      style={[
        styles.account,
        isSmall && styles.smallButton,
        titleColor && styles.titleColorButton,
        hasBorder && styles.borderButton,
        style,
      ]}
      onPress={onPress}
    >
      <Text style={[styles.acct, titleColor && styles.titleColor]}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  borderButton: {
    backgroundColor: "transparent",
    borderWidth: 2,
    borderColor: "white",
  },
  titleColorButton: {
    backgroundColor: "white",
  },
  smallButton: {
    width: 120,
  },
  titleColor: {
    color: "#81AA66",
  },
  acct: {
    fontWeight: "bold",
    color: "white",
  },
  account: {
    backgroundColor: "#81AA66",
    height: 50,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 25,
  },
});
