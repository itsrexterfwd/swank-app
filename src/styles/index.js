import { Dimensions } from "react-native";
import light_theme_colors from "./light_theme_colors";
import dark_theme_colors from "./dark_theme_colors";

export const WINDOW_WIDTH = Dimensions.get("window").width;
export const WINDOW_HEIGHT = Dimensions.get("window").height;

export const COLORS = {
  light: light_theme_colors,
  dark: dark_theme_colors,
};

export const FONT_SIZE = {
  xxlarge: 40,
  xlarge: 30,
  large: 25,
  middle: 20,
  normal: 16,
  small: 13,
  xsmall: 11,
};

export const ICON_SIZE = {
  large: 35,
  normal: 24,
  small: 20,
};

export const SPACING = {
  xxlarge: 40,
  xlarge: 30,
  large: 25,
  middle: 20,
  normal: 16,
  small: 13,
  xsmall: 11,
  xxsmall: 5,
};

export const FONTS = {
  regular: "Segoe UI",
  bold: "Segoe UI Bold",
};
