import React, { Component } from 'react';
import {IndexLink, Link} from "react-router";
import './App.css';
import Home from "./Home";

class App extends Component {
   render() {
    return (
      <div>
        <ul className="header">
          <li><IndexLink activeClassName="active" to="/">Home</IndexLink></li>
          <li><Link activeClassName="active" to="/persons">All Persons</Link></li>
        </ul>
        <div className="content">
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default App;
