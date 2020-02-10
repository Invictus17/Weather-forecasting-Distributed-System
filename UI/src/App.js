import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Home from "./Home";
import Input from "./Input";
import Header from "./Header";
import Sessions from "./Sessions"
import "./App.css";



class App extends Component {
  render() {
    return (
      <>
        <Router>
          <Header />
        <Route exact path="/" component={Home} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/Input" component={Input}/>
          <Route exact path="/Sessions" component={Sessions}/>
        </Router>
      </>
    );
  }
}

export default App;
