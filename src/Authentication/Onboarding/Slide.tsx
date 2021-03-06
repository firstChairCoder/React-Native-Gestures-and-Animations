import React from "react";
// import type { ImageRequireSource } from "react-native";
import { View, Dimensions, StyleSheet } from "react-native";

import { Text } from "../../components";

const { width, height } = Dimensions.get("window");
export const SLIDE_HEIGHT = 0.61 * height;
// export const BORDER_RADIUS = 75;

const styles = StyleSheet.create({
  container: {
    width,
  },

  titleWrapper: {
    height: 100,
    justifyContent: "center",
  },
});

interface SlideProps {
  title: string;
  right?: boolean;
  // picture: {
  //   src: ImageRequireSource;
  //   width: number;
  //   height: number;
  // };
}

const Slide = ({ title, right }: SlideProps) => {
  const transform = [
    { translateY: (SLIDE_HEIGHT - 100) / 2 },
    { translateX: right ? width / 2 - 50 : -width / 2 + 50 },
    { rotate: right ? "-90deg" : "90deg" },
  ];
  return (
    <View style={styles.container}>
      <View style={[styles.titleWrapper, { transform }]}>
        <Text variant="hero">{title}</Text>
      </View>
    </View>
  );
};

export default Slide;

// import React from "react";
// import { Text, View, Dimensions, StyleSheet } from "react-native";

// const { width, height } = Dimensions.get("window");
// export const SLIDE_HEIGHT = height * 0.61;

// const styles = StyleSheet.create({
//   container: {
//     width,
//   },
//   titleWrapper: {
//     height: 100,
//     justifyContent: "center",
//   },
//   title: {
//     fontSize: 80,
//     lineHeight: 80,
//     fontFamily: "Roboto-Bold",
//     color: "#fff",
//     textAlign: "center",
//   },
// });

// interface SlideProps {
//   title: string;
//   right?: boolean;
// }

// const Slide = ({ title, right }: SlideProps) => {
//   const transform = [
//     { translateY: (SLIDE_HEIGHT - 100) / 2 },
//     { translateX: right ? width / 2 - 50 : -width / 2 + 50 },
//     { rotate: right ? "-90deg" : "90deg" },
//   ];

//   return (
//     <View style={styles.container}>
//       <View style={[styles.titleWrapper, { transform }]}>
//         <Text style={styles.title}>{title}</Text>
//       </View>
//     </View>
//   );
// };

// export default Slide;
