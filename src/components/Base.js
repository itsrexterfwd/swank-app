import React from "react";
import {
  ScrollView,
  Platform,
} from "react-native";
import Footer from "./Footer";
import Body from "./Body";
import Box from "./Box";
import { WINDOW_HEIGHT } from "../styles";

const Base = ({
  scroll = true,
  footer = true,
  ...props
}) => {
  return (
    <ScrollView
      scrollEnabled={scroll}
      contentInsetAdjustmentBehavior={Platform.OS === 'ios' ? "automatic" : undefined}
      style={{ flex: 1, }}
    >
      <Box>
        <Body>
          {props.children}
        </Body>
        {footer && <Footer />}
      </Box>
    </ScrollView>
  );
}

export default Base;