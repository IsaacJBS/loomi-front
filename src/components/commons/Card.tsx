import React from "react";
import { Flex, Box, Text } from "@chakra-ui/react";

function Card() {
  return (
    <Flex>
      <Box w={220} h={160} borderRadius="15px" p={3} backgroundColor="bgWhite">
        <Text fontFamily="body" fontWeight="bold">
          Ticket médio últimas 24h{" "}
        </Text>
        <Text mt={2} fontSize="12px" fontFamily="body">
          + 15%{" "}
        </Text>
        <Text mt={2}>em relação a ontem</Text>
        <Flex mt={3} gap={3}>
          <Text>R$</Text>
          <Text fontFamily="body" fontWeight="bold">
            9.292,00
          </Text>
        </Flex>
      </Box>
    </Flex>
  );
}

export default Card;
