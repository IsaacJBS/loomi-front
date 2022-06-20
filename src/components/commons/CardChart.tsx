import React from "react";

import { Box, Flex, Select, Text } from "@chakra-ui/react";

interface IProps {
  title: string;
  children: React.ReactNode;
}

function CardChart({ title, children }: IProps) {
  return (
    <Box w={500} h={400} bgColor="bgWhite" p={4}>
      <Flex justifyContent="space-between" alignItems="center">
        <Text>{title}</Text>
        <Select w={150} placeholder="ano" bgColor="brand.700">
          <option value="">2022</option>
        </Select>
      </Flex>
      <Box alignSelf="center" mt={3}>
        {children}
      </Box>
    </Box>
  );
}

export default CardChart;
