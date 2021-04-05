import React from "react";
import {useForm, useStep} from "react-hooks-helper";

import '../../../LoginApp.css';
import Names from "./Names";
import LoginDetails from "./LoginDetails";
import Major from "./Major";
import Classes from "./Classes";
import Submit from "./Submit";

const steps = [
    {id: "names"},
    {id: "logindetails"},
    {id: "major"},
    {id: "classes"},
    {id: "submit"}
];

const defaultData = {
    firstName: "Ben",
    lastName: "Bearcat",
    email: "bearcat@mail.uc.edu",
    password: "password",
    major: "Chemical Engineering",
    graduation: "May 2024",
    class1: "Calculus I",
    class2: "Chemistry I"
};

const SignupForm = () => {
    const [formData, setForm] = useForm(defaultData);
    const {step, navigation} = useStep({initialStep: 0, steps});
    const {id} = step;

    const props = {formData, setForm, navigation};

    switch (id) {
        case "names":
            return <Names {...props} />;
        case "logindetails":
            return <LoginDetails {...props} />;
        case "major":
            return <Major {...props} />;
        case "classes":
            return <Classes {...props} />;
        case "submit":
            return <Submit {...props} />;
        default:
            return null;
    }
};

export default SignupForm;
