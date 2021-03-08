import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import './App.css'
import { BrowserRouter as Router} from "react-router-dom";
import { Route, Switch } from "react-router"

import Home from './components/home/home';
import Nav from './Nav'
import { Chat } from './components/chat';
import { Groups } from './components/groups';
import { Explore } from './components/explore';
import { Calender } from './components/calender';
import { Settings } from './components/settings';

export default class App extends React.Component {
    render() {
        return (
            <div>
                <Router>
                    <Nav />
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
    }
}