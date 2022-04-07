import React, { useState } from "react";
import { useTheme } from "styled-components";
import Input from "../../components/Input";
import Separator from "../../components/Separator";
import Text from "../../components/Text";
import search from "../../../assets/icons/search.png";
import close from "../../../assets/icons/close.png";
import emptyResultsIcon from "../../../assets/icons/empty/empty-results.png";

import {
  Container,
  CenterText,
  CloseIcon,
  ContainerEmpty,
  ContainerHeader,
  EmptyIcon,
  SearchIcon,
} from "./styles";
import { Pressable } from "react-native";
import Dots from "../../components/Dots";

const Search: React.FC = () => {
  const { colors } = useTheme();
  const [searchText, setSearchText] = useState<string>("");
  const [hasFocus, setHasFocus] = useState<boolean>(false);

  const handleCleanText = () => {
    setSearchText("");
  };
  return (
    <Container>
      <Separator height={20} />
      <ContainerHeader>
        <Text size={22} type="bold">
          Buscar
        </Text>
        {!!searchText && (
          <Text onPress={handleCleanText} type="bold" size={12}>
            Cancelar
          </Text>
        )}
      </ContainerHeader>
      <Separator height={12} />
      <Input
        onBlur={() => setHasFocus(true)}
        onFocus={() => setHasFocus(true)}
        value={searchText}
        onChangeText={(value) => setSearchText(value)}
        leftIcon={
          <SearchIcon
            style={{ tintColor: colors.backdrop.onMain }}
            source={search}
          />
        }
        rightIcon={
          !!searchText && (
            <Pressable onPress={handleCleanText}>
              <CloseIcon
                source={close}
                style={{ tintColor: colors.backdrop.onMain }}
              />
            </Pressable>
          )
        }
        placeholder="Pesquise por título, autor ou ..."
      />
      {hasFocus && (
        <>
          <Separator height={20} />
          <Text type="bold" size={22}>
            Últimas buscas
          </Text>
        </>
      )}
      {!!searchText && hasFocus && (
        <ContainerEmpty>
          <EmptyIcon resizeMode="contain" source={emptyResultsIcon} />
          <Separator height={60} />
          <CenterText type="bold" size={22}>
            Nenhum resultado{"\n"}disponível
          </CenterText>
          <Separator height={60} />
          <Dots amount={6} />
        </ContainerEmpty>
      )}
    </Container>
  );
};

export default Search;
