import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import '../styles/Header.css'

import About from './pages/About';
import Profile from './pages/Profile';
import Contact from './pages/Contact';
import Resume from './pages/Resume';
import Home from './pages/Home';
import Navbar from "./Navbar";
import Wildcard from "./pages/fourohfour";

function Header() {
  return (
    // JSX expressions must have one parent element error was here
    <Router>
    <Navbar />
    <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/profile">
          <Profile />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route path="/resume">
          <Resume />
        </Route>
        <Route path="*">
          <Wildcard />
        </Route>
      </Switch>
  </Router>
  )
}

export default Header;