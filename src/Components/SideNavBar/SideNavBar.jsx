import React from "react";
import "./SideNavBar.css"
import {Link} from "react-router-dom";


const SideNavBar = (props) => {
    return (

        <div >

                <div className="navbar fixed-top sidenav">
                <nav className="nav flex-column">


                    <details>
                        <ul className="studentList">
                            <option ><Link to="/student_registration">Student Registration</Link></option>
                            <option>Item 2</option>


                        </ul>
                        <summary className="dropTopic">Student</summary>

                    </details>

                    <details>
                        <ul className="studentList">
                            <option>Internship Registration</option>

                            <option>Item 5</option>

                        </ul>
                        <summary className="dropTopic">Supervisor</summary>

                    </details>
                    <a className="nav-link fontColor" href="#">Link</a>






                </nav>
                </div>
        </div>
    );
};

export default SideNavBar;
