import React from "react";
import { useWindowDimensions } from "react-native";
import { useTheme } from "styled-components";
import Separator from "../../../../components/Separator";
import Text from "../../../../components/Text";

import { Container, Cover } from "./styles";
import { Props } from "./types";

const Card = ({ source, title, description }: Props) => {
  const { colors } = useTheme();
  const { width, height } = useWindowDimensions();
  return (
    <Container windowWidth={width}>
      <Cover source={source} windowWidth={width} windowHeight={height} />
      <Separator height={15} />
      <Text type="bold" numberOfLines={2}>
        {title}
      </Text>
      {!!description && (
        <>
          <Separator height={5} />
          <Text
            type="bold"
            numberOfLines={2}
            size={10}
            color={colors.placeholder.main}
          >
            {description}
          </Text>
        </>
      )}
    </Container>
  );
};

export default Card;
