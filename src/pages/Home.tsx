import "@fontsource/nunito-sans";
import "@fontsource/ubuntu";
import React from "react";
import { Box, Flex } from "@chakra-ui/react";
import Header from "../components/Header";
import SideBar from "../components/SideBar";
import Carousel from "../components/Carousel";
import backgroundImg from "../assets/background-img.svg";
import ChartSalesPerMonth from "../components/charts/ChartSalesPerMonth";
import ProfitExpectation from "../components/charts/ChartProfitExpectation";
// import ChartOrders from "../components/charts/ChartOrders";
import CardAverageTicket from "../components/cards/CardAverageTicket";
import CardAverageMonthly from "../components/cards/CardAverageMonthly";
import CardOrdersMonth from "../components/cards/CardOrdersMonth";

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
            <Carousel name="Inicio">
              <CardAverageTicket />
              <CardAverageMonthly />
              <CardOrdersMonth />
            </Carousel>
            <Carousel name="Dashboard de vendas">
              <ChartSalesPerMonth />
              <ProfitExpectation />
              {/* <ChartOrders /> */}
            </Carousel>
          </Flex>
        </Flex>
      </Box>
    </Box>
  );
}

export default Home;
