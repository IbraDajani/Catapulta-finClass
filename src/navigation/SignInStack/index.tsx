import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Access from "../../screens/Access";
import Login from "../../screens/Login";

// import { Container } from './styles';

const SignInStack = () => {
  const { Navigator, Screen } = createNativeStackNavigator();
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Screen name="Access" component={Access} />
      <Screen name="Login" component={Login} />
    </Navigator>
  );
};

export default SignInStack;
