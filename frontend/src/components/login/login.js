import React, {useContext, useState} from "react";
import '../../LoginApp.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import UserContext from "../../contexts/userContext";
import BearcatCircleLogo from "../../static/bearcat_circle_logo.svg";

export default function Login() {
    const { login, hasLoginError } = useContext(UserContext);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const onSubmit = e => {
        e.preventDefault();
        login(username, password);
    };

    const onInputChange = setter => e => {
        setter(e.target.value);
    };

    return (
        <form style={{alignContent:"center"}} onSubmit={onSubmit}>
            <h3>Login</h3>
            {hasLoginError && (
                <div className="login-form-error">
                    Login Failed: Incorrect Credentials
                </div>
            )}

            <img src={BearcatCircleLogo} alt={"Logo"}/>

            <div className="form-group">
                <input
                    className="form-control"
                    type="text"
                    value={username}
                    onChange={onInputChange(setUsername)}
                    placeholder="Username"
                    required
                />
            </div>

            <div className="form-group">
                <input
                    className="form-control"
                    type="password"
                    value={password}
                    onChange={onInputChange(setPassword)}
                    placeholder="Password"
                    required
                />
            </div>

            <div className="form-group">
                <div className="custom-control custom-checkbox">
                    <input type="checkbox" className="custom-control-input" id="customCheck1" />
                    <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                </div>
            </div>

            <button type="submit" className="btn btn-primary btn-block">Submit</button>
            <p className="forgot-password text-right">
                <a href="/#">Forgot password?</a>
            </p>
        </form>
    );
}
