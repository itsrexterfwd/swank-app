import React from 'react';
import Button from "react-native-button";
import { Text, StyleSheet } from 'react-native';
import { COLORS, FONT_SIZE, MODE, SPACING } from '../../styles';

export default ({
    mode = MODE.LIGHT,
    t,
    children,
    text_props,
    color = COLORS.common.blue,
    size = FONT_SIZE.normal,
    style,
    ...props
}) => {
  const default_styles = {
    fontSize: size,
    color,
    fontWeight: '600',
  }
  return (
    <Button {...props} containerStyle={[styles.root, style]}>
      {!!t ? <Text {...text_props} style={[default_styles, text_props?.style]}>{t}</Text> : children}
    </Button>
  );
}

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
  },
});