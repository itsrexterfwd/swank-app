import React from 'react';
import Button from "react-native-button";
import { Text, StyleSheet } from 'react-native';
import { COLORS, MODE, SPACING } from '../../styles';

export default ({
  mode = MODE.LIGHT,
  t,
  children,
  text_props,
  style,
  fullwidth,
  ...props
}) => {
  const default_root = {}
  if (fullwidth) {
    default_root.width = '100%';
  }
  return (
    <Button {...props} containerStyle={[styles.root, fullwidth, style]}>
      {!!t ? <Text {...text_props} style={[styles.text, text_props?.style]}>{t}</Text> : children}
    </Button>
  );
}

const styles = StyleSheet.create({
  root: {
    paddingHorizontal: SPACING.xsmall,
    paddingVertical: SPACING.xsmall,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: COLORS.common.dark_1,
    width: '100%',
    alignItems: 'center',
  },
  text: {
    color: COLORS.common.dark_1,
    fontWeight: '600',
  }
});