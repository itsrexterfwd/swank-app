import React from 'react';
import Button from "react-native-button";
import { Text } from 'react-native';

export default ({ t, children, text_props, ...props }) => {
  return (
    <Button {...props}>{!!t ? <Text {...text_props}>{t}</Text> : children}</Button>
  );
}