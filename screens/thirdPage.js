import React from "react";
import {
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Heart, Menu, Search, Spliff } from "../assets/svg";
import { CustomImage } from "../components/image";

const Images = [
  {
    icon: require("../vape.png"),
    title: "Vapes",
  },
  {
    icon: require("../weed.png"),
    title: "Flowers",
  },
  {
    icon: require("../cookie.png"),
    title: "Edibles",
  },
];

export default function Home({ navigation }) {
  return (
    <View style={styles.container}>
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
          <TouchableOpacity onPress={() => navigation.navigate("select")}>
            <Search />
          </TouchableOpacity>
          <TouchableOpacity>
            <Heart />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image source={require("../man.png")} style={styles.man} />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.bgBox}>
        <ImageBackground
          source={require("../flowerBackground.png")}
          style={styles.back}
        >
          <Spliff fill={"#81AA66"} width={35} height={40} style={styles.off} />
          <Text style={styles.discount}>50% Off Everything</Text>
          <Text>with code: sativa 123</Text>
        </ImageBackground>
      </View>
      <Text style={styles.categories}>Top Categories</Text>
      <Text style={styles.mark}>
        Mark the occassion with these must have products
      </Text>
      <View style={styles.bottom}>
        {Images.map((item, index) => {
          return (
            <CustomImage key={index} icon={item.icon} title={item.title} />
          );
        })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  bottom: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
    alignItems: "center",
  },
  container: {
    flex: 1,
    paddingTop: 20,
    paddingHorizontal: 22,
  },
  mark: {
    color: "grey",
    textAlign: "center",
    alignSelf: "center",
    fontSize: 12,
    width: 300,
    marginTop: 10,
  },
  categories: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 20,
    marginTop: 10,
  },
  off: {
    marginTop: 50,
    marginBottom: 10,
  },
  discount: {
    fontSize: 30,
    fontWeight: "bold",
    lineHeight: 35,
    width: 180,
    textAlign: "center",
    marginBottom: 20,
  },
  bgBox: {
    width: "100%",
    height: 270,
    borderRadius: 5,
    backgroundColor: "transparent",
    borderColor: "grey",
    borderWidth: 0.5,
    overflow: "hidden",
    alignSelf: "center",
    // opacity: 0.6,
  },
  back: {
    width: "100%",
    height: "100%",
    alignItems: "center",
    // paddingTop: 50,
    opacity: 0.6,
  },
  sipif: {
    flexDirection: "row",
    alignItems: "center",
    width: "60%",
  },
  text: {
    fontWeight: "bold",
    fontSize: 18,
    marginLeft: 5,
  },
  icons: {
    flexDirection: "row",
    width: "40%",
    justifyContent: "space-between",
    alignItems: "center",
  },
  header: {
    flexDirection: "row",
    marginTop: 20,
    height: 50,
    alignItems: "center",
    width: "100%",
    marginBottom: 15,
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
});
