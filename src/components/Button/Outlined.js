import React from 'react';
import { Button, Text } from 'react-native';
export default ({ t, children, ...props }) => {
  return (
    <Button {...props} title={t} />
  );
}