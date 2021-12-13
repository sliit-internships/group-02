import React from "react";
import "./Horizontal_nav.css"




const Horizontal_nav = (props) => {
    return (
        <div>
            <ul className="nav justify-content-center fixed-top">
                <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="#">Active</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Link</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Link</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link ">Disabled</a>
                </li>
            </ul>


        </div>
    );
};

export default Horizontal_nav;
