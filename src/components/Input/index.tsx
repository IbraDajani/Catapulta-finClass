import React from "react";
import { useMemo } from "react";
import { useState } from "react";
import { useTheme } from "styled-components";
import openEye from "../../../assets/icons/openEye.png";
import closeEye from "../../../assets/icons/closeEye.png";
import {
  Container,
  Content,
  Error,
  EyeIcon,
  Label,
  LeftIconContainer,
  RightIconContainer,
  TextInput,
  ToggleEye,
} from "./styles";
import { Props } from "./types";

const Input = ({
  error,
  name,
  placeholder,
  secureTextEntry,
  rightIcon,
  leftIcon,
  onBlur,
  onFocus,
  ...rest
}: Props) => {
  const { colors } = useTheme();

  const [hasFocus, setHasFocus] = useState<boolean>(false);
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const borderColor = useMemo(() => {
    if (error) return colors.error.main;
    if (hasFocus) return colors.primary.main;
    return colors.background.main;
  }, [error, hasFocus, colors]);

  return (
    <Container>
      {!!name && (
        <Label type="semiBold" size={12}>
          {name}
        </Label>
      )}
      <Content>
        {!!leftIcon && <LeftIconContainer>{leftIcon}</LeftIconContainer>}
        <TextInput
          borderColor={borderColor}
          onFocus={(e) => {
            setHasFocus(true);
            onFocus?.(e);
          }}
          onBlur={(e) => {
            setHasFocus(false);
            onBlur?.(e);
          }}
          hasLeftIcon={!!leftIcon}
          hasRightIcon={!!rightIcon}
          placeholder={placeholder}
          secureTextEntry={secureTextEntry && !showPassword}
          placeholderTextColor={colors.placeholder.main}
          selectionColor={colors.placeholder.onMain}
          {...rest}
        />
        {!!rightIcon && <RightIconContainer>{rightIcon}</RightIconContainer>}
        {secureTextEntry && (
          <ToggleEye onPress={() => setShowPassword((oldState) => !oldState)}>
            <EyeIcon
              style={{ tintColor: colors.placeholder.main }}
              source={showPassword ? openEye : closeEye}
            />
          </ToggleEye>
        )}
      </Content>
      {!!error && (
        <Error size={10} type="bold">
          {error}
        </Error>
      )}
    </Container>
  );
};

export default Input;
