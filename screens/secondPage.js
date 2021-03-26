import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Check, Spliff } from "../assets/svg";
import { CustomButton } from "../components/button";
import { CustomInput } from "../components/input";

export default function Account({ navigation }) {
  return (
    <View style={styles.container}>
      <StatusBar style="dark" />
      <Spliff style={styles.flower} fill={"#81AA66"} />
      <Text style={styles.spliff}>Spliff</Text>
      <Text style={styles.create}>Create your account</Text>

      <CustomInput placeHolder="dukauwa@example.com" label="EMAIL ADDRESS" />
      <CustomInput placeHolder="" secure label="PASSWORD" isSmall />
      <View style={styles.checkCont}>
        <TouchableOpacity style={styles.checkBox}>
          {true && <Check />}
        </TouchableOpacity>
        <Text style={styles.terms}>
          By creating an account you agree with our terms and conditions
        </Text>
      </View>
      <CustomButton
        title="Create an account"
        onPress={() => navigation.navigate("home")}
      />
      <View style={styles.member}>
        <Text>Already a member? </Text>
        <TouchableOpacity onPress={() => navigation.navigate("first")}>
          <Text style={styles.already}>Log in</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    paddingHorizontal: 25,
  },
  already: {
    color: "#81AA66",
  },
  member: {
    flexDirection: "row",
    marginTop: 30,
    alignSelf: "center",
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
  terms: {
    color: "grey",
    fontSize: 13,
  },
  checkBox: {
    width: 25,
    height: 25,
    backgroundColor: "transparent",
    borderWidth: 1,
    borderColor: "grey",
    borderRadius: 4,
    marginRight: 12,
    alignItems: "center",
    justifyContent: "center",
  },
  checkCont: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 25,
    width: "100%",
  },
  create: {
    fontSize: 35,
    alignSelf: "center",
    textAlign: "center",
    lineHeight: 40,
    width: 200,
  },
  spliff: {
    color: "#81AA66",
    fontSize: 23,
    fontWeight: "bold",
    alignSelf: "center",
  },
  flower: {
    marginTop: 60,
    color: "#81AA66",
    alignSelf: "center",
  },
});
