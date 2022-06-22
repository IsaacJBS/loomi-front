import "@fontsource/nunito-sans";
import "@fontsource/ubuntu";
import React, { lazy } from "react";
import { Box, Flex } from "@chakra-ui/react";
import Header from "../components/Header";
import SideBar from "../components/SideBar";
import backgroundImg from "../assets/background-img.svg";
import TableProducts from "../components/table/TableProducts";

const Dashboard = lazy(() => import("../components/sections/Dashboard"));
const ConversionTunnel = lazy(
  () => import("../components/sections/ConversionTunnel")
);
const Beginning = lazy(() => import("../components/sections/Beginning"));
const UserPerfil = lazy(() => import("../components/sections/UserPerfil"));

function Home() {
  return (
    <Box bgImage={backgroundImg}>
      <Box>
        <Header />
        <Flex gap={10} mt={10}>
          <SideBar />
          <Flex flexDirection="column">
            <Beginning />
            <Dashboard />
            <ConversionTunnel />
            <UserPerfil />
            <TableProducts />
          </Flex>
        </Flex>
      </Box>
    </Box>
  );
}

export default Home;
