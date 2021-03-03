import React from 'react';
import '../../css/home.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import {Container, Row, Col, Card, Button} from 'react-bootstrap';
import HomeForum from "./home.forum";
import AddGroup from "../../static/plus_button.svg";

//Todo Improve CSS styling if time permits

export default class Home extends React.Component {
    render() {
        return (
            <div className="home">
                <h1>Welcome</h1>
                <Container fluid>
                    <Row>
                        <Col>
                            <HomeForum/>
                        </Col>
                        <Col>
                            <Row>
                                <Card className="groupsCard">
                                    <Card.Header id="groupsCardHeader">
                                        Groups
                                        <Button style={{padding: "0 0 0 0", backgroundColor: "transparent", borderColor:"transparent", marginLeft:"345px"}}>
                                            <img src={AddGroup} alt="Add Group" />
                                        </Button>
                                    </Card.Header>
                                        <Container style={{padding: "0", margin: "0", textAlign: "center"}}>
                                            <Row style={{padding: "0", margin: "37px 15px 23px 15px", textAlign: "center"}}>
                                                <Col style={{padding: "0", margin: "0 0 0 10px"}}>
                                                    <Button id="groupsCardGroupsButton" style={{backgroundColor: "#F38181"}}>
                                                        Calculus 1
                                                    </Button>
                                                </Col>
                                                <Col style={{padding: "0", margin: "0 10px 0 0"}}>
                                                    <Button id="groupsCardGroupsButton" style={{backgroundColor: "#8381F3"}}>
                                                        Chemistry I
                                                    </Button>
                                                </Col>
                                            </Row>
                                            <Row style={{padding: "0", margin: "15px 15px 15px 15px", textAlign: "center"}}>
                                                <Col style={{padding: "0", margin: "0 0 0 10px"}}>
                                                    <Button id="groupsCardGroupsButton" style={{backgroundColor: "#FCE38A"}}>
                                                        ENED I
                                                    </Button>
                                                </Col>
                                                <Col style={{padding: "0", margin: "0 10px 0 0"}}>
                                                    <Button id="groupsCardGroupsButton" style={{backgroundColor: "#95E1D3"}}>
                                                        My Learning Community
                                                    </Button>
                                                </Col>
                                            </Row>
                                        </Container>
                                </Card>
                            </Row>
                            <Row>
                                <Card className="exploreCard">
                                    <Card.Header id="groupsCardHeader">Explore</Card.Header>
                                    <Container fluid style={{margin: "45px 0px 0px 25px"}}>
                                        <Row>
                                            <Col>
                                                <Button>
                                                    Find A Study Group
                                                </Button>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col>
                                                <Button>
                                                    Find A Study Buddy
                                                </Button>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col>
                                                <Button style={{backgroundColor: "#30475E", color: "white"}}>
                                                    View more
                                                </Button>
                                            </Col>
                                        </Row>
                                    </Container>
                                </Card>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}