import React from "react";
import { Text, View, Image } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import images from '../../constants/images';
import Box from "../../components/Box";

import styles from './styles';
import TInput from "../../components/TInput";
import { Contained } from "../../components/Button";

const Login = (props) => {
  return (
    <View>
      <Box ai_center jc_center>
        <Image source={images.profiles} width={null} height={null} />
      </Box>
      <Box ai_center jc_center style={styles.subtitle_container}>
        <Text style={styles.subtitle}>Connect privately with social media celebrities, influencers and models.</Text>
      </Box>
      <Box ai_center jc_center style={styles.form}>
        <Box>
          <TInput placeholder="Email or Username" />
        </Box>
        <Box pt={5}>
          <TInput placeholder="Password" />
        </Box>
        <Box pt={5}>
          <Contained t="Login / Sign Up" />
        </Box>
        <Box pt={5}>
          <Contained t="Forgot Password" />
        </Box>
        <Box pt={5}>
          <Contained t="login">
            <Icon name="alert-circle" size={70}  />
            <Text>Login</Text>
          </Contained>
        </Box>
      </Box>
    </View>
  );
}

export default Login;