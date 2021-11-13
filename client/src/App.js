import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Nav, Home, Search, Favorites, TweetCard } from "./Components";
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
        <Route path = "/TweetCard" exact component = {() => <TweetCard />} />
      </Switch>
      </div>
    </Router>
   
    
   
  );
}

export default App;
