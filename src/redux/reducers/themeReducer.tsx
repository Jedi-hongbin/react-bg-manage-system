import {
  THEME_TYPE,
  Theme_State as IState,
  Theme_Action as IAction,
} from "../types";
import { lightTheme } from "../../theme";

const initialState = {
  theme: lightTheme,
};

const themeReducer = (
  state: IState = initialState,
  action: IAction
): IState => {
  const { type, payload } = action;
  switch (type) {
    case THEME_TYPE.APPLY_THEME:
      //   return Object.assign(state, { theme: payload });
      return { ...state, theme: payload };
    default:
      return state;
  }
};

export default themeReducer;
