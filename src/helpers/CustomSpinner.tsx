import React from "react";
import { Spinner } from "@chakra-ui/react";

interface IProps {
  size: string;
}

function CustomSpinner({ size }: IProps) {
  return <Spinner color="main" size={size} />;
}

export default CustomSpinner;
