import React, { FC } from "react";
import { Button, Space, Row, Col } from "antd";
import "./App.css";
import styled from "styled-components";
import { Card } from "./components/UI/Card";

const MyButton = styled.button`
  background-color: ${(props: { bgc?: string }) => props.bgc || "#51f"};
  padding: 4px;
  outline: none;
  border: 1px solid ${(props: { bgc?: string }) => props.bgc || "#51f"};
  border-radius: 2px;
  color: white;
`;

const AntDButton = styled(Button)``;

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
        <Space
          style={{
            border: "1px solid #000",
            width: "100%",
            overflowX: "scroll",
          }}
        >
          <AntDButton>AntDButton</AntDButton>
          <Input />
          <PassWorldInput />
        </Space>
        <Space>
          <Card bgc="orange">
            <span>orange</span>
          </Card>
          <Card bgc="blue">
            <span>blue</span>
          </Card>
        </Space>
      </Space>
    </div>
  );
};

export default App;
