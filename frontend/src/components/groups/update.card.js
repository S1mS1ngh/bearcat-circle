import React from "react";
import '../../css/groups/update.card.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Card, Col, Container, Row} from "react-bootstrap";

export default class UpdateCard extends React.Component {
    render() {
        return (
            <Card className="updateCard">
                <Container fluid>
                    <Row>
                        <Col md={{ span: 1}} style={{padding: "0"}}>
                            <Row style={{marginLeft: "32px", marginTop: "82px"}}>
                                <div style={{height: "54px", width: "54px", backgroundColor: this.props.styleColor, borderRadius: "50%", display: "inline-block"}}/>
                            </Row>
                        </Col>
                        <Col style={{padding: "0", marginLeft: "40px", marginRight: "40px"}}>
                            <h3>{this.props.name}</h3>
                            <h1>{this.props.title}</h1>
                            <h5>{this.props.body}</h5>
                        </Col>
                    </Row>
                </Container>
            </Card>
        )
    }
}