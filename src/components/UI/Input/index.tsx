import {
  TextField as MaterialTextField,
  TextFieldProps,
} from "@material-ui/core";
import { Theme } from "../../../redux/types";
import styled, { StyledComponent } from "styled-components";

type StyledProps = {
  theme?: Theme;
  width?: string;
  flex?: number;
  height?: string;
};

type IProps = StyledComponent<
  (props: TextFieldProps) => JSX.Element,
  any,
  {
    variant: "filled";
    width?: string;
    flex?: number;
    height?: string;
  },
  "variant"
>;

export const TextField = styled(MaterialTextField).attrs({
  variant: "filled",
})`
  width: ${(props: { flex?: number; height?: string; width?: string }) =>
    props.width || undefined};
  height: ${(props: { flex?: number; height?: string; width?: string }) =>
    props.height || undefined};
  flex: ${(props: { flex?: number; height?: string; width?: string }) =>
    props.flex || undefined};
`;

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
