import React from 'react';
import '../index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import UsernameForm from "./chat/UsernameForm";
import ChatScreen from "./chat/ChatScreen";

export default class Chat extends React.Component {
    constructor() {
        super();
        this.state = {
            currentUsername: '',
            currentScreen: 'WhatIsYourUsernameScreen'
        };
        this.onUsernameSubmitted = this.onUsernameSubmitted.bind(this);
    }

    onUsernameSubmitted(username) {
        this.setState({
            currentUsername: username,
            currentScreen: 'ChatScreen'
        });
    }

    render() {
        if (this.state.currentScreen === 'WhatIsYourUsernameScreen') {
            return <UsernameForm onSubmit={this.onUsernameSubmitted} />;
        }
        if (this.state.currentScreen === 'ChatScreen') {
            return <ChatScreen currentUsername={this.state.currentUsername} />;
        }
    }
}