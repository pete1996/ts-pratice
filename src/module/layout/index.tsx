import { Layout } from "antd";
import Header from "./Header";
import SideMenu from "./SideMenu";
import Content from "./Content";
import React from "react";

export default function App() {
  return (
    <Layout style={{ height: "100%" }}>
      <SideMenu />
      <Layout>
        <Header />
        <Content />
      </Layout>
    </Layout>
  );
}
