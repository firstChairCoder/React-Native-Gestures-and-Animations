import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { ThemeProvider } from "@shopify/restyle";

import {
  Onboarding,
  Welcome,
  assets as authenticationAssets,
} from "./src/Authentication";
import { LoadAssets, theme } from "./src/components";
import type { Routes } from "./src/components/Navigation";

const assets = [...authenticationAssets];

const fonts = {
  "Montserrat-Regular": require("./assets/fonts/Montserrat-Regular.ttf"),
  "Montserrat-Medium": require("./assets/fonts/Montserrat-Medium.ttf"),
  "Montserrat-Bold": require("./assets/fonts/Montserrat-Bold.ttf"),
};

const AuthenticationStack = createStackNavigator<Routes>();

const AuthenticationNavigator = () => {
  return (
    <AuthenticationStack.Navigator screenOptions={{ headerShown: false }}>
      <AuthenticationStack.Screen name={"Onboarding"} component={Onboarding} />
      <AuthenticationStack.Screen name={"Welcome"} component={Welcome} />
    </AuthenticationStack.Navigator>
  );
};

export default function App() {
  return (
    <ThemeProvider {...{ theme }}>
      <LoadAssets {...{ fonts, assets }}>
        <AuthenticationNavigator />
      </LoadAssets>
    </ThemeProvider>
  );
}

// import * as React from "react";
// import { createStackNavigator } from "@react-navigation/stack";

// import { Onboarding } from "./src/Authentication";
// import { LoadAssets } from "./src/components";

// const fonts = {
//   "Roboto-Regular": require("./assets/fonts/Roboto-Regular.ttf"),
//   "Roboto-Medium": require("./assets/fonts/Roboto-Medium.ttf"),
//   "Roboto-Bold": require("./assets/fonts/Roboto-Bold.ttf"),
// };

// const AuthenticationStack = createStackNavigator();

// const AuthenticationNavigator = () => {
//   return (
//     <AuthenticationStack.Navigator screenOptions={{ headerShown: false }}>
//       <AuthenticationStack.Screen name={"Onboarding"} component={Onboarding} />
//     </AuthenticationStack.Navigator>
//   );
// };

// export default function App() {
//   return (
//     <LoadAssets {...{ fonts }}>
//       <AuthenticationNavigator />
//     </LoadAssets>
//   );
// }

// // import type { FC } from "react";
// // import * as React from "react";
// // import { useFonts } from "@use-expo/font";
// // import AppLoading from "expo-app-loading";
// // import { View, Text } from "react-native";

// // interface Props {
// //   fontFamily: string;
// // }

// // const customFonts = {
// //   "SF-Pro-Text-Regular": require("../../assets/fonts/SF-Pro-Text-Regular"),
// //   "SF-Pro-Text-Bold": require("../../assets/fonts/SF-Pro-Text-Bold"),
// //   "SF-Pro-Text-Semibold": require("../../assets/fonts/SF-Pro-Text-Semibold"),
// // };

// // const App: FC<Props> = () => {
// //   const [isLoaded] = useFonts(customFonts);

// //   if (!isLoaded) {
// //     return <AppLoading />;
// //   }
// //   return (
// //     <View
// //       style={{
// //         flex: 1,
// //         backgroundColor: "#fff",
// //         alignItems: "center",
// //         justifyContent: "center",
// //       }}
// //     >
// //       <Text style={{ fontFamily: "SF-Pro-Text-Bold"}}>Open up App.js</Text>
// //     </View>
// //   );
// // };

// // export default App;

// // import type { FC } from "react";
// // import React from "react";
// // import {
// //   SafeAreaView,
// //   View,
// //   Text,
// //   StyleSheet,
// //   Platform,
// //   StatusBar,
// // } from "react-native";

// // const styles = StyleSheet.create({
// //   container: {
// //     flex: 1,
// //     backgroundColor: "#F1E8E6",
// //     alignItems: "center",
// //     paddingHorizontal: 10,
// //   },
// //   spacer: {
// //     flex: 1,
// //     alignItems: "center",
// //     justifyContent: "center",
// //   },
// //   whiteWrap: {
// //     backgroundColor: "#FFF",
// //     shadowColor: "#F55951",
// //     shadowOffset: { width: 0, height: 2 },
// //     shadowOpacity: 0.1,
// //     shadowRadius: 10,
// //     borderRadius: 15,
// //     paddingHorizontal: 20,
// //     paddingVertical: 25,
// //     alignItems: "flex-start",
// //     justifyContent: "space-between",
// //   },
// //   title: {
// //     marginBottom: 16,
// //     fontWeight: "bold",
// //     fontSize: 18,
// //     color: "#111127",
// //   },
// //   badgeRow: {
// //     flexDirection: "row",
// //     alignItems: "center",
// //     width: "100%",
// //   },
// //   badge: {
// //     backgroundColor: "#FAF2F0",
// //     borderWidth: 1,
// //     borderColor: "#EDD2CB",
// //     borderStyle: "solid",
// //     borderRadius: 22,
// //     paddingHorizontal: 20,
// //     paddingVertical: 10,
// //   },
// //   badgeText: {
// //     color: "#111127",
// //   },
// //   selected: {
// //     backgroundColor: "#F55951",
// //     shadowColor: "#F55951",
// //     shadowOffset: { width: 0, height: 2 },
// //     shadowOpacity: 0.3,
// //     shadowRadius: 10,
// //     borderColor: "#F55951",
// //   },
// //   selectedText: {
// //     color: "#FFF",
// //   },
// // });

// // interface Props {
// //   children: string;
// //   selected?: boolean;
// // }

// // const Badge: FC<Props> = ({ children, selected }) => {
// //   return (
// //     <View style={[styles.badge, selected && styles.selected]}>
// //       <Text style={[styles.badgeText, selected && styles.selectedText]}>
// //         {children}
// //       </Text>
// //     </View>
// //   );
// // };

// // export default function App() {
// //   return (
// //     <SafeAreaView
// //       style={{
// //         flex: 1,
// //         backgroundColor: "#FFF",
// //         paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
// //       }}
// //     >
// //       <View style={styles.container}>
// //         <View style={styles.spacer}>
// //           <View style={styles.whiteWrap}>
// //             <Text style={styles.title}>Difficulty</Text>
// //             <View style={styles.badgeRow}>
// //               <Badge>Easy</Badge>
// //               <View style={{ paddingHorizontal: 10 }}>
// //                 <Badge selected>Medium</Badge>
// //               </View>
// //               <Badge>Hard</Badge>
// //             </View>
// //           </View>
// //         </View>
// //       </View>
// //     </SafeAreaView>
// //   );
// // }
