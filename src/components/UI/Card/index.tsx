import React from "react";
import styled, { css, StyledComponent } from "styled-components";
import { AlignItems, JustifyContentProps } from "../../../type";
import {
  Capitalize,
  flexCenter,
  Lowercase,
  Uppercase,
} from "../../../constants/styled";

// text-shadow: h-shadow x-shadow blur color
const textShadow = css`
  text-shadow: 0px 0px 3px #000;
`;

type handlePrototypeProps = ({
  key,
  def,
  sameAttribute,
}: {
  key?: string;
  def?: string;
  sameAttribute?: string;
}) => (props: { [any: string]: any }) => string;

const handlePrototype: handlePrototypeProps = ({ key, def, sameAttribute }) => (
  props
) => {
  if (!!key && props[key]) {
    return props[key];
  }
  if (!!sameAttribute) {
    return props[sameAttribute] ?? props.theme.color.primary;
  }
  return props.theme.color.primary;
};

interface RFCDivProps {
  theme?: any;
  className?: string;
  content?: JustifyContentProps;
  items?: AlignItems;
  // [any: string]: any;
}

const RFCDiv: React.FC<RFCDivProps> = (props) => (
  <div className={props.className}>{props.children}</div>
);

export const flexBoxDiv = styled(RFCDiv)`
  display: flex;
  justify-content: ${({ content }) => content};
  align-items: ${({ items }) => items};
`;

type ShadowViewProps = StyledComponent<
  React.FC<RFCDivProps & { shadow?: string }>,
  any,
  {},
  any
>;
// shadow attr: inset h-shadow x-shadow blur spread
const ShadowView: ShadowViewProps = styled(flexBoxDiv)`
  box-shadow: 0px 0px 3px 1px
    ${handlePrototype({ key: "shadow", def: "orange", sameAttribute: "bgc" })};
  transition: all 0.3s linear;
  border-radius: 0.5rem;

  :hover {
    box-shadow: 0px 0px 20px 3px
      ${handlePrototype({
        key: "shadow",
        def: "orange",
        sameAttribute: "bgc",
      })};
    filter: brightness(1.1);
  }
`;

type CardProps = StyledComponent<
  React.FC<RFCDivProps & { shadow?: string; bgc?: string | undefined }>,
  any,
  {},
  any
>;

export const Card: any = styled(ShadowView)`
  width: 10rem;
  height: 10rem;
  background-color: ${(props: { bgc?: string; theme?: any }) => {
    console.log(props.theme);
    return props.bgc || props.theme.color.primary;
  }};
  ${flexCenter};
`;

interface SpanProps {
  theme?: any;
  shadow?: boolean;
  bold?: boolean;
  color?: string;
  className?: string;
  capitalize?: boolean;
  uppercase?: boolean;
  lowercase?: boolean;
}

const RFCSpan: React.FC<SpanProps> = (props) => (
  <span className={props.className}>{props.children}</span>
);

export const Span = styled(RFCSpan)`
  color: ${({ color }) => color || "black"};
  font-size: 1rem;
  font-weight: ${({ bold }) => (bold ? "bold" : undefined)};
  ${({ shadow }) => (shadow ? textShadow : undefined)}
  ${({ capitalize, uppercase }) =>
    capitalize ? Capitalize : uppercase ? Uppercase : Lowercase}
`;

const randomValue = () => Math.floor(Math.random() * 256);

export const randomColor = () =>
  `rgba(${randomValue()},${randomValue()},${randomValue()})`;
