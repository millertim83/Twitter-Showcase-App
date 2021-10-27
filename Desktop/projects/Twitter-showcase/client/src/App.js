import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Nav, Home, Search, Favorites } from "./Components";

function App () {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Twitter Showcase</h1> 
      </header>
      <Router>
        <Nav />
        <Switch>
          <Route path = "/" exact component = {() => <Home />} />
          <Route path = "/Search" exact component = {() => <Search />} />
          <Route path = "/Favorites" exact component = {() => <Favorites />} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
