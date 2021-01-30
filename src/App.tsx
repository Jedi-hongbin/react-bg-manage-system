import React, { FC } from "react";
import { Button, Space, Row, Col } from "antd";
import "./App.css";
import styled, { css } from "styled-components";

const MyButton = styled.button`
  background-color: ${(props: { bgc?: string }) => props.bgc || "#51f"};
  padding: 4px;
  outline: none;
  border: 1px solid ${(props: { bgc?: string }) => props.bgc || "#51f"};
  border-radius: 2px;
  color: white;
`;

// const shadow = css`
//   box-shadow: ${({ bgc }: { bgc?: string }) =>
//     `0px 0px 15px 5px ${bgc || "orange"}`};
// `;
const textShadow = css`
  text-shadow: 1px 1px 1px tomato;
`;

const flexCenter = css`
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
/* ${(props: { bgc?: string; center?: boolean }) => {
    console.log("props:", props);
    return props.center ? flexCenter : undefined;
  }} */
const Card = styled.div`
  width: 200px;
  height: 200px;
  display: flex;
  box-shadow: 0px 0px 10px 3px #ccc;
  border-radius: 5px;
  transition: 0.3s linear all;
  background-color: ${({ bgc }: { bgc?: string }) => bgc || "orange"};

  ${(props: { bgc?: string; center?: boolean }) =>
    props.center ? flexCenter : undefined}

  :hover {
    box-shadow: ${({ bgc }: { bgc?: string }) =>
      `0px 0px 15px 5px ${bgc || "orange"}`};
  }

  button {
    background-color: ${({ bgc }: { bgc?: string }) => bgc || "orange"};
    transition: 0.3s linear all;
    :hover {
      box-shadow: ${({ bgc }: { bgc?: string }) =>
        `0px 0px 15px 5px ${bgc || "orange"}`};
    }
    :active {
      background-color: ${({ bgc }: { bgc?: string }) => bgc || "orange"};
    }
    :nth-child(odd) {
      color: blue;
      background-color: #fff;
      ${textShadow}
    }
  }
`;
console.log("Card:", Card);
// const AntDButton = styled(Button)`
//   background-color: ${({
//     imp,
//     bgc = "green",
//   }: {
//     imp?: boolean;
//     bgc?: string;
//   }) => {
//     console.log("hello!");
//     return `${bgc} ${imp ? "!important" : ""}`;
//   }};
// `;

const redBackGround = css`
  background-color: red !important;
`;

const AntDButton = styled(Button)`
  && {
    background-color: green;
  }
  background-color: black;
  ${redBackGround}
`;

const ExtendCard = styled(Card)``;

const Input = styled.input`
  border: none;
  border-bottom: 2px solid #51f;
  background-color: #ddd;
  padding: 4px;
  outline: none;
  color: white;
`;

const PassWorldInput = styled(Input).attrs({
  type: "password",
  placeholder: "Input",
})`
  border-bottom: 2px solid #faa;
`;

const LinkCard = Card.withComponent("a");

const border: any = { border: "1px solid orange", height: "50px" };

const App: FC = () => {
  return (
    <div className="App">
      <Space
        direction="vertical"
        style={{
          flex: 1,
          ...border,
          width: "100vw",
          height: "100vh",
        }}
      >
        <Row style={border}>
          <Col style={border} flex={1} span={6}></Col>
          <Col style={border} span={6}>
            <Space>
              <Button type="primary">Button</Button>
              <MyButton>MyButton</MyButton>
            </Space>
          </Col>
          <Col style={border} span={12}></Col>
        </Row>
        <Row style={border}>
          <Col style={border} flex={1}></Col>
          <Col style={border} flex={2}></Col>
        </Row>
        <Space style={{ border: "1px solid #000", width: "100%" }}>
          <Card bgc="#afa" center>
            <Button type="primary">Button</Button>
            <MyButton>MyButton</MyButton>
            <AntDButton type="ghost">AntDButton</AntDButton>
          </Card>
          <ExtendCard bgc="#f00" />
          <ExtendCard bgc="#00f" />
          <AntDButton>AntDButton</AntDButton>
          <Input />
          <PassWorldInput />
          <LinkCard />
        </Space>
      </Space>
    </div>
  );
};

export default App;
