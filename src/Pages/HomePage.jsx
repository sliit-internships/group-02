import React from "react";
import SideNavBar from "../Components/SideNavBar/SideNavBar";
import "./HomePage.css";
import StickyNavBar from "../Components/StickeyNavBar/StickyNavBar";
import Student_registration from "../Components/Student_registration/Student_registration";
import InternshipRegistration from "../Components/InternshipRegistration/InternshipRegistration";
import Signin_signup from "../Components/Signin_signup/Signin_signup";
import {} from "react-router-dom";


const HomePage = (props) => {
    return (
        <div>
            <div className="row">
                <div className="col-md-2">
                    <SideNavBar/>
                </div>
                <div className="col-md-10">
                    <div className="row ">
                        <div className="col-md-12">

                            <StickyNavBar/>

                        </div>

                        <div className="row ">
                            <div className="col-12">
                                <div className="container">

                                <InternshipRegistration/>
                                </div>

                            </div>
                        </div>

                    </div>


                    <div className="row">


                    </div>
                </div>

            </div>


        </div>

    );
};

export default HomePage;

