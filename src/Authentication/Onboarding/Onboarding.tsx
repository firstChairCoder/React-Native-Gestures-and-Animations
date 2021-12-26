import React, { useRef } from "react";
import { Dimensions, StyleSheet, View, Image } from "react-native";
import Animated, {
  divide,
  Extrapolate,
  interpolate,
  multiply,
} from "react-native-reanimated";
import { interpolateColor, useScrollHandler } from "react-native-redash";

import { theme } from "../../components";
import type { Routes, StackNavigationProps } from "../../components/Navigation";

import Slide, { SLIDE_HEIGHT } from "./Slide";
import Subslide from "./Subslide";
import Dot from "./Dot";

// const BORDER_RADIUS = 75;
const { width } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  underlay: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: "flex-end",
    alignItems: "center",
    borderBottomRightRadius: theme.borderRadii.xl,
    overflow: "hidden",
  },
  slider: {
    height: SLIDE_HEIGHT,
    borderBottomRightRadius: theme.borderRadii.xl,
  },
  footer: {
    flex: 1,
  },
  footerContent: {
    flex: 1,
    backgroundColor: "white",
    borderTopLeftRadius: theme.borderRadii.xl,
  },
  pagination: {
    ...StyleSheet.absoluteFillObject,
    flexDirection: "row",
    height: theme.borderRadii.xl,
    justifyContent: "center",
    alignItems: "center",
  },
});

const slides = [
  {
    title: "Relaxed",
    subtitle: "Find Your Outfits",
    description:
      "Confused about your outfit? Don't worry! Find the best outfit here!",
    color: "#BFEAF5",
    picture: {
      src: require("../../assets/1.png"),
      width: 730,
      height: 1095,
    },
  },
  {
    title: "Playful",
    subtitle: "Hear it First, Wear it First",
    description:
      "Hating the clothes in your wardrobe? Explore hundreds of outfit ideas",
    color: "#BEECC4",
    picture: {
      src: require("../../assets/2.png"),
      width: 612,
      height: 408,
    },
  },
  {
    title: "Eccentric",
    subtitle: "Your Style, Your Way",
    description:
      "Create your individual & unique style and look amazing everyday",
    color: "#FFE4D9",
    picture: {
      src: require("../../assets/3.png"),
      width: 447,
      height: 559,
    },
  },
  {
    title: "Funky",
    subtitle: "Look Good, Feel Good",
    description:
      "Discover the latest trends in fashion and explore your personality",
    color: "#DFDFDF",
    picture: {
      src: require("../../assets/4.png"),
      width: 447,
      height: 559,
    },
  },
];

export const assets = slides.map((slide) => slide.picture.src);

const Onboarding = ({
  navigation,
}: StackNavigationProps<Routes, "Onboarding">) => {
  // const x = useValue(0);
  const scroll = useRef<Animated.ScrollView>(null);
  // const onScroll = onScrollEvent({ x });
  const { scrollHandler, x } = useScrollHandler();

  const backgroundColor = interpolateColor(x, {
    inputRange: slides.map((_, i) => i * width),
    outputRange: slides.map((slide) => slide.color),
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  }) as any;

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.slider, { backgroundColor }]}>
        {slides.map(({ picture }, index) => {
          const opacity = interpolate(x, {
            inputRange: [
              (index - 0.5) * width,
              index * width,
              (index + 0.5) * width,
            ],
            outputRange: [0, 1, 0],
            extrapolate: Extrapolate.CLAMP,
          });
          return (
            <Animated.View style={[styles.underlay, { opacity }]} key={index}>
              <Image
                style={{
                  width: width - theme.borderRadii.xl,
                  height:
                    ((width - theme.borderRadii.xl) * picture.height) /
                    picture.width,
                }}
                source={picture.src}
              />
            </Animated.View>
          );
        })}

        <Animated.ScrollView
          ref={scroll}
          horizontal
          snapToInterval={width}
          decelerationRate={"fast"}
          showsHorizontalScrollIndicator={false}
          bounces={false}
          // scrollEventThrottle={1}
          {...scrollHandler}
        >
          {slides.map(({ title, picture }, index) => (
            <Slide key={index} right={!!(index % 2)} {...{ title, picture }} />
          ))}
        </Animated.ScrollView>
      </Animated.View>

      <View style={styles.footer}>
        <Animated.View
          style={{ ...StyleSheet.absoluteFillObject, backgroundColor }}
        />

        <Animated.View style={styles.footerContent}>
          <View style={styles.pagination}>
            {slides.map((_, index) => (
              <Dot
                key={index}
                currentIndex={divide(x, width)}
                {...{ index, x }}
              />
            ))}
          </View>
          <Animated.View
            style={{
              flex: 1,
              flexDirection: "row",
              width: width * slides.length,
              transform: [{ translateX: multiply(x, -1) }],
            }}
          >
            {slides.map(({ subtitle, description }, index) => {
              const last = index === slides.length - 1;
              return (
                <Subslide
                  key={index}
                  onPress={() => {
                    // if (scroll.current) {
                    if (last) {
                      navigation.navigate("Welcome");
                    } else {
                      // console.log({ scrollTo: width * index });
                      scroll.current
                        ?.getNode()
                        .scrollTo({ x: width * (index + 1), animated: true });
                    }
                  }}
                  last={index === slides.length - 1}
                  {...{ subtitle, description }}
                />
              );
            })}
          </Animated.View>
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
