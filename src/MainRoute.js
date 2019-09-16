import React from "react";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import { connect } from "unistore/react";
import { actions } from "./store";
import App from "./pages/Welcome/WelcomePage";
import Home from "./pages/Home/Home";
import Location from "./pages/Order/OrderPage";
import Order from "./pages/Order/OrderHistory";
import OrderDetails from "./pages/Order/OrderDetails";
import NotFound from "./pages/NotFound/NotFound";
import Footer from "./component/Footer";
import Header from "./component/Header";
import RewardPage from "./pages/Reward/RewardPage";
import Profile from "./pages/Profile/ProfilePage";
import Register from "./validcoba";
import Help from "./pages/Help/HelpPage";
import TrashPage from "./pages/Trash/TrashCategorypage";
import Trash from "./pages/Trash/TrashPage";

class MainRoute extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={App} />
          <Route exact path="/home" component={Home} />
          <Route path="/order" component={Location} />
          <Route path="/orderhistory" component={Order} />
          <Route path="/orderdetails/:id" component={OrderDetails} />
          <Route path="/reward" component={RewardPage} />
          <Route path="/profile" component={Profile} />
          <Route path="/footer" component={Footer} />
          <Route path="/header" component={Header} />
          <Route path="/register" component={Register} />
          <Route path="/help" component={Help} />
          <Route path="/trashcategory" component={TrashPage} />
          <Route path="/trash" component={Trash} />
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
