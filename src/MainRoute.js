import React from "react";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import { connect } from "unistore/react";
import { actions } from "./store";
import App from "./pages/Welcome/WelcomePage";
import Home from "./pages/Home/Home";
import Order from "./pages/Order/OrderPage";
import OrderHistory from "./pages/Order/OrderHistory";
import OrderDetails from "./pages/Order/OrderDetails";
import NotFound from "./pages/NotFound/NotFound";
import RewardPage from "./pages/Reward/RewardPage";
import Profile from "./pages/Profile/ProfilePage";
import Register from "./validcoba";
import Help from "./pages/Help/HelpPage";
import TrashPage from "./pages/Trash/TrashCategorypage";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import OnBoarding from "./pages/OnBoarding/OnBoarding";
import "./index.css";

class MainRoute extends React.Component {
  render() {
    return (
      <Router>
        {/* <Route
          render={({ location }) => (
            <TransitionGroup>
              <CSSTransition key={location.key} timeout={450} classNames="fade"> */}
        <Switch>
          <Route exact path="/" component={App} />
          <Route exact path="/home" component={Home} />
          <Route path="/order" component={Order} />
          <Route path="/orderhistory" component={OrderHistory} />
          <Route path="/orderdetails/:id" component={OrderDetails} />
          <Route path="/reward" component={RewardPage} />
          <Route path="/profile" component={Profile} />
          <Route path="/register" component={Register} />
          <Route path="/help" component={Help} />
          <Route path="/trashcategory" component={TrashPage} />
          <Route path="/onboarding" component={OnBoarding} />
          <Route component={NotFound} />
        </Switch>
        {/* </CSSTransition>
            </TransitionGroup>
          )}
        /> */}
      </Router>
    );
  }
}

export default connect(
  "is_login",
  actions
)(MainRoute);
