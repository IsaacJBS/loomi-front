import React from "react";
import { Flex, Text } from "@chakra-ui/react";

interface IProps {
  name: string;
  children: React.ReactNode;
}

function Carousel({ name, children }: IProps) {
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
      <Flex gap={5}>{children}</Flex>
    </Flex>
  );
}

export default Carousel;
