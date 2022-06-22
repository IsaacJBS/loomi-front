/* eslint-disable react/jsx-props-no-spreading */
import React, { useState } from "react";
import "@fontsource/nunito-sans";
import {
  Center,
  Text,
  Image,
  Flex,
  Button,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import { useForm, SubmitHandler } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import axios from "../api/axios";
import backgroundImg from "../assets/background-img.svg";
import logo from "../assets/logo.svg";
import eye from "../assets/eye.svg";
import eyeSlash from "../assets/eye-slash.svg";
import { useAuth } from "../context/auth";

type FormValues = {
  email: string;
  senha: string;
};

const loginUrl = "/login";

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>();
  const [show, setShow] = useState<boolean>(false);
  const showPassword = () => setShow(!show);
  const { setToken } = useAuth();
  const navigate = useNavigate();

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    try {
      const response = await axios.post(loginUrl, data);
      if (response.status === 201) {
        const token = response.data["access-token"];
        setToken(token);
        navigate("/home");
      }
      return;
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Center backgroundImage={backgroundImg} w="100%" h="100vh">
      <Flex
        direction="column"
        align="center"
        backgroundColor="bgWhite"
        px={100}
        py={10}
        h="100vh"
      >
        <Image w={200} src={logo} />
        <Text
          fontFamily="title"
          fontWeight="semibold"
          letterSpacing={0.4}
          mt={10}
        >
          Entrar na plataforma
        </Text>
        <form onSubmit={handleSubmit(onSubmit)}>
          <FormControl mt={10} w={400}>
            <FormLabel fontWeight="normal" ml={4} htmlFor="email">
              E-mail
            </FormLabel>
            <Input
              id="email"
              type="email"
              backgroundColor="brand.700"
              {...register("email", {
                required: "Por favor, insira um e-mail",
              })}
            />
            <Text mt={1} fontSize="small" color="warning">
              {errors.email && errors.email.message}
            </Text>
            <FormLabel fontWeight="normal" mt={5} ml={4} htmlFor="email">
              Senha
            </FormLabel>
            <InputGroup size="md">
              <Input
                pr="4.5rem"
                type={show ? "text" : "password"}
                backgroundColor="brand.700"
                {...register("senha", {
                  required: "Por favor, insira uma senha",
                })}
              />
              <InputRightElement width="4.5rem">
                <Button
                  backgroundColor="transparent"
                  h="1.75rem"
                  size="sm"
                  onClick={showPassword}
                >
                  {show ? <Image src={eyeSlash} /> : <Image src={eye} />}
                </Button>
              </InputRightElement>
            </InputGroup>
            <Text mt={1} fontSize="small" color="warning">
              {errors.senha && errors.senha.message}
            </Text>
          </FormControl>
          <Flex justifyContent="center" mt={10}>
            <Button
              colorScheme="purple"
              backgroundColor="main"
              textColor="white"
              fontWeight="normal"
              isLoading={isSubmitting}
              type="submit"
            >
              Entrar
            </Button>
          </Flex>
        </form>
      </Flex>
    </Center>
  );
}

export default Login;
