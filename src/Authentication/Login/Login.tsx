import React from "react";
import { Formik } from "formik";
import * as Yup from "yup";

import TextInput from "../../components/Form/TextInput";
import { Button, Container, Text } from "../../components";
import SocialLogin from "../../components/SocialLogin";
import { Box } from "../../components/Theme";
import CheckBox from "../../components/Form/CheckBox";

// const emailValidator = (email: string) =>
//   /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/.test(
//     email
//   );

// const passwordValidator = (password: string) => password.length >= 6;

const LoginSchema = Yup.object().shape({
  password: Yup.string()
    .min(6, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
});

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
        <Text variant={"body"} textAlign={"center"} marginBottom={"l"}>
          Use your credentials and login to your account
        </Text>
        <Formik
          initialValues={{ email: "", password: "", remember: true }}
          onSubmit={(values) => console.log(values)}
          validationSchema={LoginSchema}
        >
          {({
            handleChange,
            handleBlur,
            handleSubmit,
            values,
            errors,
            touched,
            setFieldValue,
          }) => (
            <Box>
              <Box marginBottom={"m"}>
                <TextInput
                  icon={"mail"}
                  placeholder={"Enter your email"}
                  onChangeText={handleChange("email")}
                  onBlur={handleBlur("email")}
                  error={errors.email}
                  touched={touched.email}
                  // validator={emailValidator}
                />
              </Box>

              <TextInput
                icon={"lock"}
                placeholder={"Enter your password"}
                onChangeText={handleChange("password")}
                onBlur={handleBlur("password")}
                error={errors.password}
                touched={touched.password}
                // validator={passwordValidator}
              />
              <Box flexDirection={"row"} justifyContent={"space-between"}>
                <CheckBox
                  label={"Remember me"}
                  checked={values.remember}
                  onChange={() => setFieldValue("remember", !values.remember)}
                />
                <Button variant={"transparent"} onPress={() => true}>
                  <Text color="primary">Forgot password</Text>
                </Button>
              </Box>
              <Box alignItems={"center"} marginTop={"m"}>
                <Button
                  variant={"primary"}
                  onPress={handleSubmit}
                  label={"Log into your account"}
                />
              </Box>
            </Box>
          )}
        </Formik>
      </Box>
    </Container>
  );
};

export default Login;
