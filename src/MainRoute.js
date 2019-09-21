import React from "react";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import { connect } from "unistore/react";
import { actions } from "./Store/Store";
import Welcome from "./pages/Welcome/WelcomePage";
import Home from "./pages/Home/Home";
import Order from "./pages/Order/OrderPage";
import OrderHistory from "./pages/Order/OrderHistory";
import OrderDetails from "./pages/Order/OrderDetails";
import NotFound from "./pages/NotFound/NotFound";
import RewardPage from "./pages/Reward/RewardPage";
import Profile from "./pages/Profile/ProfilePage";
import Register from "./validcoba";
import Help from "./pages/Help/HelpPage";
import TrashCategory from "./pages/Trash/TrashCategorypage";
import Basic from "./pages/OnBoarding/OnBoarding";
import Intro from "./pages/intro/intro";
import Tos from "./pages/intro/tos";
import "./index.css";

class MainRoute extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Intro} />
          <Route exact path="/welcome" component={Welcome} />
          <Route exact path="/home" component={Home} />
          <Route path="/order" component={Order} />
          <Route path="/orderhistory" component={OrderHistory} />
          <Route path="/orderdetails/:id" component={OrderDetails} />
          <Route path="/reward" component={RewardPage} />
          <Route path="/profile" component={Profile} />
          <Route path="/register" component={Register} />
          <Route path="/help" component={Help} />
          <Route path="/trashcategory" component={TrashCategory} />
          <Route path="/onboarding" component={Basic} />
          <Route path="/tos" component={Tos} />
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
