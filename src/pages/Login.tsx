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
import backgroundImg from "../assets/background-img.svg";
import logo from "../assets/logo.svg";
import eye from "../assets/eye.svg";
import eyeSlash from "../assets/eye-slash.svg";

function Login() {
  const [input, setInput] = useState<string>("");
  const [show, setShow] = useState<boolean>(false);
  const handleClick = () => setShow(!show);

  const handleInputChange = (e: {
    target: { value: React.SetStateAction<string> };
  }) => setInput(e.target.value);

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
        <FormControl mt={10} w={400}>
          <FormLabel fontWeight="normal" ml={4} htmlFor="email">
            E-mail
          </FormLabel>
          <Input
            id="email"
            type="email"
            value={input}
            onChange={handleInputChange}
            backgroundColor="brand.700"
          />

          <FormLabel fontWeight="normal" mt={5} ml={4} htmlFor="email">
            Senha
          </FormLabel>
          <InputGroup size="md">
            <Input
              pr="4.5rem"
              type={show ? "text" : "password"}
              placeholder="Enter password"
              backgroundColor="brand.700"
            />
            <InputRightElement width="4.5rem">
              <Button
                backgroundColor="transparent"
                h="1.75rem"
                size="sm"
                onClick={handleClick}
              >
                {show ? <Image src={eyeSlash} /> : <Image src={eye} />}
              </Button>
            </InputRightElement>
          </InputGroup>
        </FormControl>
        <Button
          mt={6}
          colorScheme="purple"
          backgroundColor="main"
          textColor="white"
          fontWeight="normal"
        >
          Entrar
        </Button>
      </Flex>
    </Center>
  );
}

export default Login;
