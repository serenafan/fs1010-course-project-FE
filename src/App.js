import React from "react";
import "./App.css";
import Navigation from "./components/shared/Navigation";
import Footer from "./components/shared/Footer";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import Portfolio from "./components/pages/Portfolio";
import Contact from "./components/pages/Contact";
import Login from "./components/pages/Login";
import CV from "./components/pages/CV";
import Listing from "./components/pages/Listing";
import PrivateRoute from "./components/shared/PrivateRoute";

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/portfolio" component={Portfolio} />
        <Route exact path="/cv" component={CV} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/login" component={Login} />
        <PrivateRoute path="/submissions">
          <Listing />
        </PrivateRoute>
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
