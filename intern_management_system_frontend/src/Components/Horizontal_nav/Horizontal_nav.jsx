import React from "react";
import "./Horizontal_nav.css"




const Horizontal_nav = (props) => {
    return (
        <div>
            <ul className="nav justify-content-end fixed-top">
                <li className="nav-item">
                    <a className="nav-link active navLinkFont" aria-current="page" href="/student_home">HOME</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link navLinkFont" href="/login">LOGOUT</a>
                </li>

            </ul>

        </div>
    );
};

export default Horizontal_nav;
