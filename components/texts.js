import React from "react";
import { StyleSheet, Text, TouchableOpacity, View, Image } from "react-native";

import {
  Heart,
  Menu,
  Search,
  Spliff,
  SearchIcon,
  Add,
  Subtraction,
  Addition,
} from "../assets/svg";

export const FlowerNames = ({ title, isActive, onPress }) => {
  return (
    <TouchableOpacity style={styles.cont} onPress={onPress}>
      <Text>{title}</Text>
      {isActive && <View style={styles.green}></View>}
    </TouchableOpacity>
  );
};

export const Header = () => {
  return (
    <View style={styles.header}>
      <View style={styles.sipif}>
        <TouchableOpacity>
          <Menu />
        </TouchableOpacity>
        <View style={styles.spiff}>
          <Spliff fill={"#81AA66"} />
          <Text style={styles.text}>Spliff</Text>
        </View>
      </View>
      <View style={styles.icons}>
        <TouchableOpacity>
          <Heart />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image source={require("../man.png")} style={styles.man} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontWeight: "bold",
    fontSize: 18,
    marginLeft: 5,
  },
  icons: {
    flexDirection: "row",
    width: "30%",
    justifyContent: "space-between",
    alignItems: "center",
  },

  man: {
    width: 35,
    height: 35,
  },

  spiff: {
    flexDirection: "row",
    width: 80,
    alignItems: "center",
    marginLeft: 25,
  },
  sipif: {
    flexDirection: "row",
    alignItems: "center",
    width: "70%",
  },
  header: {
    flexDirection: "row",
    marginTop: 15,
    height: 50,
    alignItems: "center",
    marginBottom: 10,
    marginHorizontal: 20,
  },
  cont: {
    height: 40,
    alignItems: "center",
    width: 90,
  },
  green: {
    width: 80,
    height: 3,
    backgroundColor: "green",
    marginTop: 5,
  },
});
