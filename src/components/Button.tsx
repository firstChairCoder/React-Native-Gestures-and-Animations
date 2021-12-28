import { useTheme } from "@shopify/restyle";
import type { ReactNode } from "react";
import React from "react";
import { StyleSheet } from "react-native";
import { RectButton } from "react-native-gesture-handler";

import { Text } from "./Theme";
import type { Theme } from "./Theme";

const styles = StyleSheet.create({
  container: {
    borderRadius: 25,
    height: 50,
    width: 245,
    justifyContent: "center",
    alignItems: "center",
  },
});

interface ButtonProps {
  variant: "default" | "primary" | "transparent";
  label?: string;
  onPress?: () => void;
  children?: ReactNode;
}

const Button = ({ variant, label, onPress, children }: ButtonProps) => {
  const theme = useTheme<Theme>();
  const backgroundColor =
    // eslint-disable-next-line no-nested-ternary
    variant === "primary"
      ? theme.colors.primary
      : variant === "transparent"
      ? "transparent"
      : theme.colors.body;

  const color =
    variant === "primary" ? theme.colors.white : theme.colors.secondary;
  // const backgroundColor =
  //   variant === "primary" ? "#2CB9B0" : "rgba(12, 13, 52, 0.05)";
  // const color = variant === "primary" ? "white" : "#0C0D34";
  return (
    <RectButton
      style={[styles.container, { backgroundColor }]}
      {...{ onPress }}
    >
      {children ? (
        children
      ) : (
        <Text variant={"button"} style={{ color }}>
          {label}
        </Text>
      )}
    </RectButton>
  );
};

Button.defaultProps = { variant: "default" };

export default Button;
