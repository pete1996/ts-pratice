import React from "react";
import { Route } from "react-router-dom";
import Detail from "../components/personlCenter/Detail";
import Form from "../components/personlCenter/Form";
import TestEffect from "../components/TestEffect";
import TestLifeCycle from "../components/TestLifeCycle";
interface Iprops {
  path: string;
  exact?: boolean;
  component: () => any;
  title?: string;
}

const RouteComponent = (route: Iprops) => (
  <Route
    key={route.path}
    exact={route.exact || false}
    path={route.path}
    component={route.component}
  />
);

const routers = [
  {
    path: "/form",
    title: "新建",
    component: () => <Form />,
  },
  {
    path: "/detail",
    title: "详情",
    component: () => <Detail />,
  },
  {
    path: "/testEffect",
    title: "Effect测试",
    component: () => <TestEffect />,
  },
  {
    path: "/testLifeCycle",
    title: "生命周期测试",
    component: () => <TestLifeCycle />,
  },
];

const Routes = routers.map((routeItem) => RouteComponent(routeItem));

export default Routes;
