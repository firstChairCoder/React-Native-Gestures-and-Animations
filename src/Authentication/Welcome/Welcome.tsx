import React from "react";
import { Dimensions, Image } from "react-native";

import { Button } from "../../components";
import theme, { Box, Text } from "../../components/Theme";

const picture = {
  src: require("../../assets/3.png"),
  width: 447,
  height: 559,
};

export const assets = [picture.src];

const { width } = Dimensions.get("window");

const Welcome = () => {
  return (
    <Box flex={1} backgroundColor={"white"}>
      <Box
        flex={1}
        borderBottomRightRadius={"xl"}
        backgroundColor={"body"}
        alignItems={"center"}
        justifyContent={"flex-end"}
      >
        <Image
          style={{
            width: width - theme.borderRadii.xl,
            height:
              ((width - theme.borderRadii.xl) * picture.height) / picture.width,
          }}
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

          <Button variant={"primary"} label={"Have an account? Login"} />
          <Button label={"Join us, it's free"} />
          <Button variant={"transparent"} label={"Forgot Password?"} />
        </Box>
      </Box>
    </Box>
  );
};

export default Welcome;
