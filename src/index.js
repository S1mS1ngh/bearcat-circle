import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import { Home } from './components/home';
import { Chat } from './components/chat';
import { Groups } from './components/groups';
import { Explore } from './components/explore';
import { Calender } from './components/calender';
import { Settings } from './components/settings';
import Login from "./components/login";
import userphoto from "./static/user_photo.png";
import chevrondown from "./static/chevron_down.png";

const sidenavbar = (
  <div>
    <Router>
      <div id="mySidenav" className="sidenav">
        <div className="userphoto">
        <img src={userphoto} alt="User" />
        </div>
        <header id="sideNavBarHeader">
          Neville Pinto
          <img src={chevrondown} alt="Options" /> {/*Need to fix this*/}
        </header>
        <Link to="/home">
          Home
        </Link>
        <Link to="/chat">
          Chat
        </Link>
        <Link to="/groups">
          Groups
        </Link>
        <Link to="/explore">
          Explore
        </Link>
        <Link to="/calender">
          Calender
        </Link>
        <Link to="/settings">
          Settings
        </Link>
        <div style={{paddingTop:"190px"}}>
          <Link to="/login">Log out</Link>
        </div>
      </div>

      <div id="main">
        <Switch>
          <Route path="/home" component={Home}/>
          <Route path="/chat" component={Chat}/>
          <Route path="/groups" component={Groups}/>
          <Route path="/explore" component={Explore}/>
          <Route path="/calender" component={Calender}/>
          <Route path="/settings" component={Settings}/>
          <Route path="/login" component={Login}/>
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