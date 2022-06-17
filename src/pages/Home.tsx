import React from "react";
import { Box } from "@chakra-ui/react";
import Header from "../components/Header";
import SideBar from "../components/SideBar";
import backgroundImg from "../assets/background-img.svg";

// type Props = {}

function Home() {
  return (
    <Box backgroundImage={backgroundImg}>
      <Box>
        <Header
          name="Eduardo"
          imageUrl="https://mir-s3-cdn-cf.behance.net/projects/404/d4ba0348411353.Y3JvcCw3MDYsNTUyLDI3LDA.png"
        />
        <SideBar />
      </Box>
    </Box>
  );
}

export default Home;
