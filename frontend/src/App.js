import React, { useReducer } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import './App.css'
import { BrowserRouter as Router} from "react-router-dom";
import {Route, Switch} from "react-router"

import LoginApp from './LoginApp'
import UserContext from "./contexts/userContext";
import Home from './components/home/home';
import Nav from './Nav'
import Chat from './components/chat/page/chat';
import Groups from './components/groups/groups';
import Explore from './components/explore/explore';
import { Calender } from './components/calender';
import { Settings } from './components/settings';
import GroupOne from "./components/groups/one/group.one";

const USERNAME = "dev";
const PASSWORD = "password";

const INITIAL_STATE = {
    user: null,
    hasLoginError: false
};

const validateCredentials = (username, password) =>
    username === USERNAME && password === PASSWORD;

const reducer = (state, action) => {
    switch (action.type) {
        case "login": {
            const { username, password } = action.payload;

            if (!validateCredentials(username, password)) {
                return {
                    ...state,
                    hasLoginError: true,
                    user: null
                };
            }

            return {
                ...state,
                hasLoginError: false,
                user: {
                    id: 1,
                    username: USERNAME,
                    firstName: "Dev",
                    lastName: "To"
                }
            };
        }
        case "logout":
            return {
                ...state,
                user: null
            };
        default:
            throw new Error(`Invalid action type: ${action.type}`);
    }
};

export default function App() {
    const [state, dispatch] = useReducer(reducer, INITIAL_STATE);

    const currentValue = {
        user: state.user,
        hasLoginError: state.hasLoginError,
        login: (username, password) =>
            dispatch({
                type: "login",
                payload: { username, password }
            }),
        logout: () => dispatch({ type: "logout" })
    };
        return (
            <UserContext.Provider value={currentValue}>
                {state.user &&
                <div>
                    <Router>
                        <Nav/>
                        <div id="main">
                            <Switch>
                                <Route path="/home" component={Home}/>
                                <Route path="/chat" component={Chat}/>
                                <Route
                                    path="/groups"
                                    render={({match: {url}}) => (
                                        <>
                                            <Route path={`${url}/`} component={Groups} exact/>
                                            <Route path={`${url}/one`} component={GroupOne} exact/>
                                        </>
                                    )}
                                />
                                <Route path="/explore" component={Explore}/>
                                <Route path="/calender" component={Calender}/>
                                <Route path="/settings" component={Settings}/>
                                <Route component={Home}/>
                            </Switch>
                        </div>
                    </Router>
                </div>
                }
                {!state.user &&
                    <div>
                        <LoginApp />
                    </div>
                }
            </UserContext.Provider>
        )
}