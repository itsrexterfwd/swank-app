import React from "react";
import { Animated, Easing } from "react-native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginStack from "./login.navigation";

const transitionConfig = () => ({
  transitionSpec: {
    duration: 0,
    timing: Animated.timing,
    easing: Easing.step0,
  },
});

const Root = createNativeStackNavigator();
const RootNavigator = () => {
  return (
    <Root.Navigator
      screenOptions={{
        headerShown: false,
        headerTintColor: "black",
        transitionSpec: {
          open: transitionConfig,
          close: transitionConfig,
        },
      }}
      initialRouteName="LoginStack"
    >
      <Root.Screen name="LoginStack" component={LoginStack} />
    </Root.Navigator>
  );
};

export default RootNavigator;
