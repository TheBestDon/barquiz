// @flow

import Base from "Base";
import HomePage from "HomePage";
import DashboardContainer from "DashboardContainer";
import LoginContainer from "LoginContainer";
import SignUpContainer from "SignUpContainer";
import Auth from "./modules/Auth";

const routes = {
  // base component (wrapper for the whole application).
  component: Base,
  childRoutes: [
    {
      path: "/",
      getComponent: (location, callback) => {
        if (Auth.isUserAuthenticated()) {
          callback(null, DashboardContainer);
        } else {
          callback(null, HomePage);
        }
      }
    },

    {
      path: "/login",
      component: LoginContainer
    },

    {
      path: "/signup",
      component: SignUpContainer
    },

    {
      path: "/logout",
      onEnter: (nextState, replace) => {
        Auth.deauthenticateUser();

        // change the current URL to /
        replace("/");
      }
    }
  ]
};

export default routes;
