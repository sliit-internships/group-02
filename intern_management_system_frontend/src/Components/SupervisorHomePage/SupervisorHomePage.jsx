import React from "react";
import "./SupervisorHomePage.css"


const SupervisorHomePage = (props) => {
    return (
        <div>
            <div className="s_home_vector">
                <img style={{height:"764px"}} src="https://www.truewhitespace.com/images/homepage-3/banner-shape-.png"/>

            </div>
            <img className="s_home_vector2"
                 src="https://tenoften-app-asset.s3-ap-southeast-1.amazonaws.com/web-assets/frontend/about-teacher-vector.png"/>
            <div className=" s_home_topics_style">
                <h1 className="s_h1_style"> WELCOME TO SLIIT INTERNSHIP MAMAGEMENT PORTAL AS A SUPERVISOR</h1><br/>
                <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore
                    magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
                    ea commodo consequat. </p>
            </div>
            <div className="s_gradientBtnStyle">

                <a className="S_Button" href="/internship_registration_form">REGISTER<span
                    className="Button-mask Button-rotates rotates-clockwise Graident-four"></span></a></div>


        </div>


    );
};

export default SupervisorHomePage;
