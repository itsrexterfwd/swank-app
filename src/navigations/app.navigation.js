import React from "react";

import { NavigationContainer } from '@react-navigation/native';

import RootNavigator from "./root.navigation";
import { navigationRef } from "../utils/navigationService";

const AppNavigator = () => {
  return (
    <NavigationContainer ref={navigationRef}>
      <RootNavigator />
    </NavigationContainer>
  );
};

export { AppNavigator };
