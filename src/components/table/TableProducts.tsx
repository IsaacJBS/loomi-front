/* eslint-disable react/no-children-prop */
import React, { useEffect, useState } from "react";
import { SearchIcon } from "@chakra-ui/icons";
import "@fontsource/ubuntu";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  TableContainer,
  Box,
  InputRightElement,
  InputGroup,
  Input,
  Heading,
  Flex,
} from "@chakra-ui/react";
import axios from "../../api/axios";
import Rows from "./Rows";

const productsUrl = "/products?page=2&limit=10";

function TableProducts() {
  const [products, setProducts] = useState([]);

  async function getAllProducts() {
    try {
      const response = await axios.get(productsUrl);
      setProducts(response.data);
    } catch (error: any) {
      throw new Error(error);
    }
  }

  useEffect(() => {
    getAllProducts();
  }, []);

  return (
    <Box w="85vw" p={10} bgColor="bgWhite">
      <Flex justifyContent="space-between" alignItems="center" mb={10}>
        <Heading as="h3" size="lg" fontFamily="body">
          Listagem de Produtos
        </Heading>
        <InputGroup w="300">
          <InputRightElement children={<SearchIcon color="black" />} />
          <Input bgColor="brand.700" />
        </InputGroup>
      </Flex>
      <TableContainer w="85vw" bgColor="white">
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th color="white" bgColor="title" borderRadius={9} mr={2}>
                Produto
              </Th>
              <Th color="white" bgColor="title" borderRadius={9}>
                Cores
              </Th>
              <Th w={600} color="white" bgColor="title" borderRadius={9}>
                Especificações
              </Th>
              <Th color="white" bgColor="title" borderRadius={9}>
                Status
              </Th>
            </Tr>
          </Thead>
          <Tbody>
            {products.map((item: any) => {
              return (
                <Rows
                  key={item.id}
                  product={item.name}
                  color={item.color}
                  description={item.description}
                  productStatus={item.status}
                />
              );
            })}
          </Tbody>
        </Table>
      </TableContainer>
    </Box>
  );
}

export default TableProducts;
