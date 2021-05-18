import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from "@react-navigation/drawer";
import { Spliff } from "../assets/svg";
import { StatusBar } from "expo-status-bar";
import { TopNavigation } from "./utils";
import { FlowerNames } from "../components/texts";

export default function CustomDrawer(props) {
  return (
    <DrawerContentScrollView {...props}>
      <StatusBar style={"dark"} />
      <View style={styles.draw}>
        <View style={styles.spiff}>
          <Spliff fill={"#81AA66"} />
          <Text style={styles.text}>Spliff</Text>
        </View>
        <Image
          source={require("../assets/pictures/man.png")}
          style={styles.man}
        />
        <Text>dukauwa.du@gmail.com</Text>
      </View>
      <View style={styles.content}>
        <Text style={styles.explore}>Explore</Text>
        {TopNavigation.map((item, index) => {
          return <FlowerNames key={index} title={item.title} isStart />;
        })}
      </View>
      <TouchableOpacity>
        <Text style={styles.logout}>Log Out</Text>
      </TouchableOpacity>
    </DrawerContentScrollView>
  );
}

const styles = StyleSheet.create({
  explore: {
    fontSize: 18,
    color: "green",
  },
  logout: {
    color: "red",
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: 10,
    marginTop: 30,
  },
  content: {
    marginTop: 20,
    marginLeft: 10,
  },
  man: {
    width: 80,
    height: 80,
    marginBottom: 10,
  },
  draw: {
    alignItems: "center",
  },
  spiff: {
    flexDirection: "row",
    width: 80,
    alignItems: "center",
    marginTop: 25,
    marginBottom: 10,
    alignSelf: "center",
  },
  text: {
    fontWeight: "bold",
    fontSize: 18,
    marginLeft: 5,
  },
});
