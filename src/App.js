import React from "react";
import "./style.css";
import { BrowserRouter as Router, Switch, Route  } from "react-router-dom";

import People from "./components/People";
import Person from "./components/Person";
import Navigation from "./components/Navigation";
import Film from "./components/Film";
import Films from "./components/Films";

export default function App() {
  return (
    <div>
      <Router>
        <Navigation/>
        <Switch>
          <Route path="/people" exact>
            <People />
          </Route>
          <Route path="/films" exact>
            <Films/>
          </Route>
          <Route path="/people/:personId">
            <Person />
          </Route>
          <Route path="/films/:id/">
            <Film/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}
