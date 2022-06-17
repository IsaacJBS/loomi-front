import React from "react";
import { Flex, Box, Text } from "@chakra-ui/react";
import Tag from "./Tag";

function Card() {
  return (
    <Flex>
      <Box w={220} h={160} borderRadius="15px" p={3} backgroundColor="bgWhite">
        <Text fontFamily="body" fontWeight="bold">
          Ticket médio últimas 24h{" "}
        </Text>
        <Tag color="#109E8E" text="+ 15%" />
        <Text color="#109E8E" mt={2}>
          em relação a ontem
        </Text>
        <Flex mt={3} gap={3}>
          <Text fontFamily="body" fontWeight="semi-bold">
            R$
          </Text>
          <Text fontFamily="body" fontWeight="bold">
            9.292,00
          </Text>
        </Flex>
      </Box>
    </Flex>
  );
}

export default Card;
