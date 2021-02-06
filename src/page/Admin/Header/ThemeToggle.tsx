import React, { FC, ReactElement, useCallback } from "react";
import { LightIcon, DarkIcon } from "./styled";
import { lightTheme, darkTheme } from "../../../theme";
import { useDispatch, useSelector } from "react-redux";
import { Mode } from "../../../redux/types";
import Tooltip from "../../../components/UI/Tooltip";
import { applyTheme } from "../../../redux/actions/themeActions";

interface IProps {}

const ThemeToggle: FC<IProps> = (): ReactElement => {
  const {
    theme: {
      palette: { type },
    },
  } = useSelector((state: any) => state.theme);
  const dispatch = useDispatch();

  const selectTheme = useCallback(
    (theme) => () => {
      applyTheme(theme)(dispatch);
    },
    [dispatch]
  );

  return (
    <Tooltip title={type}>
      {type === Mode.LIGHT ? (
        <LightIcon onClick={selectTheme(darkTheme)} />
      ) : (
        <DarkIcon onClick={selectTheme(lightTheme)} />
      )}
    </Tooltip>
  );
};

export default ThemeToggle;
