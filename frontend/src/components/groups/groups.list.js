import React from 'react';
import '../../css/groups/groups.list.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Card, Col, Container, Row} from "react-bootstrap";

import Group1 from "../../static/groups/group1.svg";
import Group2 from "../../static/groups/group2.svg";
import Group3 from "../../static/groups/group3.svg";
import Group4 from "../../static/groups/group4.svg";
import {Link} from "react-router-dom";

export default class GroupsList extends React.Component {
    render() {
        return (
            <div>
                <Link to={"groups/one"} style={{ textDecoration: 'none' }}>
                    <Card className="groupsListCard" style={{backgroundColor: "#F38181"}}>
                        <Container fluid style={{height: "100%", padding: "0"}}>
                            <Row style={{padding: "0", height: "100%"}}>
                                <Col md={2} style={{display: "flex", alignItems: "center"}}>
                                    <img src={Group1} alt="Group 1" />
                                </Col>
                                <Col md={{ offset: 1 }} style={{paddingLeft: "30px"}}>
                                    <h2>Calculus 1</h2>
                                    <h4>Community for Cohen's Calculus class</h4>
                                    <h4>Status: Make sure to check out the homework discussion</h4>
                                </Col>
                            </Row>
                        </Container>
                    </Card>
                </Link>
                <Link to={"groups/two"} style={{ textDecoration: 'none' }}>
                    <Card className="groupsListCard" style={{backgroundColor: "#8381F3"}}>
                        <Container fluid style={{height: "100%", padding: "0"}}>
                            <Row style={{padding: "0", height: "100%"}}>
                                <Col md={2} style={{display: "flex", alignItems: "center"}}>
                                    <img src={Group2} alt="Group 2" style={{paddingLeft: "20px"}}/>
                                </Col>
                                <Col md={{ offset: 1 }} style={{paddingLeft: "30px"}}>
                                    <h2>Chemistry I Study Group</h2>
                                    <h4>Small study group for Chemistry I</h4>
                                    <h4>Status: We're studying together at 6pm on Wednesday</h4>
                                </Col>
                            </Row>
                        </Container>
                    </Card>
                </Link>
                <Link to={"groups/three"} style={{ textDecoration: 'none' }}>
                    <Card className="groupsListCard" style={{backgroundColor: "#FCE38A"}}>
                        <Container fluid style={{height: "100%", padding: "0"}}>
                            <Row style={{padding: "0", height: "100%"}}>
                                <Col md={2} style={{display: "flex", alignItems: "center"}}>
                                    <img src={Group3} alt="Group 3" />
                                </Col>
                                <Col md={{ offset: 1 }} style={{paddingLeft: "30px"}}>
                                    <h2>UC Environmental Club</h2>
                                    <h4>Community for UC's Environmental Club</h4>
                                    <h4>Status: Check out our Announcements Channel for updates</h4>
                                </Col>
                            </Row>
                        </Container>
                    </Card>
                </Link>
                <Link to={"groups/four"} style={{ textDecoration: 'none' }}>
                    <Card className="groupsListCard" style={{backgroundColor: "#95E1D3"}}>
                        <Container fluid style={{height: "100%", padding: "0"}}>
                            <Row style={{padding: "0", height: "100%"}}>
                                <Col md={2} style={{display: "flex", alignItems: "center"}}>
                                    <img src={Group4} alt="Group 4" />
                                </Col>
                                <Col md={{ offset: 1 }} style={{paddingLeft: "30px"}}>
                                    <h2>Learning Community</h2>
                                    <h4>LC for CS Majors</h4>
                                    <h4>Status: Nothing planned for this week!</h4>
                                </Col>
                            </Row>
                        </Container>
                    </Card>
                </Link>
            </div>
        );
    }
}