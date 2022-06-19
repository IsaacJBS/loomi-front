import React from "react";
import { Image } from "@chakra-ui/react";

interface IProps {
  imageUrl: string;
  disabled: boolean;
}

function SidebarButton({ imageUrl, disabled }: IProps) {
  return (
    <Image
      p={3}
      src={imageUrl}
      backgroundColor={disabled ? "" : "main"}
      borderRadius={disabled ? "" : "6px"}
    />
  );
}

export default SidebarButton;
