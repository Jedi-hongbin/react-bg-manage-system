const light = { primary: "#51f", bg: "#fff", secondBg: "#ccc", fc: "#000" };
const dark = { primary: "#51f", bg: "#000", secondBg: "#333", fc: "#fff" };

export enum Mode {
  LIGHT = "light",
  DARK = "dark",
}

export const mode = Mode.LIGHT;
const color = dark;
const theme = { mode, color };
export default theme;
