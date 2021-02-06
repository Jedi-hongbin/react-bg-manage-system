import { Mode } from "../redux/types";

export const lightTheme = {
  colors: {
    primary: "#51f",
    bg: "#fff",
    secondBg: "#fefafa",
    shadow: "#CCC",
    fc: "#000",
  },
  mode: Mode.LIGHT,
};

export const darkTheme = {
  colors: {
    primary: "#51f",
    bg: "#000",
    secondBg: "#333",
    shadow: "#333",
    fc: "#fff",
  },
  mode: Mode.DARK,
};