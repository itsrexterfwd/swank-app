import { Dimensions } from "react-native";
import light_theme_colors from "./light_theme_colors";
import dark_theme_colors from "./dark_theme_colors";

export const WINDOW_WIDTH = Dimensions.get("window").width;
export const WINDOW_HEIGHT = Dimensions.get("window").height;

export const COLORS = {
  light: light_theme_colors,
  dark: dark_theme_colors,
  common: {
    blue: "#0094f4",
    white: "#FFF",
    dark_1: '#1a2545',
    hairline: '#d4d9e2',
  }
};

export const FONT_SIZE = {
  xxlarge: 40,
  xlarge: 30,
  large: 25,
  middle: 20,
  normal: 16,
  small: 13,
  xsmall: 11,
  xxsmall: 9,
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

export const MODE = {
  LIGHT: 1,
  DARK: 1,
}

export const FONTS = {
  regular: "Segoe UI",
  bold: "Segoe UI Bold",
};
