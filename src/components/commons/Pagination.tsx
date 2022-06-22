import { Flex, Button, Text } from "@chakra-ui/react";
import React from "react";
import "@fontsource/ubuntu";

interface IPagination {
  actualPage: number;
  setActualPage: any;
}

function Pagination({ actualPage, setActualPage }: IPagination) {
  const totalPage: number = 6;
  const firstPage: number = 1;

  const handleSetNextPage = () => {
    setActualPage(actualPage + 1);
  };

  const handleSetPreviousPage = () => {
    setActualPage(actualPage - 1);
  };

  return (
    <Flex mt={10} alignItems="center">
      <Text color="#B0B0B0" mr={6}>
        {actualPage} de {totalPage}
      </Text>
      <Button
        onClick={handleSetPreviousPage}
        disabled={actualPage === firstPage}
      >
        ˂
      </Button>
      <Button onClick={handleSetNextPage} disabled={actualPage === totalPage}>
        ˃
      </Button>
    </Flex>
  );
}

export default Pagination;
