import styled from "styled-components/native";
import { ContainerCoverProps, ContainerProps } from "./types";

export const Container = styled.View<ContainerProps>`
  max-width: ${({ windowWidth }) => windowWidth * 0.4}px;
`;

export const Cover = styled.Image<ContainerCoverProps>`
  border-radius: ${({ theme }) => theme.border.radius.sm}px;

  width: ${({ windowWidth }) => windowWidth * 0.4}px;
  height: ${({ windowHeight }) => windowHeight * 0.28}px;
`;
