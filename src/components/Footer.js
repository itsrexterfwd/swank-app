import React from 'react';

import {
  View,
  Image,
  Text,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Box from './Box';
import images from '../constants/images';
import { Link } from './Button';
import { COLORS, SPACING } from '../styles';

export default props => {
  return (
    <Box>
      <Box ai_center jc_center row style={{ flexWrap: 'wrap' }} px={SPACING.xxlarge}>
        <Box px={SPACING.large} pt={SPACING.xsmall}><Link color={COLORS.common.hairline} t="About" /></Box>
        <Box px={SPACING.large} pt={SPACING.xsmall}><Link color={COLORS.common.hairline} t="Legal" /></Box>
        <Box px={SPACING.large} pt={SPACING.xsmall}><Link color={COLORS.common.hairline} t="Apply as a Creator" /></Box>
        <Box px={SPACING.large} pt={SPACING.xsmall}><Link color={COLORS.common.hairline} t="Privacy" /></Box>
        <Box px={SPACING.large} pt={SPACING.xsmall}><Link color={COLORS.common.hairline} t="Refunds" /></Box>
        <Box px={SPACING.large} pt={SPACING.xsmall}><Link color={COLORS.common.hairline} t="Contract" /></Box>
      </Box>
      <Box ai_center jc_center row pt={SPACING.small}>
        <Box px={10}><Icon name="logo-facebook" size={32} /></Box>
        <Box px={10}><Icon name="logo-instagram" size={32} /></Box>
        <Box px={10}><Icon name="logo-twitter" size={32} /></Box>
      </Box>
      <Box ai_center jc_center pt={SPACING.small}>
        <Text>Copyright © {new Date().getFullYear()} RINE</Text>
      </Box>
    </Box>
  );
}