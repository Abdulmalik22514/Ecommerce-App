import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Account from "./screens/secondPage";
import FirstPage from "./screens/firstPage";
import Home from "./screens/thirdPage";
import SelectPage from "./screens/fourthPage";
import Preview from "./screens/fifthPage";
import PaymentStatus from "./screens/sixthPage";

const Stack = createStackNavigator();

export default function Navigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode="none">
        <Stack.Screen name="select" component={SelectPage} />
        <Stack.Screen name="first" component={FirstPage} />
        <Stack.Screen name="account" component={Account} />
        <Stack.Screen name="home" component={Home} />
        {/* <Stack.Screen name="select" component={SelectPage} /> */}
        <Stack.Screen name="preview" component={Preview} />
        <Stack.Screen name="status" component={PaymentStatus} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
