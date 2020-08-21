import React from "react";
import "@material-ui/core";
import Navbar from "./components/layout/Navbar";
import Dashboard from "./components/dashboard/Dashboard";
import RequestDetails from "./components/request/RequestDetails";
import SingIn from "./components/auth/SingIn";
import SingUp from "./components/auth/SingUp";
import CreateRequest from "./components/request/CreateRequest";
import { Provider } from "react-redux";
import generateStore from "./redux/store";

import { BrowserRouter, Switch, Route } from "react-router-dom";

const store = generateStore();

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div>
          <Navbar />
          <Switch>
            <Route exact path="/" component={SingIn} />
            <Route path="/requests/:id" component={RequestDetails} />
            <Route path="/SingIn" component={SingIn} />
            <Route path="/SingUp" component={SingUp} />
            <Route path="/CreateRequest" component={CreateRequest} />
            <Route path="/Dashboard" component={Dashboard} />
          </Switch>
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
