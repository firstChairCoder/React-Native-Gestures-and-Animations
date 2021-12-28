import React from "react";

import TextInput from "../../components/Form/TextInput";
import { Button, Container, Text } from "../../components";
import SocialLogin from "../../components/SocialLogin";
import { Box } from "../../components/Theme";
import CheckBox from "../../components/Form/CheckBox";

const emailValidator = (email: string) =>
  /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/.test(
    email
  );

const passwordValidator = (password: string) => password.length >= 6;

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
      <Box>
        <Text variant={"title1"} textAlign={"center"} marginBottom={"l"}>
          Welcome back
        </Text>
        <Text variant={"body"} textAlign={"center"}>
          Use your credentials and login to your account
        </Text>
        <Box marginBottom={"m"}>
          <TextInput
            icon={"mail"}
            placeholder={"Enter your email"}
            validator={emailValidator}
          />
        </Box>

        <TextInput
          icon={"lock"}
          placeholder={"Enter your email"}
          validator={passwordValidator}
        />
        <Box flexDirection={"row"} justifyContent={"space-between"}>
          <CheckBox label={"Remember me"} />
          <Button variant={"transparent"} onPress={() => true}>
            <Text color="primary">Forgot password</Text>
          </Button>
        </Box>
        <Box alignItems={"center"} marginTop={"m"}>
          <Button
            variant={"primary"}
            onPress={() => true}
            label={"Log into your account"}
          />
        </Box>
      </Box>
    </Container>
  );
};

export default Login;
