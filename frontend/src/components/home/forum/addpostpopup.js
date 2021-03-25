import React, {useState} from "react";
import '../../../css/home/addpostpopup.css'
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

export default function AddPostPopup({...props}) {
    const [Title, setTitle] = useState("");
    const [Content, setContent] = useState("");

    const onSubmit = e => {
        e.preventDefault();
        const axios = require('axios');
        const data = JSON.stringify({"title": Title,"content": Content});

        const config = {
            withCredentials: 'true',
            credentials: 'same-origin',
            method: 'post',
            url: 'http://localhost:5000/post/',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'multipart/form-data'
            },
            data: data
        };

        axios(config)
            .then(function (response) {
                // setUser(response.data);
                console.log(response.data);
            })
            .catch(function (error) {
                console.log(error);
            });
    };

    const onInputChange = setter => e => {
        setter(e.target.value);
    };

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
                        <Form.Control type="text" onChange={onInputChange(setTitle)} placeholder="Enter Title" />
                        <Form.Label style={{marginTop: "1vh"}} onChange={onInputChange(setContent)}><h5>Body</h5></Form.Label>
                        <Form.Control as="textarea" rows={3} />
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={onSubmit} style={{backgroundColor: "#30475E", color: "white"}}>Post</Button>
            </Modal.Footer>
        </Modal>
    );
}
