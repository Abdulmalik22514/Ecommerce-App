import { StatusBar } from "expo-status-bar";
import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Addition, Back, Forward, Heart, Subtraction } from "../assets/svg";

export default function Preview({ navigation, route }) {
  const { title } = route.params;
  const icon = getIcon(title);
  return (
    <View style={styles.container}>
      <StatusBar style={"dark"} />
      <View style={styles.topBox}>
        <View style={styles.header}>
          <TouchableOpacity
            style={styles.backIcon}
            onPress={() => navigation.pop()}
          >
            <Back />
          </TouchableOpacity>
          <View style={styles.heartShape}>
            <TouchableOpacity>
              <Heart />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate("status")}>
              <Forward />
            </TouchableOpacity>
          </View>
        </View>
        {icon}
      </View>

      <View style={styles.bottomBox}>
        <View style={styles.topContent}>
          <Text style={styles.farm}>PURE SUN FARMS</Text>
          <Text style={styles.indicaBlend}>Indica blend</Text>
          <View style={styles.percent}>
            <View style={styles.thc}>
              <Text style={styles.th}>THC</Text>
              <Text>12%</Text>
            </View>
            <View style={styles.cbd}>
              <Text style={styles.cb}>CBD</Text>
              <Text>12%</Text>
            </View>
          </View>
          <Text style={styles.long}>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters
          </Text>
          <View style={styles.addTotal}>
            <View style={styles.addSub}>
              <Addition />
              <Text style={styles.one}>01</Text>
              <Subtraction />
            </View>
            <View style={styles.amount}>
              <Text style={styles.dollar}>{`$${20}`}</Text>
              <Text style={styles.gram}>/GRAM</Text>
            </View>
          </View>
        </View>
        <View style={styles.line}></View>
        <View style={styles.bottomAdd}>
          <View style={styles.bottomTotal}>
            <Text style={styles.total}>TOTAL: </Text>
            <Text style={styles.dollar}>{` $${20}`}</Text>
          </View>
          <View style={styles.toBag}>
            <Text style={styles.addTo}>Add to bag</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const getIcon = (title) => {
  switch (title) {
    case "PURE SUN FARMS":
      return (
        <Image
          source={require("../assets/pictures/blend1.png")}
          style={styles.pure}
        />
      );
    case "OSUN SUN FARMS":
      return (
        <Image
          source={require("../assets/pictures/blend2.png")}
          style={styles.pure}
        />
      );
    case "OHIO SUN FARMS":
      return (
        <Image
          source={require("../assets/pictures/blend3.png")}
          style={styles.pure}
        />
      );
    case "ONDO SUN FARMS":
      return (
        <Image
          source={require("../assets/pictures/blend4.png")}
          style={styles.pure}
        />
      );
    default:
      return null;
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    // paddingHorizontal: 25,
    backgroundColor: "white",
  },
  total: {
    fontSize: 11,
  },
  addTo: {
    fontWeight: "bold",
    color: "white",
  },
  toBag: {
    width: "50%",
    backgroundColor: "#81AA66",
    height: 50,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  bottomAdd: {
    flexDirection: "row",
    // justifyContent: "space-between",
    paddingHorizontal: 20,
    alignItems: "center",
  },
  bottomTotal: {
    flexDirection: "row",
    width: "50%",
    alignItems: "center",
  },
  dollar: {
    fontSize: 25,
    color: "#81AA66",
    fontWeight: "bold",
  },
  gram: {
    fontSize: 10,
    marginBottom: 5,
  },
  topContent: {
    paddingHorizontal: 20,
  },
  one: {
    fontWeight: "bold",
    fontSize: 25,
  },
  line: {
    borderWidth: 0.2,
    borderColor: "black",
    marginBottom: 10,
  },
  addTotal: {
    flexDirection: "row",
    marginBottom: 15,
    alignItems: "center",
    // justifyContent: "space-between",
    // width: "100%",
  },
  amount: {
    flexDirection: "row",
    alignItems: "flex-end",
  },
  addSub: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: 110,
    marginRight: 125,
    alignItems: "center",
  },
  long: {
    fontSize: 12,
    color: "white",
    marginBottom: 10,
    lineHeight: 15,
    width: 319,
  },
  th: {
    fontWeight: "bold",
    marginRight: 7,
  },
  cb: {
    fontWeight: "bold",
    marginRight: 7,
  },
  percent: {
    flexDirection: "row",
    marginBottom: 10,
  },
  thc: {
    flexDirection: "row",
    width: 80,
    marginRight: 10,
  },
  cbd: {
    flexDirection: "row",
    width: 100,
  },
  indicaBlend: {
    color: "#81AA66",
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 7,
    width: 250,
    letterSpacing: 0.2,
  },
  topBox: {
    height: "45%",
  },
  farm: {
    fontSize: 10,
    marginBottom: 7,
  },
  bottomBox: {
    flex: 1,
    backgroundColor: "grey",
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    paddingTop: 20,
    paddingBottom: 20,
  },
  backIcon: {
    width: "80%",
  },
  pure: {
    width: 150,
    height: 150,
    alignSelf: "center",
    marginTop: 20,
  },
  heartShape: {
    flexDirection: "row",
    width: "20%",
    justifyContent: "space-between",
  },
  header: {
    flexDirection: "row",
    marginTop: 30,
    marginHorizontal: 25,
    justifyContent: "space-between",
  },
});
