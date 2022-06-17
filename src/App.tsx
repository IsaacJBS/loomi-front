import * as React from "react";
import { ChakraProvider, Box, Text, Grid, theme } from "@chakra-ui/react";

export default function App() {
  return (
    <ChakraProvider theme={theme}>
      <Box textAlign="center" fontSize="xl">
        <Grid minH="100vh" p={3}>
          <Text>Olá, Loomi</Text>
        </Grid>
      </Box>
    </ChakraProvider>
  );
}
