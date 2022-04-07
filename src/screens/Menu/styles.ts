import { SafeAreaView } from "react-native-safe-area-context";
import styled from "styled-components/native";

export const Container = styled(SafeAreaView)`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background.main};
  padding: 0 20px;
`;

export const ProfileContainer = styled.View`
  align-items: center;
  justify-content: center;
`;

export const Avatar = styled.Image`
  width: 120px;
  height: 120px;
  border-radius: 60px;
`;

export const Divider = styled.View`
  height: 0.3px;
  background-color: ${({ theme }) => theme.colors.placeholder.main};
`;

export const ContainerEarnedItem = styled.View`
  height: 80px;
  width: 80px;
  max-width: 80px;
  max-height: 80px;
  align-items: center;
`;

export const EarnedItemLogo = styled.Image`
  width: 40px;
  height: 40px;
`;

export const IconTile = styled.Image`
  height: 28px;
  width: 28px;
`;
