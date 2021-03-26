import React from "react";
import { StyleSheet, TextInput, View, Text } from "react-native";

export const CustomInput = ({
  placeHolder,
  style,
  type,
  onChange,
  secure,
  value,
  label,
  isSmall,
}) => {
  return (
    <View style={[styles.container, style]}>
      <View style={[styles.address, isSmall && styles.smallView]}>
        <Text style={styles.email}>{label}</Text>
      </View>
      <TextInput
        value={value}
        keyboardType={type}
        style={styles.input}
        placeholder={placeHolder}
        placeholderTextColor="black"
        onChangeText={onChange}
        secureTextEntry={secure}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  smallView: {},
  email: {
    color: "white",
    fontSize: 10,
    fontWeight: "bold",
  },
  address: {
    backgroundColor: "#81AA66",
    paddingHorizontal: 10,
    height: 20,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    left: 13,
    top: -10,
    zIndex: 100,
  },
  container: {
    marginTop: 30,
  },
  input: {
    fontSize: 15,
    borderWidth: 1,
    fontWeight: "700",
    borderColor: "#999999",
    // justifyContent: "center",
    width: "100%",
    height: 50,
    padding: 10,
    borderRadius: 5,
    // textAlign: "center",
    // marginTop:40,
    // color:'white',
  },
});
