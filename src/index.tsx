import { StatusBar } from "expo-status-bar";
import { View } from "react-native";
import { useTheme } from "styled-components";
import Text from "./components/Text";
import { Container } from "./styles";

const App = () => {
  const { typography } = useTheme();
  return (
    <>
      <StatusBar style="auto" />
      <Container>
        <Text>Hello</Text>
      </Container>
    </>
  );
};

export default App;
