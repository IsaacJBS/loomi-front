import React from "react";
import { Flex, Text } from "@chakra-ui/react";
import Card from "./commons/Card";

interface IProps {
  name: string;
}

function Carousel({ name }: IProps) {
  return (
    <Flex flexDirection="column" mt={name === "Inicio" ? "0" : "40px"}>
      <Text
        fontSize={28}
        fontWeight="bold"
        ml={6}
        mb={2}
        textColor={name === "Inicio" ? "title" : "secondTitle"}
      >
        {name}
      </Text>
      <Flex gap={5}>
        <Card />
        <Card />
        <Card />
        <Card />
      </Flex>
    </Flex>
  );
}

export default Carousel;
