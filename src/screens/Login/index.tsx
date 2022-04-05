import { useNavigation } from "@react-navigation/native";
import React from "react";
import BackButton from "../../components/BackButton";
import Separator from "../../components/Separator";
import Text from "../../components/Text";
import lock from "../../../assets/icons/lock/icon.png";

import {
  Container,
  Content,
  Header,
  LockIcon,
  OptionRightHeader,
} from "./styles";

const Login: React.FC = () => {
  const { goBack } = useNavigation();

  return (
    <Container>
      <Content>
        <Separator height={20} />
        <Header>
          <BackButton onPress={goBack} />
          <OptionRightHeader>
            <Text size={13}>Recuperar senha</Text>
            <Separator width={10} />
            <LockIcon source={lock} />
          </OptionRightHeader>
        </Header>
        <Separator width={30} />
        <Text size={32} type="bold">
          Acessar{"\n"}minha conta
        </Text>
        <Separator width={35} />
      </Content>
    </Container>
  );
};

export default Login;
