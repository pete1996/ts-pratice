import React from 'react';
import ReactDOM from 'react-dom';
import App2 from './pages/hooks';
import AppRouter from './pages/router'
import 'antd/dist/antd.css';
import './css/index.css';

const e = React.createElement;


const name = "kangkang"

const App1 = <div>{name}</div>
ReactDOM.render(<AppRouter/>, document.getElementById('app'));