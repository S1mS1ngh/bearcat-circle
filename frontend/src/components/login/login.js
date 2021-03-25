import React, {useContext, useState} from "react";
import '../../LoginApp.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import UserContext from "../../contexts/userContext";
import BearcatCircleLogo from "../../static/bearcat_circle_logo.svg";

export default function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const { login } = useContext(UserContext);

    const onSubmit = e => {
        e.preventDefault();
        const axios = require('axios');
        const FormData = require('form-data');
        const data = new FormData();
        data.append('username', username);
        data.append('password', password);
        const config = {
            method: 'post',
            url: 'http://localhost:5000/auth/login?username=Benb&password=password',
            headers: {
                'Content-Type': 'multipart/form-data'
            },
            data: data
        };

        axios(config)
            .then(function (response) {
                // setUser(response.data);
                console.log(response.data);
                login("ben");
            })
            .catch(function (error) {
                console.log(error);
            });
    };

    const onInputChange = setter => e => {
        setter(e.target.value);
    };

    return (
        <form style={{alignContent:"center"}} onSubmit={onSubmit}>
            <h3>Login</h3>

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
