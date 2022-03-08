import React from 'react';
import Box from './Box';

export default (props) => (
  <Box flex={1}>
    {props.children}
  </Box>
)