import { QuestionCircleFilled, MessageOutlined } from "@ant-design/icons";
import { Layout, Space } from "antd";
import React from "react";
import "./Header.less";

export default function Header() {
  const { Header } = Layout;
  return (
    <Header className="header" style={{ backgroundColor: "white" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
          width: "100%",
        }}
      >
        <p>当前项目: platform</p>
        <Space>
          <div>
            <QuestionCircleFilled /> 帮助文档
          </div>
          <div>
            <MessageOutlined /> 个人中心
          </div>
        </Space>
      </div>
    </Header>
  );
}
