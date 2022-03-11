import React from "react";
import {
  ScrollView,
  Platform,
} from "react-native";
import Footer from "./Footer";
import Body from "./Body";

const Base = ({
  scroll = true,
  footer = true,
  ...props
}) => {
  return (
    <ScrollView
      scrollEnabled={scroll}
      contentInsetAdjustmentBehavior={Platform.OS === 'ios' ? "automatic" : undefined}
      style={{ flex: 1 }}
    >
      <>
        <Body>
          {props.children}
        </Body>
        {footer && <Footer />}
      </>
    </ScrollView>
  );
}

export default Base;