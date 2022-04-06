import { useNavigation } from "@react-navigation/native";
import React from "react";
import BackButton from "../../components/BackButton";
import Separator from "../../components/Separator";
import Text from "../../components/Text";
import lock from "../../../assets/icons/lock/icon.png";

import {
  Container,
  Content,
  Header,
  LockIcon,
  OptionRightHeader,
} from "./styles";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Input from "../../components/Input";
import Button from "../../components/Button";
import { schemaLogin } from "./validation";

const Login = () => {
  const {
    control,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schemaLogin),
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const { goBack, navigate } = useNavigation();

  const handleGoBack = () => goBack();

  const onSubmit = async () => {
    await handleSubmit(({ email, password }) => {
      //TODO
    })();
  };

  return (
    <Container>
      <Content>
        <Separator height={20} />
        <Header>
          <BackButton onPress={handleGoBack} />
          <OptionRightHeader>
            <Text size={13}>Recuperar senha</Text>
            <Separator width={10} />
            <LockIcon source={lock} />
          </OptionRightHeader>
        </Header>
        <Separator height={30} />
        <Text size={32} type="bold">
          Acessar{"\n"}minha conta
        </Text>
        <Separator height={35} />
        <Controller
          control={control}
          name="email"
          render={({ field: { onChange, onBlur, value } }) => {
            return (
              <Input
                autoCompleteType="email"
                autoCapitalize="none"
                keyboardType="email-address"
                name="E-mail"
                placeholder="Insira o seu email"
                onChange={onChange}
                onChangeText={(text) => setValue("email", text)}
                onBlur={onBlur}
                value={value}
                error={errors.email?.message}
              />
            );
          }}
        />
        <Separator height={25} />
        <Controller
          control={control}
          name="password"
          render={({ field: { onChange, onBlur, value } }) => {
            return (
              <Input
                autoCompleteType="password"
                autoCapitalize="none"
                name="Senha"
                placeholder="Insira o seu Senha"
                secureTextEntry
                onChange={onChange}
                onChangeText={(text) => setValue("password", text)}
                onBlur={onBlur}
                value={value}
                error={errors.password?.message}
              />
            );
          }}
        />
        <Separator height={55} />
        <Button title="Entrar" onPress={onSubmit} textType="semiBold" />
      </Content>
    </Container>
  );
};

export default Login;
