import React from "react";

import ItemForm from "./ItemForm";
import ProgressBar from "react-bootstrap/ProgressBar";
import {Col, Row} from "react-bootstrap";

const Address = ({setForm, formData, navigation}) => {
    const {major, graduation} = formData;

    const {previous, next} = navigation;

    return (
        <div className="form">
            <ItemForm
                label="Major"
                name="major"
                value={major}
                onChange={setForm}
            />
            <ItemForm
                label="Graduation"
                name="graduation"
                value={graduation}
                onChange={setForm}
            />
            <h6>Progress</h6>
            <ProgressBar animated now={60} style={{marginTop: "10px", marginBottom: "25px", backgroundColor: "lightgray"}}/>
            <Row>
                <Col>
                    <button onClick={previous}>Previous</button>
                </Col>
                <Col>
                    <button onClick={next}>Next</button>
                </Col>
            </Row>
        </div>
    );
};

export default Address;
