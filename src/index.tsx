import { StatusBar } from "expo-status-bar";
import React from "react";
import { View } from "react-native";
import { useTheme } from "styled-components";
import Text from "./components/Text";
import { Container } from "./styles";
import Button from "./components/Button";
import Separator from "./components/Separator";
import BackButton from "./components/BackButton";

const App = () => {
  const {} = useTheme();
  return (
    <>
      <StatusBar style="auto" />
      <Container>
        <BackButton />
        <Separator height={20} />
        <Text>Hello</Text>
        <Separator height={20} />
        <Button textType="bold" title="Assine agora"></Button>
      </Container>
    </>
  );
};

export default App;
