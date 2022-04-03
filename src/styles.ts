import styled from "styled-components/native";

export const Container = styled.SafeAreaView`
  background-color: ${({ theme }) => theme.colors.primary.main};
  flex: 1;
  padding-top: 40px;
`;
