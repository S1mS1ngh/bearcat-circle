import React from "react";
import '../../css/forum.card.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Card, Col, Container, Row} from "react-bootstrap";
import BearcatCircle from "../../static/bearcat_circle.svg";

export default class ForumCard extends React.Component {
    render() {
        return (
            <Card className="forumCard">
                <Container fluid>
                    <Row>
                        <Col md={{ span: 1}} style={{padding: "0"}}>
                            <img src={BearcatCircle} alt="Profile" />
                        </Col>
                        <Col style={{padding: "0", marginLeft: "40px", marginRight: "40px"}}>
                            <h3>{this.props.id}</h3>
                            <h1>{this.props.title}</h1>
                            <h5>{this.props.body}</h5>
                        </Col>
                    </Row>
                </Container>
            </Card>
        )
    }
}