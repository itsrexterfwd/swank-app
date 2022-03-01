import React from "react";
import { View, StyleSheet } from "react-native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LoginScreen from "../screens/Login";

import * as app_styles from '../styles';


const Login = createNativeStackNavigator();
const LoginStack = (props) => {
  return (
    <Login.Navigator
      initialRouteName="Welcome"
      screenOptions={() => ({
        headerShown: false,
        headerTintColor:  '#1c1c1c',
        headerTitleStyle: styles.headerTitleStyle,

        headerTitleContainerStyle: styles.headerTitleContainerStyle,
        headerRight: () => <View />,
        cardStyle: { backgroundColor: "#f5f5f5" },
      })}>
      <Login.Screen name="Login" component={LoginScreen} />
    </Login.Navigator>
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
