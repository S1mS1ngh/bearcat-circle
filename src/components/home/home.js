import React from 'react';
import '../../css/home.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import { Container, Row, Col, Card } from 'react-bootstrap';
import HomeForum from "./home.forum";

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
                                <Card fluid id="groupsCard">
                                    <Card.Header id="groupsCardHeader">Groups</Card.Header>
                                </Card>
                            </Row>
                            <Row>
                                <Card id="groupsCard">
                                    <Card.Header id="groupsCardHeader">Explore</Card.Header>
                                </Card>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}