import React from "react";
import { useMemo } from "react";
import { useTheme } from "styled-components";

import { Container, SpacingIcon, Title } from "./styles";
import { Props } from "./types";

const Button = ({
  disabled,
  title,
  color,
  icon,
  onPress,
  outlined,
  textColor,
  textType = "regular",
}: Props) => {
  const { colors } = useTheme();

  const titleColor = useMemo(() => {
    if (textColor) return textColor;
    if (disabled) return colors.backdrop.main;
    return outlined ? colors.backdrop.main : colors.background.main;
  }, [textColor, disabled, outlined, colors]);

  return (
    <Container
      onPress={onPress}
      disabled={disabled}
      outlined={outlined || disabled}
      color={color}
    >
      {!!icon && (
        <>
          {icon}
          <SpacingIcon />
        </>
      )}
      <Title color={titleColor} type={textType}>
        {title}
      </Title>
    </Container>
  );
};

export default Button;
