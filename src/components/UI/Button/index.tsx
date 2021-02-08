import { Button as MaterialButton } from "@material-ui/core";
import styled from "styled-components";
import { BaseCssProps } from "../typing";

interface ButtonProps extends BaseCssProps {}

export const Button = styled(MaterialButton)((props: ButtonProps) => ({
  width: props.width,
  height: props.height,
  flex: props.flex,
}));

// export const Button = styled(MaterialButton)`
//   width: ${(props: { width?: string }) => props.width || undefined};
// `;
// export const Button: FC<ButtonProps> = (props): ReactElement => {
//   return <MaterialButton {...props}> {props.children} </MaterialButton>;
// };
