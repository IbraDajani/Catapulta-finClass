import React from "react";

import { Container, Content, Image } from "./styles";
import { data } from "../../mocks";
import Separator from "../../../../components/Separator";
import { View } from "react-native";
import Text from "../../../../components/Text";
import { useTheme } from "styled-components";

const LastWatched: React.FC = () => {
  const { colors } = useTheme();
  return (
    <Container>
      <Content>
        <Image source={data[2].image} resizeMode="cover" />
        <Separator width={15} />
        <View>
          <Text type="bold">Ná Prática</Text>
          <Separator height={15} />
          <Text type="semiBold" size={10} color={colors.placeholder.main}>
            Ná Prática
          </Text>
        </View>
      </Content>
    </Container>
  );
};

export default LastWatched;
