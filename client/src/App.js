import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Nav, Home, Search, Favorites } from "./Components";
import "./App.css";

function App () {
  return (
    <Router>
      <div className="App">
      <Nav />
      <Switch>
        <Route path = "/" exact component = {() => <Home />} />
        <Route path = "/Search" exact component = {() => <Search />} />
        <Route path = "/Favorites" exact component = {() => <Favorites />} />
      </Switch>
      </div>
    </Router>
   
    
   
  );
}

export default App;
