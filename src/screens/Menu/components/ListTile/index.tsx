import React from "react";
import { useTheme } from "styled-components";
import chevron from "../../../../../assets/icons/chevron-left.png";
import Separator from "../../../../components/Separator";
import Text from "../../../../components/Text";

import { Container, Group, RightArrow } from "./styles";
import { Props } from "./types";

const ListTile = ({ icon, title, onPress }: Props) => {
  const { colors } = useTheme();
  return (
    <Container>
      <Group>
        {icon}
        <Separator width={10} />
        <Text type="bold" size={12}>
          {title}
        </Text>
      </Group>
      <RightArrow
        source={chevron}
        style={{ tintColor: colors.placeholder.main }}
      />
    </Container>
  );
};

export default ListTile;
