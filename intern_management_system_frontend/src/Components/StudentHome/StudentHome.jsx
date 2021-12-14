import React from "react";
import "./StudentHome.css"




const StudentHome = (props) => {
    return (
        <div className="container">
            <div className=" row">
                <div className="col">
                    <img src="https://pretaform.com/wp-content/uploads/2019/09/indicators-show-business-need-process-automation.png"/>
                </div>
                <div className="col">
                    <h1>Student</h1>
                </div>
            </div>
            <div className="container bootstrap snippets bootdeys">
                <div className="row">
                    <div className="col-md-4 col-sm-6 content-card">
                        <div className="card-big-shadow">
                            <div className="card card-just-text" data-background="color" data-color="blue"
                                 data-radius="none">
                                <div className="content">

                                    <h4 className="title"><a href="/student_daily_diary">Upload Daily Diaries</a></h4>
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

                                    <h4 className="title"><a href="/change_supervisor">Change Supervisor</a></h4>
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

                                    <h4 className="title"><a href="/internship_termination">Internship Termination</a></h4>
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

export default StudentHome;
