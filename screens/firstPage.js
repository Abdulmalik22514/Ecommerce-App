import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Spliff } from "../assets/svg";
import { CustomButton } from "../components/button";

export default function FirstPage({ navigation }) {
  return (
    <ImageBackground
      source={require("../assets/pictures/background.png")}
      style={styles.container}
    >
      <StatusBar style="light" />
      <Spliff style={styles.flower} />
      <Text style={styles.spliff}>Spliff</Text>
      <View style={styles.stay}>
        <Text style={styles.high}>Stay High. Stay Happy. Always.</Text>
      </View>
      <View style={styles.touches}>
        <CustomButton
          titleColor={true}
          isSmall
          title="Join"
          onPress={() => navigation.navigate("account")}
        />
        <CustomButton
          hasBorder
          isSmall
          title="Log In"
          onPress={() => navigation.navigate("select")}
        />
      </View>
      <View style={styles.option}>
        <Image source={require("../assets/pictures/google.png")} />
        <Text style={styles.continue}>Continue with google</Text>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    alignItems: "center",
  },
  continue: {
    color: "white",
    marginLeft: 10,
    fontSize: 16,
  },
  option: {
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "center",
    marginTop: 20,
  },
  flower: {
    marginTop: 250,
  },
  login: {
    fontSize: 15,
    color: "white",
    fontWeight: "bold",
  },

  touches: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "70%",
  },

  high: {
    color: "white",
    fontSize: 30,
    lineHeight: 40,
    textAlign: "center",
  },
  stay: {
    width: 180,
    marginTop: 20,
  },
  spliff: {
    color: "white",
    fontSize: 25,
    fontWeight: "bold",
  },
});
