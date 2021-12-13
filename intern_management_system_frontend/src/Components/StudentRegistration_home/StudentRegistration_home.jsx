import React from "react";
import "./StudentRegistration_home.css"
import Horizontal_nav from "../Horizontal_nav/Horizontal_nav";


const StudentRegistration_home = (props) => {
    return (
        <div>
            <Horizontal_nav/>
            <img src="https://preview.colorlib.com/theme/eclipse/img/home-banner-bg.png" class="img-fluid" alt="..."/>
            <h1 className="sr_h1">WELCOME TO SLIIT INTERNSHIP MANAGEMENT PORTAL AS A STUDENT</h1>
            <div className="sr_HeadTopic">

                <p className=" sr_Head_para_TopicStyle">"Getting an internship experience is a must for you to learn and grow. Give them a chance to achieve this goal.
                    Contact your interns by giving them training opportunities in which your full-time employees participate.
                    Allow your interns to attend courses,
                    seminars, on-the-job training and any other standard procedures required within your company and industry."</p>
            </div>

            <img src="https://preview.colorlib.com/theme/eclipse/img/header-img.png.webp" className="sr_headImage"/>


            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="main-timeline">
                            <div className="timeline">
                                <a href="" className="timeline-content">
                                    <div className="timeline-icon">
                                        <i className="fa fa-globe"></i>
                                    </div>
                                    <div className="timeline-year"> 1</div>
                                    <div className="inner-content">
                                        <h3 className="title">Internship Registration</h3>
                                        <p className="description">Lorem ipsum dolor sit amet, consectetur adipisicing
                                            elit. Ad adipisci culpa
                                            dolore explicabo fuga pariatur gjkfdgj quis reprehenderit tenetur vel!</p>
                                    </div>
                                </a>
                            </div>
                            <div className="timeline">
                                <a href="" className="timeline-content">
                                    <div className="timeline-icon">
                                        <i className="fa fa-rocket"></i>
                                    </div>
                                    <div className="timeline-year"> 2</div>
                                    <div className="inner-content">
                                        <h3 className="title">Daily Diary Submission</h3>
                                        <p className="description">Lorem ipsum dolor sit amet, consectetur adipisicing
                                            elit. Ad adipisci culpa
                                            dolore explicabo fuga pariatur gjkfdgj quis reprehenderit tenetur vel!</p>
                                    </div>
                                </a>
                            </div>
                            <div className="timeline">
                                <a href="" className="timeline-content">
                                    <div className="timeline-icon">
                                        <i className="fa fa-globe"></i>
                                    </div>
                                    <div className="timeline-year"> 3</div>
                                    <div className="inner-content">
                                        <h3 className="title">Final Evaluation</h3>
                                        <p className="description">Lorem ipsum dolor sit amet, consectetur adipisicing
                                            elit. Ad adipisci culpa
                                            dolore explicabo fuga pariatur gjkfdgj quis reprehenderit tenetur vel!</p>
                                    </div>
                                </a>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

            <img className="sr_homeImage3" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHDSsTyOkcQpk_diCdsNivRZ2vVct6qQzmC4wrD6VXcA3qSXvt"/>
            <div className="row sr_homeRow">
                <div className="col">
                    <h4 className="sr_homeH4">You have to register for internship. Visit it here. The form given to continue the internship should be completed. You
                        can continue after being admitted for internship training by the internship manager.</h4>

                </div>
                <div className="col">
                    <div className="sr_home_gradientBtnStyle">

                        <a className="S_Button" href="student_registration_form">REGISTER<span
                            className="Button-mask Button-rotates rotates-clockwise Graident-four"></span></a></div>

                </div>
            </div>

            <img className="sr_homeImage4" src="https://preview.colorlib.com/theme/seogo/img/ilstrator/xbig.png.pagespeed.ic.B13GWHuMln.webp"/>


        </div>
    );
};

export default StudentRegistration_home;
