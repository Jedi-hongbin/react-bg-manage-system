import { createMuiTheme } from "@material-ui/core";
import { Mode } from "../redux/types";

export const darkTheme = createMuiTheme({
  palette: {
    type: Mode.DARK,
    primary: {
      main: "#fff",
    },
  },
});

export const lightTheme = createMuiTheme({
  palette: {
    type: Mode.LIGHT,
    primary: {
      main: "#51f",
    },
  },
});

// export const lightTheme = {
//   colors: {
//     primary: "#51f",
//     bg: "#fff",
//     secondBg: "#fefafa",
//     shadow: "#CCC",
//     fc: "#000",
//   },
//   mode: Mode.LIGHT,
// };

// export const darkTheme = {
//   colors: {
//     primary: "#51f",
//     bg: "#000",
//     secondBg: "#333",
//     shadow: "#333",
//     fc: "#fff",
//   },
//   mode: Mode.DARK,
// };
