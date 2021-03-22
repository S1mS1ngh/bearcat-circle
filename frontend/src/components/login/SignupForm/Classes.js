import React from "react";

import ItemForm from "./ItemForm";
import ProgressBar from "react-bootstrap/ProgressBar";
import {Col, Row} from "react-bootstrap";

const Address = ({setForm, formData, navigation}) => {
    const {class1, class2} = formData;

    const {previous, next} = navigation;

    return (
        <div className="form">
            <ItemForm
                label="Please list out all the classes you are attending this semester: "
                name="class1"
                value={class1}
                onChange={setForm}
            />
            <ItemForm
                name="class2"
                value={class2}
                onChange={setForm}
            />
            <button style={{marginBottom: "10px", backgroundColor: "white", color: "#30475E", borderWidth: "6px", borderColor: "#30475E"}}>Add more classes</button>
            <h6>Progress</h6>
            <ProgressBar animated now={80} style={{marginTop: "10px", marginBottom: "25px", backgroundColor: "lightgray"}}/>
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
