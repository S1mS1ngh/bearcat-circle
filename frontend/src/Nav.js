import React, {useContext} from 'react';
import './App.css'
import { Link } from "react-router-dom";
import userphoto from "./static/nav/user_photo.png";
import chevrondown from "./static/nav/chevron_down.png";
import Active from "./static/nav/active.svg";
import Homeunactive from "./static/nav/home_unactive.svg";
import Chat from "./static/nav/chat_unactive.svg";
import Groups from "./static/nav/groups_unactive.svg";
import Explore from "./static/nav/explore_unactive.svg";
import Calender from "./static/nav/calender_unactive.svg";
import Settings from "./static/nav/settings_unactive.svg";
import Logout from "./static/nav/logout.svg";

import UserContext from "./contexts/userContext";
import {Col, Row} from "react-bootstrap";

export default function Sidenav() {
    const { logout } = useContext(UserContext);

        return (
            <div className="sidenav">
                <div className="userphoto">
                    <img src={userphoto} alt="User"/>
                </div>
                <header id="sideNavBarHeader">
                    Ben Bearcat
                    <img src={chevrondown} alt="Options"/>
                </header>
                <Link to="/home">
                    <Row>
                        <Col>
                            <img style={{boxShadow: "0 0 10px black", opacity: "0"}} src={Active} alt=""/>
                        </Col>
                        <Col style={{display: "flex", justifyContent: "center", verticalAlign: "center", paddingLeft: "21px" }}>
                            <img src={Homeunactive} alt="Home"/>
                        </Col>
                        <Col style={{display: "flex", textAlign: "center", margin: "auto", width: "50%", padding: "0"}}>
                            Home
                        </Col>
                    </Row>
                </Link>
                <Link to="/chat">
                    <Row>
                        <Col>
                            <img style={{boxShadow: "0 0 10px black", opacity: "0"}} src={Active} alt=""/>
                        </Col>
                        <Col style={{display: "flex", justifyContent: "center", verticalAlign: "center", paddingLeft: "21px" }}>
                            <img src={Chat} alt="Chat"/>
                        </Col>
                        <Col style={{display: "flex", textAlign: "center", margin: "auto", width: "50%", padding: "0"}}>
                            Chat
                        </Col>
                    </Row>
                </Link>
                <Link to="/groups">
                    <Row>
                        <Col>
                            <img style={{boxShadow: "0 0 10px black", opacity: "0"}} src={Active} alt=""/>
                        </Col>
                        <Col style={{display: "flex", justifyContent: "center", verticalAlign: "center", paddingLeft: "21px" }}>
                            <img src={Groups} alt="Groups"/>
                        </Col>
                        <Col style={{display: "flex", textAlign: "center", margin: "auto", width: "50%", padding: "0"}}>
                            Groups
                        </Col>
                    </Row>
                </Link>
                <Link to="/explore">
                    <Row>
                        <Col>
                            <img style={{boxShadow: "0 0 10px black", opacity: "0"}} src={Active} alt=""/>
                        </Col>
                        <Col style={{display: "flex", justifyContent: "center", verticalAlign: "center", paddingLeft: "26px", paddingRight: "21.5px"}}>
                            <img src={Explore} alt="Explore"/>
                        </Col>
                        <Col style={{display: "flex", textAlign: "center", margin: "auto", width: "50%", padding: "0"}}>
                            Explore
                        </Col>
                    </Row>
                </Link>
                <Link to="/calender">
                    <Row>
                        <Col>
                            <img style={{boxShadow: "0 0 10px black", opacity: "0"}} src={Active} alt=""/>
                        </Col>
                        <Col style={{display: "flex", justifyContent: "center", verticalAlign: "center", paddingLeft: "21px" }}>
                            <img src={Calender} alt="Calender"/>
                        </Col>
                        <Col style={{display: "flex", textAlign: "center", margin: "auto", width: "50%", padding: "0"}}>
                            Calender
                        </Col>
                    </Row>
                </Link>
                <Link to="/settings">
                    <Row>
                        <Col>
                            <img style={{boxShadow: "0 0 10px black", opacity: "0"}} src={Active} alt=""/>
                        </Col>
                        <Col style={{display: "flex", justifyContent: "center", verticalAlign: "center", paddingLeft: "21px" }}>
                            <img src={Settings} alt="Settings"/>
                        </Col>
                        <Col style={{display: "flex", textAlign: "center", margin: "auto", width: "50%", padding: "0"}}>
                            Settings
                        </Col>
                    </Row>
                </Link>
                <div style={{paddingTop: "23vh"}}>
                    <Link to="/" onClick={logout}>
                        <Row>
                            <Col>
                                <img style={{opacity: "0"}} src={Active} alt=""/>
                            </Col>
                            <Col style={{display: "flex", justifyContent: "center", verticalAlign: "center", paddingLeft: "21px" }}>
                                <img src={Logout} alt="Logout"/>
                            </Col>
                            <Col style={{display: "flex", textAlign: "center", margin: "auto", width: "50%", padding: "0"}}>
                                Logout
                            </Col>
                        </Row>
                    </Link>
                </div>
            </div>
        )

}