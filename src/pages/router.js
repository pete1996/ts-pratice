import React, { useEffect } from "react";
import { Table } from "antd";
import {
  Switch,
  Route,
  HashRouter,
  useRouteMatch,
  useParams,
  Link,
  useLocation,
  useHistory,
} from "react-router-dom";
import TestTab from "../components/TabsTable";
import TableC from "../components/Table";

function Home() {
  console.log("Home render");
  const history = useHistory();
  return (
    <div>
      <button
        onClick={() => {
          history.push("/topic");
        }}
      >
        Home Page
      </button>
    </div>
  );
}

function About() {
  console.log("About render");
  return <h1>About page</h1>;
}

function Detail() {
  let { topicId } = useParams();
  return <p>Requested topic id: {topicId}</p>;
}
function Topic() {
  let match = useRouteMatch();
  let location = useLocation();
  return (
    <h1>
      Topic page
      <ul>
        <li>
          <Link to={`${match.url}/components`}>Components</Link>
        </li>
        <li>
          <Link to={`${match.url}/props-v-state`}>Props v. State</Link>
        </li>
      </ul>
      <Switch>
        <Route path={`${match.path}/:topicId`}>
          <Detail />
        </Route>

        <Route path={match.path}>
          <p>Please select a topic</p>
        </Route>
      </Switch>
    </h1>
  );
}

function AppRouter() {
  console.log("Home render");

  return (
    <div>
      <h2>this is header</h2>
      <HashRouter>
        <Switch>
          <Route path="/home" component={() => <Home />}></Route>
          <Route path="/go" component={() => <TestTab />}></Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/topic">
            <Topic />
          </Route>
          <Route path="/table">
            <TableC />
          </Route>
        </Switch>
      </HashRouter>
    </div>
  );
}

export default AppRouter;
