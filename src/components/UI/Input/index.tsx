import { TextField as MaterialTextField } from "@material-ui/core";
import styled from "styled-components";
import { BaseCssProps } from "../typing";

interface TextFieldProps extends BaseCssProps {}

export const TextField = styled(MaterialTextField).attrs({ variant: "filled" })(
  (props: TextFieldProps) => ({
    width: props.width,
    height: props.height,
    flex: props.flex,
  })
);

// export const TextField = styled(MaterialTextField).attrs({
//   variant: "filled",
// })`
//   width: ${(props: { flex?: number; height?: string; width?: string }) =>
//     props.width || undefined};
//   height: ${(props: { flex?: number; height?: string; width?: string }) =>
//     props.height || undefined};
//   flex: ${(props: { flex?: number; height?: string; width?: string }) =>
//     props.flex || undefined};
// `;

// const PropsBox = styled(MaterialTextField)(
//   (props: { background?: string }) => ({
//     background: props.background,
//     height: "50px",
//     width: "50px",
//   })
// );

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
