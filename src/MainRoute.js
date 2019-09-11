import React from "react";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import { connect } from "unistore/react";
import { actions } from "./store";
import App from "./App";
import Home from "./pages/homepage/home";
import Location from "./pages/locationpage/location";
import Time from "./component/time/time";
import Upload from "./component/time/foto";

class MainRoute extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/" component={Location} />
          <Route path="/order" component={Location} />
        </Switch>
      </Router>
    );
  }
}

export default connect(
  "is_login",
  actions
)(MainRoute);
