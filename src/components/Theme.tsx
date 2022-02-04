// import type { BaseTheme } from "@shopify/restyle";
import { createBox, createText } from "@shopify/restyle";

const theme = {
  colors: {
    primary: "#2CB9B0",
    secondary: "#0C0D34",
    danger: "#FF0058",
    body: "rgba(12, 13, 52, 0.05)",
    text: "rgba(12, 13, 52, 0.7)",
    white: "white",
    gray: "#F4F0EF",
    darkGray: "#8A8D90",
  },
  spacing: {
    s: 8,
    m: 16,
    l: 24,
    xl: 40,
  },
  borderRadii: {
    "0": 0,
    s: 4,
    m: 10,
    l: 25,
    xl: 75,
  },
  textVariants: {
    hero: {
      fontSize: 70,
      lineHeight: 80,
      fontFamily: "Montserrat-Bold",
      color: "white",
      textAlign: "center",
    },
    title1: {
      fontSize: 28,
      fontFamily: "Montserrat-Medium",
      color: "secondary",
    },
    title2: {
      fontSize: 24,
      liineHeight: 30,
      fontFamily: "Montserrat-Medium",
      color: "secondary",
    },
    body: {
      fontSize: 16,
      lineHeight: 24,
      fontFamily: "Montserrat-Regular",
      color: "text",
    },
    button: {
      fontSize: 15,
      fontFamily: "Montserrat-Regular",
      textAlign: "center",
    },
  },
  breakpoints: {},
};

export type Theme = typeof theme;
export const Box = createBox<Theme>();
export const Text = createText<Theme>();
export default theme;
