import { extendTheme } from "@chakra-ui/react";

const colors = {
  brand: {
    900: "#1E252B",
    800: "#333333",
    700: "#F3F5F6",
  },
  main: "#5A4CA7",
  bgWhite: "#FFFFFF",
  title: "#4E5D66",
  secondTitle: "#5A4CA7",
};

const fonts = {
  title: `'Nunito Sans', sans-serif`,
  body: `'Ubuntu', sans-serif`,
};

const theme = extendTheme({ colors, fonts });
export default theme;
