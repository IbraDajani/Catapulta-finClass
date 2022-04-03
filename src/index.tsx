import { StatusBar } from "expo-status-bar";
import React from "react";
import { useTheme } from "styled-components";
import Text from "./components/Text";
import { Container } from "./styles";
import Button from "./components/Button";
import Separator from "./components/Separator";
import BackButton from "./components/BackButton";
import Dots from "./components/Dots";
import Input from "./components/Input";

const App = () => {
  const {} = useTheme();
  return (
    <>
      <StatusBar style="auto" />
      <Container>
        <BackButton />
        <Separator height={20} />
        <Dots amount={10} />
        <Separator height={20} />
        <Text>Hello</Text>
        <Separator height={20} />
        <Dots amount={10} />
        <Separator height={40} />
        <Input name="Email" error="Não tem email" />
        <Separator height={40} />
        <Input secureTextEntry name="Password" error="Não tem password" />
        <Separator height={40} />
        <Button textType="bold" title="Assine agora" />
      </Container>
    </>
  );
};

export default App;
