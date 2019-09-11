import React from "react";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import { connect } from "unistore/react";
import { actions } from "./store";

class MainRoute extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/" component={App} />
        </Switch>
      </Router>
    );
  }
}

export default connect(
  "is_login",
  actions
)(MainRoute);
