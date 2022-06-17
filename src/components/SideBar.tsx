import React from "react";
import { Flex, Box } from "@chakra-ui/react";
import card from "../assets/card.svg";
import cat from "../assets/cat.svg";
import gear from "../assets/gear.svg";
import log from "../assets/log.svg";
import menu from "../assets/menu.svg";
import person from "../assets/person.svg";
import services from "../assets/services.svg";
import text from "../assets/text.svg";
import buy from "../assets/Buy.svg";
import home from "../assets/home.svg";

import CustomSidebarButton from "./commons/SidebarButton";

// type Props = {}

function SideBar() {
  return (
    <Flex
      ml={3}
      flexDirection="column"
      p={1}
      boxShadow="md"
      w={20}
      h={650}
      alignItems="center"
      backgroundColor="bgWhite"
    >
      <Box borderBottom="1px solid #E0E0E0" mb={4}>
        <CustomSidebarButton disabled imageUrl={menu} />
      </Box>
      <CustomSidebarButton disabled={false} imageUrl={home} />
      <CustomSidebarButton disabled imageUrl={cat} />
      <CustomSidebarButton disabled imageUrl={services} />
      <CustomSidebarButton disabled imageUrl={log} />
      <CustomSidebarButton disabled imageUrl={buy} />
      <CustomSidebarButton disabled imageUrl={card} />
      <CustomSidebarButton disabled imageUrl={text} />
      <CustomSidebarButton disabled imageUrl={person} />
      <CustomSidebarButton disabled imageUrl={gear} />
    </Flex>
  );
}

export default SideBar;
