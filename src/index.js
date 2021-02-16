import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import { Home } from './components/home';
import { Chat } from './components/chat';
import { Groups } from './components/groups';
import { Explore } from './components/explore';
import { Calender } from './components/calender';
import { Settings } from './components/settings';

const sidenavbar = (
  <div>
    <Router>
      <div id="mySidenav" className="sidenav">
        <header id="sideNavBarHeader">
          Neville Pinto
        </header>
        <Link to="/home">Home</Link>
        <Link to="/chat">Chat</Link>
        <Link to="/groups">Groups</Link>
        <Link to="/explore">Explore</Link>
        <Link to="/calender">Calender</Link>
        <Link to="/settings">Settings</Link>
      </div>

      <div id="main">
        <Switch>
          <Route path="/home" component={Home}/>
          <Route path="/chat" component={Chat}/>
          <Route path="/groups" component={Groups}/>
          <Route path="/explore" component={Explore}/>
          <Route path="/calender" component={Calender}/>
          <Route path="/settings" component={Settings}/>
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