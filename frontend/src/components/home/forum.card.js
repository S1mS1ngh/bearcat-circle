import React from "react";
import '../../css/home/forum.card.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Card, Col, Container, Row} from "react-bootstrap";
import BearcatCircle from "../../static/home/bearcat_circle.svg";

export default class ForumCard extends React.Component {
    render() {
        return (
            <Card className="forumCard">
                <Container fluid>
                    <Row>
                        <Col md={{ span: 1}} style={{padding: "0"}}>
                            <Row style={{marginLeft: "-5px"}}>
                                <img src={BearcatCircle} alt="Profile" />
                            </Row>
                            {/*<Row style={{marginLeft: "-5px", marginTop: "20px"}}>*/}
                            {/*    <img src={BearcatCircle} alt="Profile" />*/}
                            {/*</Row>*/}
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