import React, { FC } from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";

const App: FC = () => {
  return (
    <Router>
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/dashboard" component={Dashboard} />
        <Redirect to={{ pathname: "login" }} />
      </Switch>
    </Router>
  );
};

export default App;

// const MyButton = styled.button`
//   background-color: ${(props: { bgc?: string }) => props.bgc || "#51f"};
//   padding: 4px;
//   outline: none;
//   border: 1px solid ${(props: { bgc?: string }) => props.bgc || "#51f"};
//   border-radius: 2px;
//   color: white;
// `;
//
// const AntDButton = styled(Button)``;
//
// const Input = styled.input`
//   border: none;
//   border-bottom: 2px solid #51f;
//   background-color: #ddd;
//   padding: 4px;
//   outline: none;
//   color: white;
// `;
//
// const PassWorldInput = styled(Input).attrs({
//   type: "password",
//   placeholder: "Input",
// })`
//   border-bottom: 2px solid #faa;
// `;
//
// const border: any = { border: "1px solid orange", height: "50px" };

// <div className="App">
//   //   <Space
//     direction="vertical"
//     style={{
//       flex: 1,
//       ...border,
//       width: "100vw",
//       height: "100vh",
//     }}
//   >
//     <Row style={border}>
//       <Col style={border} flex={1} span={6} />
//       <Col style={border} span={6}>
//         <Space>
//           <Button type="primary">Button</Button>
//           <MyButton>MyButton</MyButton>
//         </Space>
//       </Col>
//       <Col style={border} span={12} />
//     </Row>
//     <Row style={border}>
//       <Col style={border} flex={1} />
//       <Col style={border} flex={2} />
//     </Row>
//     <Space
//       style={{
//         border: "1px solid #000",
//         width: "100%",
//         overflowX: "scroll",
//       }}
//     >
//       <AntDButton type="primary">AntDButton</AntDButton>
//       <Input />
//       <PassWorldInput />
//     </Space>
//     <Space>
//       <Card bgc="orange">
//         <Span bold color="#FFF" shadow capitalize>
//           orange
//         </Span>
//         <Span bold color={randomColor()} shadow capitalize>
//           {randomColor()}
//         </Span>
//         <Span bold color={randomColor()} shadow capitalize>
//           {randomColor()}
//         </Span>
//       </Card>
//       <Card bgc="blue">
//         <span>blue</span>
//       </Card>
//       <Card>
//         <span>primary</span>
//       </Card>
//       <Card as="a" href="http://hongbin.xyz" bgc="black">
//         <span>Link</span>
//       </Card>
//     </Space>
//   </Space>
// </div>
