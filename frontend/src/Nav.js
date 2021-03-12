import React from 'react';
import './index.css';
import './App.css'
import { Link } from "react-router-dom";
import userphoto from "./static/nav/user_photo.png";
import chevrondown from "./static/nav/chevron_down.png";

export default class Sidenav extends React.Component {
    render() {
        return (
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
        )
    }
}