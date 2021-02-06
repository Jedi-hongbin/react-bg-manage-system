import styled from "styled-components";
import { Button as MaterialButton } from "@material-ui/core";
import { themePrimaryBackground } from "../../../constants/styled";

interface MyButtonProps {
  theme?: any;
  width?: string;
}

export const Button = styled(MaterialButton)`
  width: ${(props: MyButtonProps) => (props.width ? props.width : undefined)};
  ${themePrimaryBackground};
  color: white !important;
`;
