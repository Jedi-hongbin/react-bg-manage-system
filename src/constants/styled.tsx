import styled, { css } from "styled-components";
// import { Button as AntDButton } from "antd";
import { Button as MaterialButton, ButtonTypeMap } from "@material-ui/core";

export const flexCenter = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const BetweenCenter = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Capitalize = css`
  text-transform: capitalize;
`;

export const Uppercase = css`
  text-transform: uppercase;
`;

export const Lowercase = css`
  text-transform: lowercase;
`;

// text-shadow: h-shadow x-shadow blur color
export const textShadow = css`
  text-shadow: 0px 0px 3px #000;
`;

// type MyButtonProps = {
//   theme?: any;
//   widthFill?: boolean;
//   onClick?: () => void;
// } & ButtonTypeMap["props"];

// const MyButton: React.FC<MyButtonProps> = (props) => (
//   <MaterialButton>{props.children}</MaterialButton>
// );

type MyButtonProps = {
  theme?: any;
  widthFill?: boolean;
};

// export const Button = styled(AntDButton)``;
export const Button = styled(MaterialButton)`
  width: ${(props: MyButtonProps) => (props.widthFill ? "100%" : undefined)};
`;
