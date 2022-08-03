import { Tabs } from "antd";
import Test1 from "./test1";
import Test2 from "./test2";
import React from "react";
function TestTab() {
  console.log("Test render");
  return (
    <div>
      <Tabs defaultActiveKey="1">
        <Tabs.TabPane tab="Tab 1" key="1">
          <Test1 />
        </Tabs.TabPane>
        <Tabs.TabPane tab="Tab 2" key="2">
          <Test2 />
        </Tabs.TabPane>
      </Tabs>
    </div>
  );
}
export default TestTab;
