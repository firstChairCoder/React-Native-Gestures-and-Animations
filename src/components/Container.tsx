import type { ReactNode } from "react";
import React from "react";
import { Dimensions, Image, StatusBar, StyleSheet } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import theme, { Box } from "./Theme";

interface ContainerProps {
  children: ReactNode;
  footer: ReactNode;
}

export const assets = [require("../assets/pattern1.png")];

const window = Dimensions.get("window");
const width = (window.width * window.scale) / 2;
const aspectRatio = 1023 / 1535 / 1.25;
const height = width * aspectRatio;

const Container = ({ children, footer }: ContainerProps) => {
  const insets = useSafeAreaInsets();

  return (
    <Box flex={1} backgroundColor={"secondary"}>
      <StatusBar barStyle={"light-content"} />
      <Box backgroundColor={"white"}>
        <Box
          borderBottomLeftRadius={"xl"}
          overflow={"hidden"}
          height={height * 0.61}
        >
          <Image
            style={{
              width,
              height,
              borderBottomLeftRadius: theme.borderRadii.xl,
            }}
            source={assets[0]}
          />
        </Box>
      </Box>
      <Box flex={1} overflow={"hidden"}>
        <Image
          style={{
            ...StyleSheet.absoluteFillObject,
            width,
            height,
            top: -height * 0.61,
          }}
          source={assets[0]}
        />
        <Box
          flex={1}
          backgroundColor={"white"}
          padding={"l"}
          borderRadius={"xl"}
          borderTopLeftRadius={"0"}
        >
          {children}
        </Box>
      </Box>
      <Box backgroundColor={"secondary"} paddingTop={"m"}>
        {footer}
        <Box height={Math.max(insets.bottom, 16)} />
      </Box>
    </Box>
  );
};

export default Container;
