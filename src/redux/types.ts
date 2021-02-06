// theme
export enum Mode {
  LIGHT = "light",
  DARK = "dark",
}

export type Theme = {
  colors: {
    primary: string;
    bg: string;
    secondBg: string;
    fc: string;
  };
  mode: Mode;
};

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
