import React from 'react';
import '../../css/home.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import { Container, Row, Col } from 'react-bootstrap';

export default class Home extends React.Component {
    render() {
        return (
            <div className="home">
                <h1>Welcome</h1>
                <Container>
                    <Row>
                        <Col>
                            1
                        </Col>
                        <Col>
                            <Row>
                                2
                            </Row>
                            <Row>
                                3
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}