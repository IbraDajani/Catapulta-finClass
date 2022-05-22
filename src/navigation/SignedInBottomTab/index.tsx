import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useTheme } from "styled-components";
import home from "../../../assets/icons/home.png";
import download from "../../../assets/icons/download.png";
import boxSearch from "../../../assets/icons/boxsearch.png";
import boxMenu from "../../../assets/icons/boxmenu.png";
import Text from "../../components/Text";

import { Icon } from "./styles";
import Access from "../../screens/Access";
import Home from "../../screens/Home";
import Downloads from "../../screens/Downloads";
import Search from "../../screens/Search";
import Menu from "../../screens/Menu";

const SignedInBottomTab = () => {
  const { colors } = useTheme();
  const { Navigator, Screen } = createBottomTabNavigator();

  const handleSizeTo80Percentage = (size: number) => {
    return size * 0.8;
  };
  return (
    <Navigator
      screenOptions={{
        tabBarActiveTintColor: colors.background.onMain,
        tabBarInactiveTintColor: colors.placeholder.main,
        headerShown: false,
        tabBarStyle: {
          backgroundColor: colors.backdrop.main,
          borderTopColor: colors.backdrop.main,
        },
      }}
    >
      <Screen
        name="Home"
        component={Home}
        options={{
          title: "Inicio",
          tabBarIcon: ({ color, size }) => (
            <Icon
              source={home}
              size={handleSizeTo80Percentage(size)}
              style={{ tintColor: color }}
            />
          ),
        }}
      />
      <Screen
        name="Downloads"
        component={Downloads}
        options={{
          title: "Downloads",
          tabBarIcon: ({ color, size }) => (
            <Icon
              source={download}
              size={handleSizeTo80Percentage(size)}
              style={{ tintColor: color }}
            />
          ),
        }}
      />
      <Screen
        name="Search"
        component={Search}
        options={{
          title: "Buscar",
          tabBarIcon: ({ color, size }) => (
            <Icon
              source={boxSearch}
              size={handleSizeTo80Percentage(size)}
              style={{ tintColor: color }}
            />
          ),
        }}
      />
      <Screen
        name="Menu"
        component={Menu}
        options={{
          title: "Menu",
          tabBarIcon: ({ color, size }) => (
            <Icon
              source={boxMenu}
              size={handleSizeTo80Percentage(size)}
              style={{ tintColor: color }}
            />
          ),
        }}
      />
    </Navigator>
  );
};

export default SignedInBottomTab;
