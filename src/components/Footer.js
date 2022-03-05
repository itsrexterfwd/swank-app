import React from 'react';

import {
  View,
  Image,
  Text,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Box from './Box';
import images from '../constants/images';

export default props => {
  return (
    <>
      <Box ai_center jc_center row>
        <Box><Text>About</Text></Box>
        <Box><Text>Legal</Text></Box>
        <Box><Text>Apply as a Creator</Text></Box>
        <Box><Text>Privacy</Text></Box>
        <Box><Text>Refunds</Text></Box>
        <Box><Text>Contract</Text></Box>
      </Box>
      <Box ai_center jc_center row>
        <Box style={{borderWidth: 1,}}><Icon name="logo-facebook" size={32} /></Box>
        <Box style={{borderWidth: 1,}}><Icon name="logo-instagram" size={32} /></Box>
        <Box style={{borderWidth: 1,}}><Icon name="logo-twitter" size={32} /></Box>
      </Box>
      <Box ai_center jc_center>
        <Text>Copyright © {new Date().getFullYear()} SKANK</Text>
      </Box>
    </>
  );
}