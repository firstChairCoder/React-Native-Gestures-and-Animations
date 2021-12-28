import React, { useState } from "react";
import type { TextInputProps as RNTextInputProps } from "react-native";
import { StyleSheet, TextInput as RNTextInput } from "react-native";
import { Feather as Icon } from "@expo/vector-icons";

import theme, { Box } from "../Theme";

const SIZE = theme.borderRadii.m * 2;
const Valid = true;
const Invalid = false;
const Pristine = null;
type InputState = typeof Valid | typeof Invalid | typeof Pristine;

interface TextInputProps extends RNTextInputProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  icon: any;
  validator: (input: string) => boolean;
}

const TextInput = ({ icon, validator, ...props }: TextInputProps) => {
  const [input, setInput] = useState("");
  const [state, setState] = useState<InputState>(Pristine);

  const reColor: keyof typeof theme.colors =
    // eslint-disable-next-line no-nested-ternary
    state === Pristine ? "darkGray" : state === Valid ? "primary" : "danger";
  const color = theme.colors[reColor];

  const validate = () => {
    const valid = validator(input);
    setState(valid);
  };

  const onChangeText = (text: string) => {
    setInput(text);
    if (state !== Pristine) {
      validate();
    }
  };

  return (
    <Box
      flexDirection={"row"}
      alignItems={"center"}
      height={48}
      borderRadius={"s"}
      borderWidth={StyleSheet.hairlineWidth}
      borderColor={reColor}
    >
      <Box padding={"s"}>
        <Icon name={icon} size={16} {...{ color }} />
      </Box>

      <Box flex={1}>
        <RNTextInput
          underlineColorAndroid={"transparent"}
          placeholderTextColor={"#151624"}
          onBlur={validate}
          {...{ onChangeText }}
          {...props}
        />
      </Box>

      {(state === Valid || state === Invalid) && (
        <Box
          height={SIZE}
          width={SIZE}
          borderRadius={"m"}
          justifyContent={"center"}
          alignItems={"center"}
          backgroundColor={state === Valid ? "primary" : "danger"}
        >
          <Icon
            name={state === Valid ? "check" : "x"}
            color={"white"}
            size={16}
          />
        </Box>
      )}
    </Box>
  );
};

export default TextInput;
