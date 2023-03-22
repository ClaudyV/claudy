import React from "react";
import "./App.css";
import Sidebar from "./components/sidebar";
import HomeWrapper from "./components/homeWraper";
import { Route, Switch, Redirect } from "react-router-dom";
import SinglePost from "./components/singlePost";
import NotFound from "./components/notFound";

const App = () => {
  return (
    <div id="claudy-page">
      <div id="container-wrap">
        <Switch>
          <Route exact path="/">
            <Sidebar></Sidebar>
            <HomeWrapper />
          </Route>
          <Route exact path="/blog/:id" component={SinglePost} />
          <Route path="/404" component={NotFound} />
          <Redirect from="*" to="/" />
        </Switch>
      </div>
    </div>
  );
};

export default App;
