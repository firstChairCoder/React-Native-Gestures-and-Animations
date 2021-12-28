import React from "react";
import { View } from "react-native";

import { Button, Container, Text } from "../../components";
import SocialLogin from "../../components/SocialLogin";
import { Box } from "../../components/Theme";

const Login = () => {
  const footer = (
    <>
      <SocialLogin />
      <Box alignItems={"center"}>
        <Button
          variant={"transparent"}
          onPress={() => console.warn("SignUp pressed!")}
        >
          <Box flexDirection={"row"} justifyContent={"center"}>
            <Text variant={"button"} color={"white"}>
              Don't have an account?
            </Text>
            <Text marginLeft={"s"} variant={"button"} color={"primary"}>
              Sign up here
            </Text>
          </Box>
        </Button>
      </Box>
    </>
  );

  return (
    <Container {...{ footer }}>
      <View />
    </Container>
  );
};

export default Login;
