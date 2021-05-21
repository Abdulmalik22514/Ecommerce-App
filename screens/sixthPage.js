import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Checked } from "../assets/svg";

export default function PaymentStatus({ navigation }) {
  return (
    <View style={styles.container}>
      <StatusBar style={"light"} />
      <View style={styles.circle}>
        <Checked />
      </View>
      <Text style={styles.successful}>Payment sucessful</Text>
      <Text style={styles.readable}>
        It is a long established fact that a reader will be distracted by the
        readable content of a page when looking at its layout. The point of
        using Lorem Ipsum is that it has a more-or-less normal distribution of
        letters
      </Text>
      <TouchableOpacity
        style={styles.continue}
        activeOpacity={0.6}
        onPress={() => navigation.pop()}
      >
        <Text style={styles.shopping}>Continue shopping</Text>
      </TouchableOpacity>
      <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={(values) => console.log(values)}
      >
        {({ handleChange, handleBlur, handleSubmit, values }) => (
          <>
            <TextInput
              name="email"
              placeholder="Email Address"
              style={styles.textInput}
              onChangeText={handleChange("email")}
              onBlur={handleBlur("email")}
              value={values.email}
              keyboardType="email-address"
            />
            <TextInput
              name="password"
              placeholder="Password"
              style={styles.textInput}
              onChangeText={handleChange("password")}
              onBlur={handleBlur("password")}
              value={values.password}
              secureTextEntry
            />
            <Button onPress={handleSubmit} title="Submit" />
          </>
        )}
      </Formik>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#81AA66",
    paddingTop: 20,
    alignItems: "center",
    paddingHorizontal: 20,
  },
  shopping: {
    color: "#81AA66",
    fontSize: 15,
    fontWeight: "bold",
  },
  continue: {
    backgroundColor: "white",
    width: "100%",
    height: 45,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  readable: {
    color: "white",
    fontSize: 13,
    textAlign: "center",
    lineHeight: 20,
    marginBottom: 40,
  },
  successful: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 40,
  },
  circle: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: "grey",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 150,
    marginBottom: 20,
  },
});
