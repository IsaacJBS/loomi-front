import * as React from "react";
import { Box, Text, Grid } from "@chakra-ui/react";
import backgroundImg from "./assets/background-img.svg";

export default function App() {
  return (
    <Box backgroundImage={backgroundImg} textAlign="center" fontSize="xl">
      <Grid minH="100vh" p={3}>
        <Text textColor="brand.900">Olá, Loomi</Text>
      </Grid>
    </Box>
  );
}
