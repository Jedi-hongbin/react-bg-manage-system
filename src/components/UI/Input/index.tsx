import {
  TextField as MaterialTextField,
  TextFieldProps,
} from "@material-ui/core";
import { Mode, Theme } from "../../../redux/types";
import styled, { StyledComponent } from "styled-components";
import { themeBackground, themeFontColor } from "../../../constants/styled";

type StyledProps = {
  light_bgc?: string;
  dark_bgc?: string;
  theme?: Theme;
};

type IProps = StyledComponent<
  (props: TextFieldProps & StyledProps) => JSX.Element,
  any,
  {
    variant: "filled";
  },
  "variant"
>;

export const TextField: IProps = styled(MaterialTextField).attrs({
  variant: "filled",
})``;

// .MuiFilledInput-root {
//     ${themeFontColor};
//     background-color: ${(props: StyledProps) => {
//       if (props!.theme!.mode === Mode.LIGHT) {
//         return props.light_bgc ? props.light_bgc : undefined;
//       }
//       return props.dark_bgc ? props.dark_bgc : undefined;
//     }} !important;
//     &::before {
//       border-color: ${(props) => props.theme.colors.primary} !important;
//       /* border: none !important; */
//     }

//     &:hover {
//       background-color: ${(props: StyledProps) => {
//         if (props!.theme!.mode === Mode.LIGHT) {
//           return props.light_bgc ? props.light_bgc : undefined;
//         }
//         return props.dark_bgc ? props.dark_bgc : undefined;
//       }} !important;
//     }
//   }

// export const TextField: FC<TextFieldProps> = (props): ReactElement => (
//   <MaterialTextField {...props} />
// );
