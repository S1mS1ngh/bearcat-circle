import React from "react";
import {Link} from "react-router-dom";

const Submit = () => {
    return (
        <div>
            <h3>Your account has been created!</h3>
            <h6>Here are some suggested groups for you: </h6>
            <button style={{marginBottom: "10px", backgroundColor: "#30475E"}}>ChemE Learning Community</button>
            <button style={{marginBottom: "10px", backgroundColor: "#30475E"}}>UC Environmental Club</button>
            <button style={{marginBottom: "30px", backgroundColor: "white", color: "#30475E", borderWidth: "6px", borderColor: "#30475E"}}>View more</button>
            <Link to="/login">
                <button>Back to login</button>
            </Link>
        </div>
    );
};

export default Submit;
