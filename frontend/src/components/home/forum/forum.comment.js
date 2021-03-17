import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Card, Container, Row} from "react-bootstrap";

export default class ForumComment extends React.Component {
    render() {
        return (
            <Card className="ForumComment">
                <Container>
                    <Row>
                        <h5>{this.props.name}</h5>
                        <h6>{this.props.body}</h6>
                    </Row>
                </Container>
            </Card>
        )
    }
}