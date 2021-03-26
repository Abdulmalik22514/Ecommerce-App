import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

export const CustomImage = ({ icon, title }) => {
  return (
    <View>
      <Image source={icon} style={styles.pix} />
      <Text style={styles.texts}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  texts: {
    alignSelf: "center",
  },
  pix: {
    width: 80,
    height: 80,
    marginBottom: 10,
  },
});
