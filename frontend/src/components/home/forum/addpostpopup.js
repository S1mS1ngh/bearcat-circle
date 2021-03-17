import React from "react";
import '../../../css/home/addpostpopup.css'
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

export default function AddPostPopup({...props}) {
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header style={{backgroundColor: "rgba(0,0,0,.03)"}} closeButton>
                <Modal.Title style={{color: "#0D1C2E"}} id="contained-modal-title-vcenter">
                    New Post
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>

                <Form>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label><h5>Title</h5></Form.Label>
                        <Form.Control type="text" placeholder="Enter Title" />
                        <Form.Label style={{marginTop: "1vh"}}><h5>Body</h5></Form.Label>
                        <Form.Control as="textarea" rows={3} />
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide} style={{backgroundColor: "#30475E", color: "white"}}>Post</Button>
            </Modal.Footer>
        </Modal>
    );
}
