import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import LandingPage from "../views/LandingPage/LandingPage";
import ProfilePage from "../views/ProfilePage/ProfilePage";
import LoginPage from "../views/LoginPage/LoginPage";
import Components from "../views/Components/Components";
import BlogBoardPage from "../views/Blog/BlogBoardPage";
import BlogAddPage from "../views/Blog/BlogAddPage";
import { createBrowserHistory } from "history";
import BlogViewPage from "../views/Blog/BlogViewPage";

var hist = createBrowserHistory();

const AppRouter = () => (
  <Router history={hist}>
    <Switch>
      <Route path="/landing-page" component={LandingPage} />
      <Route path="/profile-page" component={ProfilePage} />
      <Route path="/login-page" component={LoginPage} />
      <Route path="/components" component={Components} />
      <Route path="/create-post" component={BlogAddPage} />
      <Route path="/blog/:id" component={BlogViewPage} />
      <Route path="/" component={BlogBoardPage} />
    </Switch>
  </Router>
);
export default AppRouter;
