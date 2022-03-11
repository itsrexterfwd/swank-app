import React from 'react';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';
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
    <TouchableOpacity {...props} style={[styles.root, default_root, style]}>
      {!!t ? <Text {...text_props} style={[styles.text, text_props?.style]}>{t}</Text> : children}
    </TouchableOpacity>
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
    flexDirection: 'row',
    justifyContent: 'center',
    flexDirection: 'row'
  },
  text: {
    color: COLORS.common.dark_1,
    fontWeight: '600',
  }
});