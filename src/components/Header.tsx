import React from "react";
import { Flex, Text, Image } from "@chakra-ui/react";
import logo from "../assets/logo.svg";
import "@fontsource/ubuntu";

interface IProps {
  name: string;
  imageUrl: string;
}

function Header({ name, imageUrl }: IProps) {
  return (
    <Flex
      alignItems="center"
      justifyContent="space-between"
      p={5}
      boxShadow="md"
    >
      <Image w={50} src={logo} />
      <Flex alignItems="center" gap={5}>
        <Text fontFamily="body" textColor="#4E5D66" fontWeight="semibold">
          {name}
        </Text>
        <Image w={10} h={10} borderRadius="50%" src={imageUrl} />
      </Flex>
    </Flex>
  );
}

export default Header;
