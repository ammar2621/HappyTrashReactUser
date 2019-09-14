import React from "react";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import { connect } from "unistore/react";
import { actions } from "./store";
import App from "./pages/welcomepage/welcome";
import Home from "./pages/homepage/home";
import Location from "./pages/orderpage/order";
import Order from "./pages/orderhistory/orderhistory";
import OrderDetails from "./pages/orderdetails/orderdetails";
import NotFound from "./pages/notfound/NotFound";
import Footer from "./component/footer";
import Header from "./component/header";
import TablePage from "./component/table/tableorder";
import RewardPage from "./pages/rewardpage/reward";
import Profile from "./pages/profile/profile";
import Register from "./validcoba";
import Help from "./pages/helppage/helppage";
import ListSampah from "./pages/trashpage/trashpage";

class MainRoute extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={App} />
          <Route exact path="/home" component={Home} />
          <Route path="/order" component={Location} />
          <Route path="/orderhistory" component={Order} />
          <Route path="/orderdetails" component={OrderDetails} />
          <Route path="/reward" component={RewardPage} />
          <Route path="/profile" component={Profile} />
          <Route path="/footer" component={Footer} />
          <Route path="/header" component={Header} />
          <Route path="/register" component={Register} />
          <Route path="/help" component={Help} />
          <Route path="/listsampah" component={ListSampah} />
          <Route component={NotFound} />
        </Switch>
      </Router>
    );
  }
}

export default connect(
  "is_login",
  actions
)(MainRoute);
