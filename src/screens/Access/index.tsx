import React from "react";
import Button from "../../components/Button";
import Separator from "../../components/Separator";
import banner from "../../../assets/images/banner/image.png";
import { useTheme } from "styled-components";
import emailIcon from "../../../assets/icons/email.png";

import { Container, Banner, Content, EmailIcon, ImpactPhrase } from "./styles";
import { useNavigation } from "@react-navigation/native";

const Access: React.FC = () => {
  const { navigate } = useNavigation();
  const { colors } = useTheme();
  const handleButtonLogin = () => {
    navigate("Login");
  };
  return (
    <Container>
      <Banner resizeMode="contain" source={banner} />
      <Content>
        <ImpactPhrase type="bold">
          Aprenda a investir e{"\n"} conquiste sua liberdade{"\n"} financeira
        </ImpactPhrase>
        <Separator height={20} />
        <Button
          onPress={handleButtonLogin}
          title="Assine agora"
          textType="bold"
        ></Button>
        <Separator height={20} />
        <Button
          outlined
          title="Entrar com email"
          textType="semiBold"
          icon={
            <EmailIcon
              style={{ tintColor: colors.background.onMain }}
              source={emailIcon}
            />
          }
          onPress={handleButtonLogin}
        ></Button>
        <Separator height={45} />
      </Content>
    </Container>
  );
};

export default Access;
