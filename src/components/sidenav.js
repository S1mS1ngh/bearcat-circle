import React from 'react';
import '../index.css';
import '../css/sidenav.css'
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

import Home from './home/home';
import { Chat } from './chat';
import { Groups } from './groups';
import { Explore } from './explore';
import { Calender } from './calender';
import { Settings } from './settings';
import Login from "../components/login";
import userphoto from "../static/user_photo.png";
import chevrondown from "../static/chevron_down.png";

export default class Sidenav extends React.Component {
    render() {
        return (
            <Router>
                <div id="mySidenav" className="sidenav">
                    <div className="userphoto">
                        <img src={userphoto} alt="User"/>
                    </div>
                    <header id="sideNavBarHeader">
                        Neville Pinto
                        <img src={chevrondown} alt="Options"/>
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
                    <div style={{paddingTop: "190px"}}>
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
        )
    }
}