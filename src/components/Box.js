import React from 'react';
import {
  View
} from 'react-native';

export default ({
  ai_center,
  jc_center,
  pt,
  pb,
  pl,
  pr,
  py,
  px,
  row,
  style,
  ...props
}) => {
  const baseStyle = {};

  if (ai_center) {
    baseStyle.alignItems = 'center';
  }

  if (jc_center) {
    baseStyle.justifyContent = 'center';
  }

  if (py) {
    baseStyle.paddingVertical = py;
  }
  
  if (px) {
    baseStyle.paddingHorizontal = px;
  }
  
  if (pt) {
    baseStyle.paddingTop = pt;
  }
  
  if (pb) {
    baseStyle.paddingBottom = pb;
  }
  
  if (pl) {
    baseStyle.paddingLeft = pl;
  }
  
  if (pr) {
    baseStyle.paddingRight = pr;
  }
  if (row) {
    baseStyle.flexDirection = 'row';
  }

  return <View style={{ ...baseStyle, ...style }} {...props}>{props.children}</View>;
}