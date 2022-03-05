import React from "react";
import { Text, View, Image } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import images from '../../constants/images';
import Box from "../../components/Box";

import styles from './styles';
import TInput from "../../components/TInput";
import { Contained, Outlined } from "../../components/Button";
import Footer from "../../components/Footer";
import { FONT_SIZE, SPACING } from "../../styles";

const Login = (props) => {
  return (
    <View>
      <Box ai_center jc_center><Text style={{ fontSize: FONT_SIZE.xxlarge, fontWeight: '500' }}>SKANK</Text></Box>
      <Box ai_center jc_center py={SPACING.normal}>
        <Image source={images.profiles} width={null} height={null} />
      </Box>
      <Box ai_center jc_center style={styles.subtitle_container} py={SPACING.normal}>
        <Text style={styles.subtitle}>Connect privately with social media celebrities, influencers and models.</Text>
      </Box>
      <Box ai_center jc_center style={styles.form}>
        <Box>
          <TInput placeholder="Email or Username" />
        </Box>
        <Box pt={SPACING.xxsmall}>
          <TInput placeholder="Password" />
        </Box>
        <Box pt={SPACING.xsmall}>
          <Contained t="Login / Sign Up" />
        </Box>
        <Box pt={5}>
          <Contained t="Forgot Password" />
        </Box>
        <Box pt={5}>
          <Contained t="login">
            <Text>Login</Text>
          </Contained>
          <Contained t="login">
            <Text>Login</Text>
          </Contained>
        </Box>
        <Box pt={5}>
          <Box />
          <Text>OR</Text>
          <Box />
        </Box>
        <Box ai_center jc_center style={styles.subtitle_container}>
          <Text style={styles.subtitle}>Apply to be a content creator, make money and interact with your social media fans.</Text>
        </Box>
        <Box pt={5}>
          <Outlined t="Apply to be a Creator" />
        </Box>
      </Box>
      <Footer />
    </View>
  );
}

export default Login;