import { Dimensions } from "react-native";
const { width, height } = Dimensions.get("window");

export const COLORS = {
  // black: "#1E1F20",
  black: "#090817",
  // black: "#BAC5E8",
  // white: "#FFFFFF",
  white: "#FEFCFB",
  // lightGray: "#ABAFB8",
  lightGray: "#BAC5E8",
  // lightGray: "#090817",
  // lightGray: "#a19f9f",
  gray: "#FAF5F0",
  // gray: "#BEC1D2",
  lightWhite: "#ccd1db",
};

export const SIZES = {
  // global sizes
  base: 8,
  font: 14,
  radius: 12,
  padding: 24,

  // font sizes
  navTitle: 25,
  h1: 30,
  h2: 22,
  h3: 16,
  h4: 14,
  h5: 12,
  body1: 30,
  body2: 20,
  body3: 16,
  body4: 14,
  body5: 12,

  // app dimensions
  width,
  height,
};

const appTheme = { COLORS, SIZES };

export default appTheme;
