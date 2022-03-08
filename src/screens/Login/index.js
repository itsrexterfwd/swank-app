import React from "react";
import { Text, View, Image } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import images from '../../constants/images';
import Box from "../../components/Box";

import styles from './styles';
import TInput from "../../components/TInput";
import { Contained, Link, Outlined } from "../../components/Button";
import Footer from "../../components/Footer";
import Body from "../../components/Body";
import { COLORS, FONT_SIZE, SPACING } from "../../styles";

const Login = (props) => {
  return (
    <Box flex={1}>
      <Body>
        <Box ai_center jc_center pt={SPACING.large}><Text style={{ fontSize: FONT_SIZE.xxlarge, fontWeight: '500' }}>SKANK</Text></Box>
        <Box ai_center jc_center py={SPACING.normal}>
          <Image source={images.profiles} width={null} height={null} />
        </Box>
        <Box ai_center jc_center style={styles.subtitle_container} py={SPACING.normal}>
          <Text style={styles.subtitle}>Connect privately with social media celebrities, influencers and models.</Text>
        </Box>
        <Box ai_center jc_center style={styles.form}>
          <Box>
            <TInput keyboardType="email-address" placeholder="Email or Username" />
          </Box>
          <Box pt={SPACING.xxsmall}>
            <TInput secureTextEntry={true} placeholder="Password" />
          </Box>
          <Box pt={SPACING.xsmall} width="100%">
            <Contained t="Login / Sign Up" />
          </Box>
          <Box pt={SPACING.small}>
            <Link t="Forgot Password" size={FONT_SIZE.xsmall} />
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
      </Body>
      <Footer />
    </Box>
  );
}

export default Login;