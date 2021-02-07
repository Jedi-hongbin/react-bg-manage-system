import { Button as MaterialButton } from "@material-ui/core";
import styled from "styled-components";

export const Button = styled(MaterialButton)`
  width: ${(props: { width?: string }) => props.width || undefined};
`;
// export const Button: FC<ButtonProps> = (props): ReactElement => {
//   return <MaterialButton {...props}> {props.children} </MaterialButton>;
// };
