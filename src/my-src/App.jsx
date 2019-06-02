import React from "react";
import { HashRouter, Switch, Route } from "react-router-dom";
import LoginForm from "./components/login-form";
import MainPage from "./components/main-page";

export default () =>
<div className="container">
    <HashRouter>
        <Switch>
            <Route exact path="/" component={LoginForm} />
            <Route exact path="/main" component={MainPage} />
        </Switch>
    </HashRouter>
    </div>