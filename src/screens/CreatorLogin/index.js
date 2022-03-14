import React, { useState } from "react";
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
import SocialBtn from "./SocialBtn";
import GenderBtn from "./GenderBtn";

const CreatorLoginScreen = (props) => {
  const [selected, setSelected] = useState(undefined);
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
        <Box pt={SPACING.xsmall} fullWidth>
          <Box pb={SPACING.xxsmall}><Text style={{ fontSize: FONT_SIZE.xsmall }}>Where do you have the most followers?</Text></Box>
          <Box>
            <Box flexDirection="row" ai_center style={{ justifyContent: 'space-between' }}>
              {(!selected || (!!selected && selected === 1)) && <SocialBtn name="logo-instagram" selected={selected === 1} onPress={() => setSelected(1)} />}
              {(!selected || (!!selected && selected === 2)) && <SocialBtn name="logo-twitter" selected={selected === 2} onPress={() => setSelected(2)} />}
              {(!selected || (!!selected && selected === 3)) && <SocialBtn name="logo-facebook" selected={selected === 3} onPress={() => setSelected(3)} />}
              {(!selected || (!!selected && selected === 4)) && <SocialBtn name="logo-facebook" selected={selected === 4} onPress={() => setSelected(4)} />}
              {
                !!selected && 
                  <>
                    <Box flex={1} flexDirection="row">
                      <TInput />
                    </Box>
                    <SocialBtn name="close-outline" selected onPress={() => setSelected(undefined)} />
                  </>
              }
            </Box>
          </Box>
        </Box>
        <Box pt={SPACING.xsmall} flexDirection="row" ai_center jc_center>
          <Box px={15}><Text>I'm</Text></Box>
          <Box px={5}>
              <GenderBtn icon="man-outline" name="Male" />
          </Box>
          <Box px={5}>
            <GenderBtn icon="woman-outline" name="Female" />
          </Box>
        </Box>
        <Box pt={SPACING.xsmall} width="100%">
          <Contained t="Continue" />
        </Box>
        <Box pt={SPACING.small} ai_center jc_center style={{ alignItems: 'center', justifyContent: 'center' }}>
          <Text style={{ fontSize: FONT_SIZE.xsmall, alignItems: 'center', justifyContent: 'center' }}>
            <Text style={{fontSize: FONT_SIZE.xsmall }}>Already a member? </Text>
            <Link t="Sign in" size={FONT_SIZE.xsmall} style={{ marginTop: 15 }} />
          </Text>
        </Box>
      </Box>
    </Base>
  );
}

export default CreatorLoginScreen;