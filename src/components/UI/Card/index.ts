import styled, { StyledComponent, css } from "styled-components";

const flexCenter = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const capitalize = css`
  text-transform: capitalize;
`;

const uppercase = css`
  text-transform: uppercase;
`;

const lowercase = css`
  text-transform: lowercase;
`;

const textShadow = css`
  /*text-shadow: h-shadow x-shadow blur color */
  text-shadow: 0px 0px 3px #000;
`;

const randomColor = () =>
  `rgba(${Math.floor(Math.random() * 256)},${Math.floor(
    Math.random() * 256
  )},${Math.floor(Math.random() * 256)})`;

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
    return props[sameAttribute] ?? def;
  }
  return def;
};

type ShadowViewProps = StyledComponent<
  "div",
  any,
  { shadow?: string; bgc?: string },
  never
>;
// shadow attr: inset h-shadow x-shadow blur spread
const ShadowView: ShadowViewProps = styled.div`
  box-shadow: 0px 0px 3px 1px
    ${handlePrototype({ key: "shadow", def: "orange", sameAttribute: "bgc" })};
  transition: all 0.3s linear;
  border-radius: 0.5rem;

  :hover {
    box-shadow: 0px 0px 20px 3px
      ${handlePrototype({ key: "shadow", def: "orange", sameAttribute: "bgc" })};
    filter: brightness(1.1);
  }
`;

export const Card = styled(ShadowView)`
  width: 10rem;
  height: 10rem;
  background-color: ${(props: { bgc?: string }) => props.bgc || undefined};
  ${flexCenter};

  span {
    color: white;
    font-size: 1rem;
    font-weight: bold;
    ${textShadow};
    ${uppercase}
  }
`;
