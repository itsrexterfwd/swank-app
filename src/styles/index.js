import { Dimensions } from "react-native";
import light_theme_colors from "./light_theme_colors";
import dark_theme_colors from "./dark_theme_colors";

const WINDOW_WIDTH = Dimensions.get("window").width;
const WINDOW_HEIGHT = Dimensions.get("window").height;

const colors = {
  light: light_theme_colors,
  dark: dark_theme_colors,
};

const font_size = {
  xxlarge: 40,
  xlarge: 30,
  large: 25,
  middle: 20,
  normal: 16,
  small: 13,
  xsmall: 11,
};

const iconSet = {
  // home: require("../assets/icons/home.png"),
};

const icon_size = {
  large: 35,
  normal: 24,
  small: 20,
};

const fonts = {
  regular: "Segoe UI",
  bold: "Segoe UI Bold",
};

const styles = {
  colors,
  icon_size,
  font_size,
  fonts,
  date_format: "YYYY-MM-DD",
  window_width: WINDOW_WIDTH,
  window_height: WINDOW_HEIGHT,
};

export default styles;
