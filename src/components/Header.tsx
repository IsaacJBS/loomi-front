import React from "react";
import { Flex, Text, Image } from "@chakra-ui/react";
import logo from "../assets/logo.svg";

// type Props = {}

function Header() {
  return (
    <Flex>
      <Image src={logo} />
      <Text>Eduardo</Text>
    </Flex>
  );
}

export default Header;
