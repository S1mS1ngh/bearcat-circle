import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../css/explore/explore.css'
import {Container} from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Sort from "../../static/explore/sort.svg"
import Search from "../../static/explore/search.svg"
import Type from "../../static/explore/group_type.svg"
import Card1 from "../../static/explore/Card1.svg"
import Card2 from "../../static/explore/Card2.svg"
import Card3 from "../../static/explore/Card3.svg"
import Card4 from "../../static/explore/Card4.svg"
import Card5 from "../../static/explore/Card5.svg"
import Card6 from "../../static/explore/Card6.svg"

export default function Explore() {

    return(
        <div className="explore">
            <h1>Explore</h1>
            <Container fluid style={{padding: "0"}}>
                <Row style={{marginLeft: "60px", width: "1540px", marginBottom: "30px"}}>
                    <Col className="p-0">
                        <img src={Sort} alt="Sort"/>
                    </Col>
                    <Col className="p-0">
                        <img src={Search} alt="Search"/>
                    </Col>
                    <Col className="p-0">
                        <img src={Type} alt="Type"/>
                    </Col>
                </Row>
                <Row style={{marginLeft: "60px", width: "1540px", marginBottom: "30px"}}>
                    <Col className="p-0">
                        <img src={Card1} alt="Card"/>
                    </Col>
                    <Col className="p-0">
                        <img src={Card2} alt="Card"/>
                    </Col>
                    <Col className="p-0">
                        <img src={Card3} alt="Card"/>
                    </Col>
                </Row>
                <Row style={{marginLeft: "60px", width: "1540px", marginBottom: "30px"}}>
                    <Col className="p-0">
                        <img src={Card4} alt="Card"/>
                    </Col>
                    <Col className="p-0">
                        <img src={Card5} alt="Card"/>
                    </Col>
                    <Col className="p-0">
                        <img src={Card6} alt="Card"/>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}