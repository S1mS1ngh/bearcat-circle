import React from "react";
import '../../../css/home/forum.card.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Card, Col, Container, Row} from "react-bootstrap";
import BearcatCircle from "../../../static/home/bearcat_circle.svg";
import CardMore from "../../../static/home/card_more.svg";
import CardLike from "../../../static/home/card_like.svg";
import CardComments from "../../../static/home/card_comments.svg";
import PostPopup from "./postpopup";

export default function ForumCard(props) {
    const [modalShow, setModalShow] = React.useState(false);

    return (
        <Card className="forumCard">
            <PostPopup
                show={modalShow}
                onHide={() => setModalShow(false)}
                id={props.id} title={props.title} body={props.body}
            />
            <Container fluid>
                <img style={{position: "absolute", top: "15px", right: "20px"}} src={CardMore} alt="more"/>
                <Row>
                    <Col md={{span: 1}} style={{padding: "0", alignItems: "center"}}>
                        <Row style={{marginLeft: "-5px"}}>
                            <img style={{marginLeft: "40px", marginTop: "30px"}} src={BearcatCircle} alt="Profile"/>
                        </Row>
                        <Row style={{marginLeft: "-5px"}}>
                            <img style={{marginLeft: "70px", marginTop: "21px"}} src={CardLike} alt="Like"/>
                        </Row>
                        <Row style={{marginLeft: "-5px"}}>
                            <img onClick={() => setModalShow(true)} style={{marginLeft: "70px", marginTop: "21px"}}
                                 src={CardComments} alt="Comments"/>
                        </Row>
                    </Col>
                    <Col style={{padding: "0", marginLeft: "40px", marginRight: "40px"}}>
                        <Row style={{marginLeft: "0px"}}>
                            <h3>{props.id}</h3>
                        </Row>
                        <h1>{props.title}</h1>
                        <h5>{props.body}</h5>
                    </Col>
                </Row>
            </Container>
        </Card>
    )
}