import React from "react";
import { View, StyleSheet, Platform } from "react-native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';

import Home from "../screens/Home";
import Search from "../screens/Search";
import Messages from "../screens/Messages";
import Profile from "../screens/Profile";

import {
  COLORS,
  SPACING,
} from '../styles';
import { Outlined } from "../components/Button";
import Box from "../components/Box";


const DashboardTab = createBottomTabNavigator();
const LoginStack = (props) => {
  return (
    <DashboardTab.Navigator
      initialRouteName="Home"
      screenOptions={() => ({
        headerShown: false,
        headerTintColor:  '#1c1c1c',
        headerTitleStyle: styles.headerTitleStyle,

        headerTitleContainerStyle: styles.headerTitleContainerStyle,
        headerRight: () => <View />,
        cardStyle: { backgroundColor: "#f5f5f5" },
      })}
      tabBar={props => <TabBar {...props} />}
      >
      <DashboardTab.Screen test="test" icon="home" name="Home" component={Home} />
      <DashboardTab.Screen icon="search" name="Search" component={Search} />
      <DashboardTab.Screen icon="message" name="Messages" component={Messages} />
      <DashboardTab.Screen icon="profile" name="Profile" component={Profile} />
    </DashboardTab.Navigator>
  );
};

const TabBar = ({ state, navigation, ...props}) => {
  const tabs = state.routes.map((route, index) => {
    const isFocused = state.index === index;

    const onPress = () => {
      const event = navigation.emit({
        type: 'tabPress',
        target: route.key,
        canPreventDefault: true,
      });

      if (!isFocused && !event.defaultPrevented) {
        // The `merge: true` option makes sure that the params inside the tab screen are preserved
        navigation.navigate({ name: route.name, merge: true });
      }
    };

    const onLongPress = () => {
      navigation.emit({
        type: 'tabLongPress',
        target: route.key,
      });
    };

    return (
      <Outlined
        accessibilityRole="button"
        accessibilityState={isFocused ? { selected: true } : {}}
        onPress={onPress}
        onLongPress={onLongPress}
        style={{ flex: 1, borderWidth: 0 }}
      >
        <Icon name={`${route_icons[route.name]}${isFocused ? '' : '-outline'}`} color={isFocused ? COLORS.common.blue : undefined} size={24} />
      </Outlined>
    );
});
  

  return (
    <Box
      style={{ borderTopWidth: 2, borderColor: COLORS.common.hairline }}
      flexDirection="row"
      pb={Platform.OS === 'ios`' ? SPACING.normal : SPACING.small }
    >
      {tabs}
    </Box>
  );
}

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

const route_icons = {
  Home: 'home',
  Search: 'search',
  Messages: 'chatbox-ellipses',
  Profile: 'person-circle',
}

export default LoginStack;
