// @flow

import Base from "Base";
import HomePage from "HomePage";
import DashboardPage from "DashboardPage";
import LoginPage from "LoginPage";
import SignUpPage from "SignUpPage";
import Auth from "./modules/Auth";

const routes = {
  // base component (wrapper for the whole application).
  component: Base,
  childRoutes: [
    {
      path: "/",
      getComponent: (location, callback) => {
        if (Auth.isUserAuthenticated()) {
          callback(null, DashboardPage);
        } else {
          callback(null, HomePage);
        }
      }
    },

    {
      path: "/login",
      component: LoginPage
    },

    {
      path: "/signup",
      component: SignUpPage
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
