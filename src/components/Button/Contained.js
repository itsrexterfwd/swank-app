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
    <Button {...props} containerStyle={[styles.root, default_root, style]}>
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
    borderColor: COLORS.common.blue,
    backgroundColor: COLORS.common.blue,
    alignItems: 'center',
  },
  text: {
    color: COLORS.common.white,
    fontWeight: '600',
  }
});