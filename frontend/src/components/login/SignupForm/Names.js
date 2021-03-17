import React from "react";

import ItemForm from "./ItemForm";
import ProgressBar from "react-bootstrap/ProgressBar";

const Names = ({ setForm, formData, navigation }) => {
    const { firstName, lastName } = formData;

    const { next } = navigation;
    return (
        <div className="form">
            <ItemForm
                label="First name"
                name="firstName"
                value={firstName}
                onChange={setForm}
            />
            <ItemForm
                label="Last Name"
                name="lastName"
                value={lastName}
                onChange={setForm}
            />
            <h6>Progress</h6>
            <ProgressBar animated now={20} style={{marginTop: "10px", marginBottom: "20px", backgroundColor: "lightgray"}}/>
            <div>
                <button onClick={next}>Next</button>
            </div>
        </div>
    );
};

export default Names;
