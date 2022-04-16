import React from "react";
import { ScrollView, View } from "react-native";
import Text from "../../components/Text";
import bitcoin from "../../../assets/icons/badge_ulrich.png";
import editProfileIcon from "../../../assets/icons/edit-profile/edit-profile.png";
import progressIcon from "../../../assets/icons/progress/progress.png";
import subscriptionIcon from "../../../assets/icons/subscription/subscription.png";
import helpIcon from "../../../assets/icons/help/help.png";
import termsIcon from "../../../assets/icons/terms/terms.png";

import {
  Container,
  Avatar,
  ContainerEarnedItem,
  Divider,
  IconTile,
  ProfileContainer,
  EarnedItemLogo,
} from "./styles";
import { useTheme } from "styled-components";
import Separator from "../../components/Separator";
import ListTile from "./components/ListTile";
import Button from "../../components/Button";
import useAuth from "../../hooks/useAuth";

const Menu: React.FC = () => {
  const { logout } = useAuth();
  const { colors } = useTheme();
  return (
    <Container>
      <ScrollView>
        <Separator height={20} />
        <ProfileContainer>
          <Avatar
            source={{
              uri: "https://avatars.githubusercontent.com/u/75001910?v=4",
            }}
          />
          <Separator height={20} />
          <Text size={22} type="bold">
            Ibrahim
          </Text>
          <Separator height={40} />
          <Text type="bold" size={12} color={colors.placeholder.main}>
            Minhas conquistas:
          </Text>
        </ProfileContainer>
        <Separator height={20} />
        <ContainerEarnedItem>
          <EarnedItemLogo source={bitcoin} />
          <Separator height={10} />
          <Text size={11} color={colors.placeholder.main} numberOfLines={1}>
            Investidor do futuro
          </Text>
        </ContainerEarnedItem>
        <Separator height={20} />
        <Divider />
        <Separator height={30} />
        <Text size={12} type="bold" color={colors.placeholder.main}>
          Conta
        </Text>
        <Separator height={15} />
        <ListTile
          icon={<IconTile source={progressIcon} />}
          title="Meu Progress"
          onPress={() => {}}
        />
        <ListTile
          icon={<IconTile source={subscriptionIcon} />}
          title="Plano de assinatura"
          onPress={() => {}}
        />
        <Separator height={30} />
        <Text size={12} type="bold" color={colors.placeholder.main}>
          Ajustes
        </Text>
        <Separator height={15} />
        <ListTile
          icon={<IconTile source={editProfileIcon} />}
          title="Configurações do aplicativo"
          onPress={() => {}}
        />
        <Separator height={15} />
        <Text size={12} type="bold" color={colors.placeholder.main}>
          Mais
        </Text>
        <Separator height={15} />
        <ListTile
          icon={<IconTile source={termsIcon} />}
          title="Política de privacidade"
          onPress={() => {}}
        />
        <Separator height={30} />
        <Button textType="bold" outlined title="Sair" onPress={logout} />
        <Separator height={30} />
        <Text size={11} type="bold" color={colors.placeholder.main}>
          Finclass 1.3.0
        </Text>
        <Separator height={15} />
      </ScrollView>
    </Container>
  );
};

export default Menu;
