import React from "react"
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"

import Home from "./pages/Home"
import Jess from "./pages/Jess"
import Robyn from "./pages/Robyn"
import Liam from "./pages/Liam"

// This site has 3 pages, all of which are rendered
// dynamically in the browser (not server rendered).
//
// Although the page does not ever refresh, notice how
// React Router keeps the URL up to date as you navigate
// through the site. This preserves the browser history,
// making sure things like the back button and bookmarks
// work properly.

export default function BasicExample() {
  return (
    <Router basename="/animal-crossing-learning/">
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/jess">Jess</Link>
          </li>
          <li>
            <Link to="/robyn">Robyn</Link>
          </li>
          <li>
            <Link to="/liam">Liam</Link>
          </li>
        </ul>

        <hr />

        {/*
          A <Switch> looks through all its children <Route>
          elements and renders the first one whose path
          matches the current URL. Use a <Switch> any time
          you have multiple routes, but you want only one
          of them to render at a time
        */}
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/jess">
            <Jess />
          </Route>
          <Route path="/robyn">
            <Robyn />
          </Route>
          <Route path="/liam">
            <Liam />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}
