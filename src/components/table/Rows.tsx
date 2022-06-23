import React from "react";
import { Tr, Td, Flex, Image, Text, Box } from "@chakra-ui/react";
import image from "../../assets/image.jpg";
import active from "../../assets/v.svg";

interface IProps {
  product: string;
  color: string;
  description: string;
  productStatus: string;
}

function Rows({ product, color, description, productStatus }: IProps) {
  return (
    <Tr>
      <Td>
        <Flex alignItems="center" gap={3}>
          <Image src={image} alt="chair" w={10} />
          <Text>{product}</Text>
        </Flex>
      </Td>
      <Td>{color}</Td>
      <Td whiteSpace="pre-wrap">{description}</Td>
      <Td>
        <Flex alignItems="center">
          <Box w="90px">
            <Text>{productStatus}</Text>
          </Box>
          <Box>
            <Image src={active} alt="v" />
          </Box>
        </Flex>
      </Td>
    </Tr>
  );
}

export default Rows;
