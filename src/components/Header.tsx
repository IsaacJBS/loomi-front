import React, { useEffect, useState } from "react";
import { Flex, Text, Image } from "@chakra-ui/react";
import logo from "../assets/logo.svg";
import "@fontsource/ubuntu";
import axios from "../api/axios";

const url = "/me";

function Header() {
  const [name, setName] = useState<string>("");
  const [imageUrl, setImageUrl] = useState<string>("");

  async function getUser() {
    try {
      const user = await axios.get(url);
      setName(user.data.name);
      setImageUrl(user.data.avatar);
    } catch (error) {
      throw new Error("An error occurred");
    }
  }

  useEffect(() => {
    getUser();
  }, []);

  return (
    <Flex
      alignItems="center"
      justifyContent="space-between"
      p={5}
      boxShadow="md"
      backgroundColor="bgWhite"
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
