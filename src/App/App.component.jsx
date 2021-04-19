import React from "react";
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

const App = () => {
  return (
    <div className="page-container">
      <Nav />
      <MyCursor />
      <Switch>
        <Route exact path={"/works/:workId"} component={Work} />
        <Route path="/works">
          <Works params={useParams()} />
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
