import React from 'react';
import '../../css/home/home.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import {Container, Row, Col, Card, Button} from 'react-bootstrap';
import HomeForum from "./home.forum";
import AddGroup from "../../static/plus_button.svg";
import AddPost from "../../static/home/add_post.svg";
import SearchBox from "../../static/home/search_box.svg";
import FilterTags from "../../static/home/filter_tags.svg";
import {Link} from "react-router-dom";
import AddPostPopup from "./addpostpopup";

//Todo Improve CSS styling if time permits

export default function Home() {
    const [modalShow, setModalShow] = React.useState(false);

    return (
        <div className="home">
            <h1>Welcome</h1>
            <AddPostPopup
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
            <Container fluid style={{padding: "0"}}>
                <Row style={{marginLeft: "60px", marginRight: "120px"}}>
                    <Col>
                        <Row style={{marginBottom: "30px"}}>
                            <img src={SearchBox} style={{boxShadow: "0 2px 10px lightgray"}} alt="Search"/>
                            <Button onClick={() => setModalShow(true)} style={{
                                padding: "0 0 0 0",
                                marginLeft: "30px",
                                backgroundColor: "transparent",
                                borderWidth: "0"
                            }}>
                                <img src={AddPost} alt="Add Post"/>
                            </Button>
                        </Row>
                        <Row style={{marginBottom: "30px"}}>
                            <img src={FilterTags} style={{boxShadow: "0 2px 10px lightgray"}} alt="Filter Tags"/>
                        </Row>
                        <Row>
                            <HomeForum/>
                        </Row>
                    </Col>
                    <Col>
                        <Row>
                            <Card className="groupsCard">
                                <Card.Header id="groupsCardHeader">
                                    Groups
                                    <Button style={{
                                        padding: "0 0 0 0",
                                        backgroundColor: "transparent",
                                        borderWidth: "0",
                                        marginLeft: "347px"
                                    }}>
                                        <img src={AddGroup} alt="Add Group"/>
                                    </Button>
                                </Card.Header>
                                <Container style={{padding: "0", margin: "0", textAlign: "center"}}>
                                    <Row style={{padding: "0", margin: "37px 15px 23px 15px", textAlign: "center"}}>
                                        <Col style={{padding: "0", margin: "0 0 0 10px"}}>
                                            <Link to="/groups/one">
                                                <Button id="groupsCardGroupsButton"
                                                        style={{backgroundColor: "#F38181"}}>
                                                    Calculus I
                                                </Button>
                                            </Link>
                                        </Col>
                                        <Col style={{padding: "0", margin: "0 10px 0 0"}}>
                                            <Button id="groupsCardGroupsButton" style={{backgroundColor: "#8381F3"}}>
                                                Chemistry I Study Group
                                            </Button>
                                        </Col>
                                    </Row>
                                    <Row style={{padding: "0", margin: "15px 15px 15px 15px", textAlign: "center"}}>
                                        <Col style={{padding: "0", margin: "0 0 0 10px"}}>
                                            <Button id="groupsCardGroupsButton" style={{backgroundColor: "#FCE38A"}}>
                                                UC Environmental Club
                                            </Button>
                                        </Col>
                                        <Col style={{padding: "0", margin: "0 10px 0 0"}}>
                                            <Button id="groupsCardGroupsButton"
                                                    style={{backgroundColor: "#95E1D3", padding: "10px"}}>
                                                ChemE Learning Community
                                            </Button>
                                        </Col>
                                    </Row>
                                </Container>
                            </Card>
                        </Row>
                        <Row>
                            <Card className="exploreCard">
                                <Card.Header id="groupsCardHeader">Explore</Card.Header>
                                <Container fluid style={{margin: "45px 0px 0px 25px"}}>
                                    <Row>
                                        <Col>
                                            <Button>
                                                Find A Study Group
                                            </Button>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col>
                                            <Button>
                                                Find A Study Buddy
                                            </Button>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col>
                                            <Button style={{backgroundColor: "#30475E", color: "white"}}>
                                                View more
                                            </Button>
                                        </Col>
                                    </Row>
                                </Container>
                            </Card>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}