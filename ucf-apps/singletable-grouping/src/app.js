/**
 * 整个应用的入口，包含路由，数据管理加载
 */
import 'tinper-bee/assets/tinper-bee.css'
import React from "react";
import mirror, { render,Router } from "mirrorx";
import Routes from './routes'
import "styles/app.less";


const MiddlewareConfig = [];


mirror.defaults({
    historyMode: "hash",
    middlewares: MiddlewareConfig
});



render(<Router>
    <Routes a/>
</Router>, document.querySelector("#app"));
