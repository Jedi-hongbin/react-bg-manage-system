import { Dispatch } from "react";
import { THEME_TYPE } from "../types";

type Theme = any;

type ApplyTheme = { type: THEME_TYPE.APPLY_THEME; payload: Theme };
const applyThemeAction = (theme: Theme): ApplyTheme => ({
  type: THEME_TYPE.APPLY_THEME,
  payload: theme,
});

export const applyTheme = (theme: Theme) => (
  dispatch: Dispatch<ApplyTheme>
) => {
  dispatch(applyThemeAction(theme));
};
