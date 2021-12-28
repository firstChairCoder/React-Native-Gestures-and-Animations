import React from "react";
import { Dimensions, Image } from "react-native";

import { Button } from "../../components";
import type { Routes, StackNavigationProps } from "../../components/Navigation";
import theme, { Box, Text } from "../../components/Theme";

const picture = {
  src: require("../../assets/5.png"),
  width: 3169,
  height: 5048 / 1.2,
};

export const assets = [picture.src];

const { width } = Dimensions.get("window");

const Welcome = ({ navigation }: StackNavigationProps<Routes, "Welcome">) => {
  return (
    <Box flex={1} backgroundColor={"white"} marginTop={"xl"}>
      <Box
        flex={1}
        borderBottomRightRadius={"xl"}
        backgroundColor={"body"}
        alignItems={"center"}
        justifyContent={"flex-end"}
      >
        <Image
          style={{
            width: width - theme.borderRadii.m,
            height:
              ((width - theme.borderRadii.xl) * picture.height) / picture.width,
          }}
          resizeMode={"contain"}
          source={picture.src}
        />
      </Box>
      <Box flex={1} borderTopLeftRadius={"xl"}>
        <Box
          backgroundColor={"body"}
          position={"absolute"}
          top={0}
          left={0}
          right={0}
          bottom={0}
        />
        <Box
          flex={1}
          backgroundColor={"white"}
          padding={"l"}
          justifyContent={"space-evenly"}
          alignItems={"center"}
          borderTopLeftRadius={"xl"}
        >
          <Text variant={"title2"}>Let's get started</Text>
          <Text variant={"body"}>
            Login to your account below or sign up for an amazing experience
          </Text>

          <Button
            variant={"primary"}
            label={"Have an account? Login"}
            onPress={() => navigation.navigate("Login")}
          />
          <Button label={"Join us, it's free"} />
          <Button variant={"transparent"} label={"Forgot Password?"} />
        </Box>
      </Box>
    </Box>
  );
};

export default Welcome;
