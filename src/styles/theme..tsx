import { extendTheme } from "@chakra-ui/react";

const colors = {
  brand: {
    900: "#1E252B",
    800: "#333333",
    700: "#F3F5F6",
  },
  bgWhite: "#FFFFFF",
};

const theme = extendTheme({ colors });
export default theme;
