import React, {Component} from "react";
import '../../LoginApp.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import SignupForm from "./SignupForm/SignupForm";

export default class SignUp extends Component {
    render() {
        return (
            <div className="signup">
                <h3>Sign up</h3>
                <SignupForm />
            </div>
        );
    }
}