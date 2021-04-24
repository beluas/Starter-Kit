import React, { useEffect } from "react";
import "./App.styles.scss";
import { Switch, Route, useHistory, useParams } from "react-router-dom";
import Nav from "../components/Nav/Nav.component.jsx";
//import Homepage from "../pages/Homepage/Homepage.page.jsx";
import MyCursor from "../components/UI/myCursor/myCursor.component.js";

import Footer from "../components/Footer/Footer.component.jsx";
import Work from "../pages/Work/Work.page.jsx";
//import React from "react";
import Homepage from "../pages/Homepage/Homepage.page.jsx";
import Works from "../pages/Works/Works.pages.jsx";
import Services from "../pages/Services/Services.pages.jsx";
import ScrollToTopComponent from "../components/ScrollToTop/ScrollToTop.component.jsx";

const App = () => {
  useEffect(() => {
    window.onload = function () {
      window.scrollTo(0, 0);
    };
  }, []);

  window.scrollTo(0, 0);
  return (
    <div className="page-container">
      <Nav />
      <MyCursor />
      <ScrollToTopComponent />
      <Switch>
        <Route
          exact
          path={"/works/:workId"}
          params={useParams()}
          component={Work}
        />
        <Route path="/works">
          <Works params={useParams()} />
        </Route>
        <Route path="/services">
          <Services history={useHistory()} params={useParams()} />
        </Route>
        <Route path="/">
          <Homepage history={useHistory()} />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
};

export default App;
