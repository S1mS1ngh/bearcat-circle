import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Card, Container, Row} from "react-bootstrap";
import Col from "react-bootstrap/Col";

export default class ForumComment extends React.Component {
    render() {
        return (
            <Card className="ForumComment mb-1">
                <Container>
                    <Row className="align-items-center mt-2 mb-2">
                        <Col xs={2}>
                            <h6 className="m-0">{this.props.id}</h6>
                        </Col>
                        <Col>
                            <h6 style={{fontWeight: "400"}} className="m-0">{this.props.body}</h6>
                        </Col>
                    </Row>
                </Container>
            </Card>
        )
    }
}