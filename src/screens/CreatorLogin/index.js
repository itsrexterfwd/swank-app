import React from "react";
import { Text, View, Image, ScrollView, Platform } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import images from '../../constants/images';
import Box from "../../components/Box";

import styles from './styles';
import TInput from "../../components/TInput";
import { Contained, Link, Outlined } from "../../components/Button";
import Footer from "../../components/Footer";
import Body from "../../components/Body";
import { COLORS, FONT_SIZE, SPACING, WINDOW_HEIGHT } from "../../styles";
import Base from "../../components/Base";

const CreatorLoginScreen = (props) => {
  return (
    <Base>
      <Box ai_center jc_center pt={SPACING.large}>
        <Text style={{ fontSize: FONT_SIZE.xxlarge, fontWeight: '500' }}>SKANK</Text>
        <Text style={{ fontSize: FONT_SIZE.normal, fontWeight: '500', fontStyle: 'italic' }}>Exclusive Fan Club</Text>
      </Box>
      <Box ai_center jc_center style={styles.subtitle_container} py={SPACING.normal}>
        <Text style={styles.subtitle}>Become an Alua creator today and enjoy subscriptions, paid chat and 80% commission</Text>
      </Box>
      <Box ai_center jc_center style={styles.form}>
        <Box>
          <Box pb={SPACING.xxsmall} style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <Text style={{ fontSize: FONT_SIZE.xsmall }}>Invite code</Text>
            <Link t="I don't have one" size={FONT_SIZE.xsmall} />
          </Box>
          <TInput keyboardType="email-address" />
        </Box>
        <Box pt={SPACING.xsmall}>
          <Box pb={SPACING.xxsmall}><Text style={{ fontSize: FONT_SIZE.xsmall }}>Email</Text></Box>
          <TInput keyboardType="email-address" placeholder="Email address" />
        </Box>
        <Box pt={SPACING.xsmall}>
          <Box pb={SPACING.xxsmall}><Text style={{ fontSize: FONT_SIZE.xsmall }}>Password</Text></Box>
          <TInput secureTextEntry={true} placeholder="Password" />
        </Box>
        <Box pt={SPACING.xsmall}>
          <Box pb={SPACING.xxsmall}><Text style={{ fontSize: FONT_SIZE.xsmall }}>Where do you have the most followers?</Text></Box>
          <TInput secureTextEntry={true} placeholder="Password" />
        </Box>
        <Box pt={SPACING.xsmall} width="100%">
          <Contained t="Continue" />
        </Box>
        <Box pt={SPACING.small} jc_center ai_center>
          <Text style={{ fontSize: FONT_SIZE.xsmall}}>
            <Text>Already a member? </Text>
            <Link t="Forgot Password" size={FONT_SIZE.xsmall} />
          </Text>
        </Box>
        <Box pt={SPACING.small} style={styles.social_btn_container}>
          <Contained style={[styles.social_btn]}>
            <Icon name="logo-facebook" size={12} color={COLORS.common.white} />
            <Text style={styles.social_txt}>Login</Text>
          </Contained>
          <Box width={5} />
          <Contained style={[styles.social_btn]}>
            <Icon name="logo-twitter" size={12} color={COLORS.common.white} />
            <Text style={styles.social_txt}>Login</Text>
          </Contained>
        </Box>
        <Box style={styles.separator_container} pt={SPACING.small} jc_center ai_center>
          <Box style={styles.hairline} />
          <Text style={styles.separator}>OR</Text>
          <Box style={styles.hairline} />
        </Box>
        <Box ai_center jc_center>
          <Text style={styles.subtitle}>Apply to be a content creator, make money and interact with your social media fans.</Text>
        </Box>
        <Box pt={SPACING.normal} width="100%">
          <Outlined t="Apply to be a Creator" />
        </Box>
      </Box>
    </Base>
  );
}

export default CreatorLoginScreen;