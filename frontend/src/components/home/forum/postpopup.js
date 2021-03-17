import React from "react";
import '../../../css/home/addpostpopup.css'
import Modal from "react-bootstrap/Modal";
import CommentsList from "./comments.list";
import Form from "react-bootstrap/Form"
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import BearcatCircle from "../../../static/home/bearcat_circle.svg";

export default function PostPopup({...props}) {
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header style={{backgroundColor: "rgba(0,0,0,.03)"}} closeButton>
                <Modal.Title style={{color: "#0D1C2E"}} id="contained-modal-title-vcenter">
                    {props.title}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <h6 style={{fontWeight: "400", marginBottom: "20px"}}>{props.body}</h6>
                <hr className="mt-2 mb-3"/>
                <h6>Comments</h6>
                <CommentsList/>
                <Form style={{marginTop: "20px"}}>
                    <Form.Row className="align-items-center">
                        <Col xs="auto" className="mr-3 ml-1">
                            <img src={BearcatCircle} alt="Profile"/>
                        </Col>
                        <Col sm={9} className="mr-3">
                            <Form.Control
                                id="commentInput"
                                placeholder="Type a message"
                            />
                        </Col>
                        <Col xs="auto">
                            <Button style={{backgroundColor: "#30475E", color: "white"}} className="w-2 pl-4 pr-4">
                                Post
                            </Button>
                        </Col>
                    </Form.Row>
                </Form>
            </Modal.Body>
        </Modal>
    );
}
