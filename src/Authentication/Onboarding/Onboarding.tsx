import React, { useRef } from "react";
import { Dimensions, StyleSheet, View } from "react-native";
import Animated, { multiply } from "react-native-reanimated";
import { interpolateColor, useScrollHandler } from "react-native-redash";

const BORDER_RADIUS = 75;
const { width } = Dimensions.get("window");

import Slide, { SLIDE_HEIGHT } from "./Slide";
import Subslide from "./Subslide";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  slider: {
    height: SLIDE_HEIGHT,
    borderBottomRightRadius: BORDER_RADIUS,
  },
  footer: {
    flex: 1,
  },
  footerContent: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "white",
    borderTopLeftRadius: BORDER_RADIUS,
  },
});
const slides = [
  {
    title: "Relaxed",
    subtitle: "Find Your Outfits",
    description:
      "Confused about your outfit? Don't worry! Find the best outfit here!",
    color: "#BFEAF5",
  },
  {
    title: "Playful",
    subtitle: "Hear it First, Wear it First",
    description:
      "Hating the clothes in your wardrobe? Explore hundreds of outfit ideas",
    color: "#BEECC4",
  },
  {
    title: "Eccentric",
    subtitle: "Your Style, Your Way",
    description:
      "Create your individual & unique style and look amazing everyday",
    color: "#FFE4D9",
  },
  {
    title: "Funky",
    subtitle: "Look Good, Feel Good",
    description:
      "Discover the latest trends in fashion and explore your personality",
    color: "#DFDFDF",
  },
];

const Onboarding = () => {
  const scroll = useRef<Animated.ScrollView>(null);
  const { scrollHandler, x } = useScrollHandler();
  const backgroundColor = interpolateColor(x, {
    inputRange: slides.map((_, i) => i * width),
    outputRange: slides.map((slide) => slide.color),
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  }) as any;
  return (
    <View style={styles.container}>
      <Animated.View style={[styles.slider, { backgroundColor }]}>
        <Animated.ScrollView
          ref={scroll}
          horizontal
          snapToInterval={width}
          decelerationRate={"fast"}
          showsHorizontalScrollIndicator={false}
          bounces={false}
          {...scrollHandler}
        >
          {slides.map(({ title }, index) => (
            <Slide key={index} right={!!(index % 2)} {...{ title }} />
          ))}
        </Animated.ScrollView>
      </Animated.View>
      <View style={styles.footer}>
        <Animated.View
          style={{ ...StyleSheet.absoluteFillObject, backgroundColor }}
        />

        <Animated.View
          style={[
            styles.footerContent,
            {
              width: width * slides.length,
              transform: [{ translateX: multiply(x, -1) }],
            },
          ]}
        >
          {slides.map(({ subtitle, description }, index) => (
            <Subslide
              key={index}
              onPress={() => {
                if (scroll.current) {
                  // console.log({ scrollTo: width * index });
                  scroll.current
                    .getNode()
                    .scrollTo({ x: width * (index + 1), animated: true });
                }
              }}
              last={index === slides.length - 1}
              {...{ subtitle, description }}
            />
          ))}
        </Animated.View>
      </View>
    </View>
  );
};

export default Onboarding;

// import React, { useRef } from "react";
// import { View, StyleSheet, Dimensions } from "react-native";
// import Animated, { multiply } from "react-native-reanimated";
// import { onScrollEvent, useValue, interpolateColor } from "react-native-redash";

// import Slide, { SLIDE_HEIGHT } from "./Slide";
// import Subslide from "./Subslide";

// const { width } = Dimensions.get("window");
// const BORDER_RADIUS = 75;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//   },
//   sliderWrapper: {
//     height: SLIDE_HEIGHT,
//     borderBottomRightRadius: BORDER_RADIUS,
//   },
//   footer: {
//     flex: 1,
//   },
//   footerContentWrapper: {
//     flex: 1,
//     flexDirection: "row",
//     backgroundColor: "white",
//     borderTopLeftRadius: BORDER_RADIUS,
//   },
// });

// const slides = [
//   {
//     title: "Relaxed",
//     subtitle: "Find Your Outfits",
//     description:
//       "Confused about your outfit? Don't worry! Find the best outfits here!",
//     color: "#BFEAF5",
//   },
//   {
//     title: "Playful",
//     subtitle: "Hear It First, Wear It First",
//     description:
//       "Hating the clothes in your wardrobe? Explore hundreds of outfit ideas",
//     color: "#BEECC4",
//   },
//   {
//     title: "Eccentric",
//     subtitle: "Your Style, Your Way",
//     description:
//       "Create your amazing and unique style and look amazing everyday",
//     color: "#FFE4D9",
//   },
//   {
//     title: "Funky",
//     subtitle: "Look Good, Feel Good",
//     description:
//       "Discover the latest trends in fashion and explore your personality",
//     color: "#FFDDDD",
//   },
// ];

// const Onboarding = () => {
//   const scroll = useRef<Animated.ScrollView>(null);
//   const x = useValue(0);

//   const onScroll = onScrollEvent({ x });

//   /* eslint-disable @typescript-eslint/no-explicit-any */
//   const backgroundColor = interpolateColor(x, {
//     inputRange: slides.map((_, i) => i * width),
//     outputRange: slides.map((slide) => slide.color),
//   }) as any;

//   return (
//     <View style={styles.container}>
//       <Animated.View style={[styles.sliderWrapper, { backgroundColor }]}>
//         <Animated.ScrollView
//           ref={scroll}
//           horizontal
//           snapToInterval={width}
//           decelerationRate={"fast"}
//           showsHorizontalScrollIndicator={false}
//           bounces={false}
//           scrollEventThrottle={1}
//           {...{ onScroll }}
//         >
//           {slides.map(({ title }, index) => (
//             <Slide key={index} right={!!(index % 2)} {...{ title }} />
//           ))}
//           {/* <Slide title="Relaxed" />
//           <Slide title="Playful" right />
//           <Slide title="Eccentric" />
//           <Slide title="Funky" right /> */}
//         </Animated.ScrollView>
//       </Animated.View>
//       <View style={styles.footer}>
//         <Animated.View
//           style={{ ...StyleSheet.absoluteFillObject, backgroundColor }}
//         />
//         <Animated.View
//           style={[
//             styles.footerContentWrapper,
//             {
//               width: width * slides.length,
//               flex: 1,
//               transform: [{ translateX: multiply(x, -1) }],
//             },
//           ]}
//         >
//           {slides.map(({ subtitle, description }, index) => (
//             <Subslide
//               key={index}
//               onPress={() => {
//                 if (scroll.current) {
//                   scroll.current
//                     .getNode()
//                     .scrollTo({ x: width * (index + 1), animated: true });
//                 }
//               }}
//               last={index === slides.length - 1}
//               {...{ subtitle, description }}
//             />
//           ))}
//         </Animated.View>
//       </View>
//     </View>
//   );
// };

// export default Onboarding;
