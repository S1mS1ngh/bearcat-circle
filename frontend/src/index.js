import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import './index.css';
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import UserProvider from "./contexts/UserProvider"

ReactDOM.render(
    <UserProvider>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </UserProvider>,
  document.getElementById('root')
);

serviceWorker.unregister();