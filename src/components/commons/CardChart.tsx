import React from "react";

import { Box, Flex, Select, Text } from "@chakra-ui/react";

interface IProps {
  title: string;
  // children: React.ReactNode;
}

function CardChart({ title }: IProps) {
  return (
    <Box w={500} h={400} bgColor="bgWhite" p={4}>
      <Flex justifyContent="space-between" alignItems="center">
        <Text>{title}</Text>
        <Select w={150} placeholder="ano" bgColor="brand.700">
          <option value="">2022</option>
        </Select>
        <Box />
      </Flex>
    </Box>
  );
}

export default CardChart;
