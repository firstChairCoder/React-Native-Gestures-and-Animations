import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Onboarding from "./src/Authentication/Onboarding";
import { LoadAssets } from "./src/components";

const fonts = {
   "Roboto-Regular": require("./assets/fonts/Roboto-Regular.ttf"),
   "Roboto-Medium": require("./assets/fonts/Roboto-Medium.ttf"),
   "Roboto-Bold": require("./assets/fonts/Roboto-Bold.ttf"),
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
