import React from 'react';
import '../../css/home.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import {Container, Row, Col, Card, Button} from 'react-bootstrap';
import HomeForum from "./home.forum";
import AddGroup from "../../static/plus_button.svg";

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
                                <Card id="groupsCard">
                                    <Card.Header id="groupsCardHeader">
                                        Groups
                                        <Button style={{padding: "0 0 0 0", backgroundColor: "transparent", borderColor:"transparent", marginLeft:"345px"}}>
                                            <img src={AddGroup} alt="Add Group" />
                                        </Button>
                                    </Card.Header>
                                        <Container fluid>
                                            <Row>
                                                <Col>
                                                    1
                                                </Col>
                                                <Col>
                                                    2
                                                </Col>
                                            </Row>
                                            <Row>
                                                <Col>
                                                    3
                                                </Col>
                                                <Col>
                                                    4
                                                </Col>
                                            </Row>
                                        </Container>
                                </Card>
                            </Row>
                            <Row>
                                <Card id="groupsCard">
                                    <Card.Header id="groupsCardHeader">Explore</Card.Header>
                                    <Container fluid>
                                        <Row>
                                            <Col>
                                                1
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col>
                                                2
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col>
                                                3
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