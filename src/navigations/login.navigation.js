import React from "react";
import { View, StyleSheet } from "react-native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Login from "../screens/Login";
import CreatorLogin from "../screens/CreatorLogin";

import * as app_styles from '../styles';


const LoginSN = createNativeStackNavigator();
const LoginStack = (props) => {
  return (
    <LoginSN.Navigator
      initialRouteName="Welcome"
      screenOptions={() => ({
        headerShown: false,
        headerTintColor:  '#1c1c1c',
        headerTitleStyle: styles.headerTitleStyle,

        headerTitleContainerStyle: styles.headerTitleContainerStyle,
        headerRight: () => <View />,
        cardStyle: { backgroundColor: "#f5f5f5" },
      })}>
      <LoginSN.Screen name="Login" component={Login} />
      <LoginSN.Screen name="CreatorLogin" component={CreatorLogin} />
    </LoginSN.Navigator>
  );
};

const styles = StyleSheet.create({
  headerTitleStyle: {
    fontWeight: "bold",
    textAlign: "center",
    alignSelf: "center",
    color: "black",
    flex: 1,
    fontFamily: "Quantico-Regular",
  },
  headerTitleContainerStyle: {
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
  },
});

export default LoginStack;
