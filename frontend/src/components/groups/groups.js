import React from 'react';
import '../../css/groups/groups.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button, Col, Container, Row} from "react-bootstrap";

import SearchBox from "../../static/groups/search_box.svg";
import NewGroup from "../../static/groups/new_group_button.svg";
import RecentUpdates from "../../static/groups/recent_updates.svg";
import GroupsList from "./groups.list";
import GroupsUpdates from "./groups.updates";

//Todo Improve CSS styling if time permits

export default class Groups extends React.Component {
    render() {
        return (
            <div className="groups">
                <h1 style={{margin: "30px 0 25px 60px", textDecoration: "none", fontSize: "36px", fontWeight: "500", color: "#0D1C2E", display: "block", textAlign: "left"}}>Groups</h1>
                <Container fluid style={{padding: "0"}}>
                    <Row style={{marginLeft: "60px"}}>
                        <Col md="auto" style={{marginRight: "80px"}}>
                            <Row style={{marginBottom: "30px"}}>
                                <img src={SearchBox} style={{boxShadow: "0 2px 10px lightgray"}} alt="Search" />
                                <Button style={{padding: "0 0 0 0", marginLeft: "30px", backgroundColor: "transparent", borderWidth:"0"}}>
                                    <img src={NewGroup} alt="Add Post" />
                                </Button>
                            </Row>
                            <Row>
                                <GroupsList />
                            </Row>
                        </Col>
                        <Col md="auto">
                            <Row style={{marginBottom: "30px"}}>
                                <img src={RecentUpdates} style={{boxShadow: "0 2px 10px lightgray"}} alt="Search" />
                            </Row>
                            <Row>
                                <GroupsUpdates />
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}