import styled, { css } from "styled-components";
// import { Button as AntDButton } from "antd";
import { Button as MaterialButton } from "@material-ui/core";

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

export const Div = styled.div`
  background-color: ${(props) => props.theme.colors.bg};
  color: ${(props) => props.theme.colors.fc};
`;

export const Span = styled.span`
  color: ${(props) => props.theme.colors.fc};
`;

export const P = styled.p`
  color: ${(props) => props.theme.colors.fc};
`;

// type MyButtonProps = {
//   theme?: any;
//   widthFill?: boolean;
//   onClick?: () => void;
// } & ButtonTypeMap["props"];

// const MyButton: React.FC<MyButtonProps> = (props) => (
//   <MaterialButton>{props.children}</MaterialButton>
// );

// interface MyButtonProps extends ExtendButtonBase<ButtonTypeMap<{}, "button">> {
//   theme?: any;
//   fill?: any;
//   name?: string;
// }

// type A = ExtendButtonBase<ButtonTypeMap<{}, "button">>;

// const MyMaterialButton: React.FC<A> = (props): ReactElement => (
//   <MaterialButton>{props.children}</MaterialButton>
// );
// export const Button = styled(AntDButton)``;

interface MyButtonProps {
  theme?: any;
  width?: string;
}
export const Button = styled(MaterialButton)`
  width: ${(props: MyButtonProps) => (props.width ? props.width : undefined)};
`;
