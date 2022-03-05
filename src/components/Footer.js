import React from 'react';

import {
  View,
  Image,
  Text,
} from 'react-native';
import Box from './Box';
import images from '../constants/images';

export default props => {
  return (
    <>
      <Box ai_center jc_center>
        <Box><Text>About</Text></Box>
        <Box><Text>Legal</Text></Box>
        <Box><Text>Apply as a Creator</Text></Box>
        <Box><Text>Privacy</Text></Box>
        <Box><Text>Refunds</Text></Box>
        <Box><Text>Contract</Text></Box>
      </Box>
      <Box ai_center jc_center>
        <Box style={{borderWidth: 1,}}></Box>
        <Box style={{borderWidth: 1,}}><Image source={images.ig_black} /></Box>
        <Box style={{borderWidth: 1,}}><Image source={images.twitter_black} /></Box>
        <Box style={{borderWidth: 1,}}><Image source={images.dmca} /></Box>
      </Box>
      <Box ai_center jc_center>
        <Text>Copyright © {new Date().getFullYear()} SKANK</Text>  
      </Box>
    </>
  );
}