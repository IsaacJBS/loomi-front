import React from "react";
import { Text } from "@chakra-ui/react";

interface IProps {
  text: string;
  color: string;
}

function Tag({ text, color }: IProps) {
  return (
    <Text
      mt={2}
      p={1}
      fontSize="12px"
      boxShadow="base"
      maxW={12}
      borderRadius="15px"
      textColor={color}
    >
      {text}
    </Text>
  );
}

export default Tag;
