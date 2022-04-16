import styled from "styled-components/native";
import { FinClassIconProps } from "./types";

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background.main};
`;

export const BannerContainer = styled.View`
  background-color: ${({ theme }) => theme.colors.background.main};
  height: 450px;
`;

export const FinclassIcon = styled.Image<FinClassIconProps>`
  height: 30px;
  width: 30px;
  position: absolute;
  left: 20px;
  top: ${({ top }) => top && top + 15}px;
  z-index: 1;
`;

export const Content = styled.View`
  padding: 0 20px;
`;

export const IconFin = styled.Image`
  height: 25px;
  width: 100px;
`;
