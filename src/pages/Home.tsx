import "@fontsource/nunito-sans";
import "@fontsource/ubuntu";
import React from "react";
import { Box, Flex } from "@chakra-ui/react";
import Header from "../components/Header";
import SideBar from "../components/SideBar";
import backgroundImg from "../assets/background-img.svg";
// import TableProducts from "../components/table/TableProducts";

// import Dashboard from "../components/sections/Dashboard";
import ConversionTunnel from "../components/sections/ConversionTunnel";
// import Beginning from "../components/sections/Beginning";
// import UserPerfil from "../components/sections/UserPerfil";

function Home() {
  return (
    <Box backgroundImage={backgroundImg}>
      <Box>
        <Header
          name="Eduardo"
          imageUrl="https://mir-s3-cdn-cf.behance.net/projects/404/d4ba0348411353.Y3JvcCw3MDYsNTUyLDI3LDA.png"
        />
        <Flex gap={10} mt={10}>
          <SideBar />
          <Flex flexDirection="column">
            {/* <Beginning />
            <Dashboard /> */}
            <ConversionTunnel />
            {/* <UserPerfil /> */}
            {/* <TableProducts /> */}
          </Flex>
        </Flex>
      </Box>
    </Box>
  );
}

export default Home;
