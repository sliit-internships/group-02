import React from "react";
import "./RegisteredSupervisorHome.css"




const RegisteredSupervisorHome = (props) => {
    return (
        <div className="container">
            <div className=" row">
                <div className="col">
                    <img className="ReSupImage" src="https://preview.colorlib.com/theme/seos/assets/img/service/we-create.png.webp"/>
                </div>
                <div className="col">
                    <h1 className="RsuHome">Supervisor</h1>
                </div>
            </div>
            <div className="container bootstrap snippets bootdeys">
                <div className="row">
                    <div className="col-md-4 col-sm-6 content-card">
                        <div className="card-big-shadow">
                            <div className="card card-just-text" data-background="color" data-color="blue"
                                 data-radius="none">
                                <div className="content">

                                    <h4 className="title"><a href="/registered_student_details">Registered Student Details</a></h4>
                                    <p className="description">What all of these have in common is that they're pulling
                                        information out of the app or the service and making it relevant to the
                                        moment. </p>
                                </div>
                            </div>

                        </div>
                    </div>

                    <div className="col-md-4 col-sm-6 content-card">
                        <div className="card-big-shadow">
                            <div className="card card-just-text" data-background="color" data-color="green"
                                 data-radius="none">
                                <div className="content">

                                    <h4 className="title"><a href="/student_uploaded_dd">Daily Diary Details</a></h4>
                                    <p className="description">What all of these have in common is that they're pulling
                                        information out of the app or the service and making it relevant to the
                                        moment. </p>
                                </div>
                            </div>

                        </div>
                    </div>

                    <div className="col-md-4 col-sm-6 content-card">
                        <div className="card-big-shadow">
                            <div className="card card-just-text" data-background="color" data-color="yellow"
                                 data-radius="none">
                                <div className="content">

                                    <h4 className="title"><a href="/student_evaluation_form">Student Final Evaluation</a></h4>
                                    <p className="description">What all of these have in common is that they're pulling
                                        information out of the app or the service and making it relevant to the
                                        moment. </p>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>
            </div>

        </div>
    );
};

export default RegisteredSupervisorHome;
