import { SafeAreaView } from "react-native-safe-area-context";
import styled from "styled-components/native";
import Text from "../../components/Text";

export const Container = styled(SafeAreaView)`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background.main};
  justify-content: center;
  align-items: center;
`;
