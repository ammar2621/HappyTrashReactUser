import React from "react";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import { connect } from "unistore/react";
import { actions } from "./Store/Store";
import Welcome from "./Pages/Welcome/WelcomePage";
import Home from "./Pages/Home/Home";
import Order from "./Pages/Order/OrderPage";
import OrderHistory from "./Pages/Order/OrderHistory";
import OrderDetails from "./Pages/Order/OrderDetails";
import NotFound from "./Pages/NotFound/NotFound";
import RewardPage from "./Pages/Reward/RewardPage";
import Profile from "./Pages/Profile/ProfilePage";
import Help from "./Pages/Help/HelpPage";
import TrashCategory from "./Pages/Trash/TrashCategorypage";
import Basic from "./Pages/OnBoarding/OnBoarding";
import Intro from "./Pages/Intro/Intro";
import Tos from "./Pages/Intro/Tos";
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
