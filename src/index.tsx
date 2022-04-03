import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import { useTheme } from "styled-components";
import { Container } from "./styles";

const App = () => {
  const { typography } = useTheme();
  return (
    <>
      <StatusBar style="auto" />
      <Container>
        <Text
          style={{
            fontFamily: typography.regular.fontFamily,
            fontSize: 24,
          }}
        >
          Hello Theme
        </Text>
      </Container>
    </>
  );
};

export default App;
