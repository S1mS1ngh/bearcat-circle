import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import { Home } from './home';
import { Chat } from './chat';

const sidenavbar = (
  <div>
    <Router>
      <div id="mySidenav" className="sidenav">
        <header id="sideNavBarHeader">
          Neville Pinto
        </header>
        <Link to="/home">Home</Link>
        <Link to="/chat">Chat</Link>
      </div>
      <div id="main">
        <Switch>
          <Route path="/home" component={Home}/>
          <Route path="/chat" component={Chat}/>
          <Route component={Home}/>
        </Switch>
      </div>
    </Router>
  </div>
);

ReactDOM.render(
  sidenavbar,
  document.getElementById('root')
);