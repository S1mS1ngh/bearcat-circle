import React from "react";

import ItemForm from "./ItemForm";
import ProgressBar from "react-bootstrap/ProgressBar";
import {Col, Row} from "react-bootstrap";

const Address = ({setForm, formData, navigation}) => {
    const {email, password} = formData;

    const {previous, next} = navigation;

    return (
        <div className="form">
            <ItemForm
                label="UC Email (This will be your username)"
                name="email"
                value={email}
                onChange={setForm}
            />
            <ItemForm
                label="Password"
                type="password"
                name="password"
                value={password}
                onChange={setForm}
            />
            <h6>Progress</h6>
            <ProgressBar animated now={40} style={{marginTop: "10px", marginBottom: "25px", backgroundColor: "lightgray"}}/>
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
