import { Theme as MaterTheme } from "@material-ui/core";
export type Theme = MaterTheme;
// theme
export enum Mode {
  LIGHT = "light",
  DARK = "dark",
}

export enum THEME_TYPE {
  APPLY_THEME = "APPLY_THEME",
}

export interface Theme_State {
  theme: Theme;
}

export interface Theme_Action {
  type: THEME_TYPE;
  payload: Theme;
}
