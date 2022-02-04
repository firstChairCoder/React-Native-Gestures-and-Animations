import React from "react";
import { Feather as Icon } from "@expo/vector-icons";
import { RectButton } from "react-native-gesture-handler";

import { Box, Text } from "../Theme";

interface CheckBoxProps {
  label: string;
  checked: boolean;
  onChange: () => void;
}

const CheckBox = ({ label, checked, onChange }: CheckBoxProps) => {
  // const [checked, setChecked] = useState(defaultValue);
  return (
    <RectButton
      onPress={
        () => onChange()
        // setChecked((c) => !c)
      }
      style={{ justifyContent: "center" }}
    >
      <Box flexDirection={"row"}>
        <Box
          height={20}
          width={20}
          justifyContent={"center"}
          alignItems={"center"}
          marginRight={"m"}
          backgroundColor={checked ? "primary" : "white"}
          borderRadius={"s"}
          borderWidth={1}
          borderColor={"primary"}
        >
          <Icon name={"check"} color={"white"} />
        </Box>
        <Text variant={"button"}>{label}</Text>
      </Box>
    </RectButton>
  );
};

export default CheckBox;
