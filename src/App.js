import React from "react";
import "./App.css";
import Sidebar from "./components/sidebar";
import HomeWrapper from "./components/homeWraper";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
import SinglePost from "./components/singlePost";
import NotFound from "./components/notFound";

const App = () => {
  return (
    <Router>
      <div id="claudy-page">
        <div id="container-wrap">
          {/* <div id="claudy-main">
          <Introduction></Introduction>
          <About></About>
          <Skill></Skill>
          <Timeline></Timeline>
          <Projects></Projects>
          <Blog></Blog>
        </div> */}
          <Switch>
            <Route exact path="/claudy">
              <Sidebar></Sidebar>
              <HomeWrapper />
            </Route>

            <Route exact path="/claudy/blog/:id" component={SinglePost} />
            <Route path="/404" component={NotFound}/>
            <Redirect from="*" to="/claudy" />
          </Switch>
        </div>
      </div>
    </Router>
  );
};

export default App;
