import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './LoginApp.css'
import { BrowserRouter as Router, Link} from "react-router-dom";
import { Route, Switch } from "react-router"

import Login from "./components/login/login";
import Signup from "./components/login/signup";

export default class LoginApp extends React.Component {
    render() {
        return (
            <Router>
                <div className="App">
                    <nav className="navbar navbar-expand-lg navbar-light fixed-top">
                        <div className="container">
                            <Link className="navbar-brand" to={"/login"}>Bearcat Circle</Link>
                            <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                                <ul className="navbar-nav ml-auto">
                                    <li className="nav-item">
                                        <Link className="nav-link" to={"/login"}>Login</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to={"/signup"}>Sign up</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </div>

                <div className="auth-wrapper">
                    <div className="auth-inner">
                        <Switch>
                            <Route path="/login" component={Login}/>
                            <Route path="/signup" component={Signup}/>
                            <Route component={Login}/>
                        </Switch>
                    </div>
                </div>
            </Router>
        )
    }
}