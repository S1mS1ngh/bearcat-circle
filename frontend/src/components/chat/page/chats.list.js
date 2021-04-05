import React from 'react';
import '../../../css/chat/chats.list.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Card, Col, Container, Row} from "react-bootstrap";

import Profile from "../../../static/home/bearcat_circle.svg";

export default class ChatsList extends React.Component {
    render() {
        return (
            <div>
                <Card className="chatsListCard" style={{backgroundColor: "#707C97"}}>
                    <Container fluid style={{height: "100%", padding: "0"}}>
                        <Row style={{padding: "0", height: "100%"}}>
                            <Col md={1} style={{display: "flex"}}>
                                <img src={Profile} alt="Profile" />
                            </Col>
                            <Col md={{ offset: 1 }} style={{paddingLeft: "30px"}}>
                                <h3 style={{color: "white"}}>Sim Singh</h3>
                                <h4 style={{color: "white", marginLeft: "-75px", marginTop: "35px"}}>Hi Bearcats!</h4>
                            </Col>
                        </Row>
                    </Container>
                </Card>
                <Card className="chatsListCard" style={{backgroundColor: "#FFFFFF"}}>
                    <Container fluid style={{height: "100%", padding: "0"}}>
                        <Row style={{padding: "0", height: "100%"}}>
                            <Col md={1} style={{display: "flex"}}>
                                <img src={Profile} alt="Profile" />
                            </Col>
                            <Col md={{ offset: 1 }} style={{paddingLeft: "30px"}}>
                                <h3>Neville Pinto</h3>
                                <h4 style={{marginLeft: "-75px", marginTop: "35px"}}>Hey, it's me President Pinto.</h4>
                            </Col>
                        </Row>
                    </Container>
                </Card>
                <Card className="chatsListCard" style={{backgroundColor: "#FFFFFF"}}>
                    <Container fluid style={{height: "100%", padding: "0"}}>
                        <Row style={{padding: "0", height: "100%"}}>
                            <Col md={1} style={{display: "flex"}}>
                                <img src={Profile} alt="Profile" />
                            </Col>
                            <Col md={{ offset: 1 }} style={{paddingLeft: "30px"}}>
                                <h3>FG Williams</h3>
                                <h4 style={{marginLeft: "-75px", marginTop: "35px"}}>What's up Enginerds</h4>
                            </Col>
                        </Row>
                    </Container>
                </Card>
            </div>
        );
    }
}