import { ConfigProvider } from "antd";
import zhCN from "antd/es/locale/zh_CN";
import React from "react";
import { HashRouter as Router } from "react-router-dom";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import Zeus from "./zeus";
import store from "./store";
import ReactDOM from "react-dom";

function Bootstap() {
  return (
    <ConfigProvider locale={zhCN}>
      <Provider store={store}>
        <Router>
          <Zeus />
        </Router>
      </Provider>
    </ConfigProvider>
  );
}

// function bootstap() {
//   const root = createRoot(document.getElementById("root") || document.body);
//   root.render(<Bootstap />);
// }

ReactDOM.render(<Bootstap />, document.getElementById("root"));
