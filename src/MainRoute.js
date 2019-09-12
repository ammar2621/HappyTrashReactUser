import React from "react";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import { connect } from "unistore/react";
import { actions } from "./store";
import App from "./App";
import Home from "./pages/homepage/home";
import Location from "./pages/servicepage/location";
import OngoingOrder from "./pages/orderpage/order";
import OrderDetails from "./pages/orderdetails/orderdetails";
import Time from "./component/time/time";
import Upload from "./component/time/foto";
import NotFound from "./pages/notfound/NotFound";
import Footer from "./component/footer";
import TablePage from "./component/table/tableorder";

class MainRoute extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={App} />
          <Route exact path="/home" component={Home} />
          <Route path="/service" component={Location} />
          <Route path="/order" component={OngoingOrder} />
          <Route path="/orderdetails" component={OrderDetails} />
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
