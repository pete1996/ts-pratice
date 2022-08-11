import { Layout } from "antd";
import React from "react";
import { Switch, HashRouter } from "react-router-dom";
import Routes from "../../router/index";

export default function Content() {
  const { Content } = Layout;
  return (
    <Content style={{ margin: 24, backgroundColor: "white" }}>
      <HashRouter>
        <Switch>{Routes}</Switch>
      </HashRouter>
    </Content>
  );
}
