import React from 'react';
import '../../../index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../../css/chat/chat.css';
import {Button, Col, Container, Row} from "react-bootstrap";
import SearchBox from "../../../static/groups/search_box.svg";
import NewChat from "../../../static/chat/new-chat.svg";
import GroupChatScreen from "../../groups/one/GroupChatScreen";
import Card from "react-bootstrap/Card";
import ChatsList from "./chats.list";

export default class Chat extends React.Component {
    render() {
        return (
            <div className="chat">
                <h1>Chats</h1>
                <Container fluid style={{padding: "0"}}>
                    <Row style={{marginLeft: "60px"}}>
                        <Col md="auto" style={{marginRight: "80px"}}>
                            <Row style={{marginBottom: "30px"}}>
                                <img src={SearchBox} style={{boxShadow: "0 2px 10px lightgray"}} alt="Search" />
                                <Button style={{padding: "0 0 0 0", marginLeft: "30px", backgroundColor: "transparent", borderWidth:"0"}}>
                                    <img src={NewChat} alt="Add Chat" />
                                </Button>
                            </Row>
                            <Row>
                                <ChatsList />
                            </Row>
                        </Col>
                        <Col md="auto">
                            <Row>
                                <Card>
                                    <GroupChatScreen currentUsername={"Ben"} />
                                </Card>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}