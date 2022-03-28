import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Onboarding from "./src/Authentication/Onboarding";
import { LoadAssets } from "./src/components";

const fonts = {
  "SFProDisplay-Regular": require("./assets/fonts/SFProDisplay-Regular.ttf"),
  "SFProDisplay-Semibold": require("./assets/fonts/SFProDisplay-Semibold.ttf"),
  "SFProDisplay-Bold": require("./assets/fonts/SF-Pro-Display-Bold.otf"),
};

const AuthenticationStack = createNativeStackNavigator();

const AuthenticationNavigator = () => {
  return (
    <AuthenticationStack.Navigator screenOptions={{ headerShown: false }}>
      <AuthenticationStack.Screen name={"Onboarding"} component={Onboarding} />
    </AuthenticationStack.Navigator>
  );
};

export default function App() {
  return (
    <LoadAssets {...{ fonts }}>
      <AuthenticationNavigator />
    </LoadAssets>
  );
}
