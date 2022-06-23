import React from "react";
import { Text } from "@chakra-ui/react";

interface IProps {
  text: string;
  color: string;
  percent: boolean;
}

function Tag({ text, color, percent }: IProps) {
  return (
    <Text
      mt={2}
      p={1}
      fontSize="12px"
      boxShadow="base"
      w="70px"
      textAlign="center"
      borderRadius="15px"
      textColor={color}
    >
      {percent ? `${text} %` : `há ${text} dias`}
    </Text>
  );
}

export default Tag;
