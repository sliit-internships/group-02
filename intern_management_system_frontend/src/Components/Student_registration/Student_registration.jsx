import React from "react";
import "./Student_registration.css"


const Student_registration = (props) => {
    return (
        <div>
            <img src="https://preview.colorlib.com/theme/eclipse/img/home-banner-bg.png" class="img-fluid" alt="..."/>
            <div className="sr_HeadTopic"><h1 className="text-white sr_HeadTopicStyle">Take the first step </h1>
                <h1 className="text-white sr_HeadTopicStyle">to join the internship with us</h1><br/>
                <p className="text-white sr_Head_para_TopicStyle">Getting an internship experience is a must for you to learn and grow. Give them a chance to achieve this goal.
                    Contact your interns by giving them training opportunities in which your full-time employees participate.
                    Allow your interns to attend courses,
                    seminars, on-the-job training and any other standard procedures required within your company and industry.</p>
            </div>

            <img src="https://preview.colorlib.com/theme/eclipse/img/header-img.png.webp" className="sr_headImage"/>

            <h1 className="s_r_h2 shead2">Form I-1A : To be filled by the student</h1>

            <div className="cStyle">
                <div className="card s_r_studentRegCard ">
                    <div className="card-body s_r_card-body">

                        <form>
                            <div className="row">
                                <div className="col">
                                    <div className="form-group s_r_form-group">
                                        <label htmlFor="studentIdNumber">SLIIT Student Identification
                                            Number</label><br/>
                                        <small id="studentIdNumberHelp" className="form-text text-muted s_r_form-text">Please
                                            enter your student id number without any spaces, e.g IT17121966</small>
                                        <input type="email" className="form-control space s_r_space" id="studentInputId"
                                               aria-describedby="emailHelp" placeholder="Enter your answer"/>
                                    </div>
                                    <div className="form-group s_r_form-group">
                                        <label htmlFor="studentCurrentYear">Current Year of Registration at
                                            SLIIT</label>
                                        <select className="form-select space s_r_space">

                                            <option>Year 1</option>
                                            <option>Year 2</option>
                                            <option>Year 3</option>
                                            <option>Year 4</option>
                                            <option>Year 4 completed - Prorata registered</option>
                                        </select>
                                    </div>
                                    <div className="form-group s_r_form-group">
                                        <label htmlFor="studentPlaningYear">Which calendar year have you completed or
                                            planning to complete your second year?</label>
                                        <select className="form-select space s_r_space"
                                                placeholder="Example input placeholder">
                                            <option>2018 or before</option>
                                            <option>2019</option>
                                            <option>2020</option>
                                            <option>2021</option>
                                            <option>2022</option>
                                            <option>2023 and after</option>
                                        </select>
                                    </div>
                                    <div className="form-group s_r_form-group">
                                        <label htmlFor="studentYearPeriod">Which period of the year are you planning to
                                            complete or completed your second year?</label>
                                        <select className="form-select space s_r_space"
                                                placeholder="Example input placeholder">
                                            <option>Jan - Jun</option>
                                            <option>Jul - Nov</option>

                                        </select>
                                    </div>
                                    <div className="form-group s_r_form-group">
                                        <label htmlFor="Specialization">Specialization</label>
                                        <select className="form-select space s_r_space"
                                                placeholder="Example input placeholder">
                                            <option>IT</option>
                                            <option>DS</option>
                                            <option>SE</option>
                                            <option>IM</option>
                                            <option>CS</option>
                                            <option>CSNE</option>
                                            <option>ISE</option>
                                            <option>Not yet finalized (2nd year student)</option>
                                        </select>
                                    </div>
                                    <div className="form-group s_r_form-group">
                                        <label htmlFor="studentName">Student Name with Initials</label><br/>
                                        <small id="studentNameHelp" className="form-text text-muted s_r_form-text">e.g.
                                            Rathnayaka M.H.K.R.</small>
                                        <input type="text" className="form-control space s_r_space"
                                               id="studentInputName"
                                               aria-describedby="nameHelp" placeholder="Enter your answer"/>
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="form-group s_r_form-group">
                                        <label htmlFor="studentMobile">Student Mobile Phone Number</label><br/>
                                        <small id="studentMobileHelp" className="form-text text-muted s_r_form-text">e.g.
                                            94772269563</small>
                                        <input type="text" className="form-control space s_r_space"
                                               id="studentInputMobile"
                                               aria-describedby="mobileHelp" placeholder="The value must be a number"/>
                                    </div>

                                    <div className="form-group s_r_form-group">
                                        <label htmlFor="studentHome">Student Home Phone Number</label><br/>
                                        <small id="studentHomeHelp" className="form-text text-muted s_r_form-text">e.g.
                                            94112590558</small>
                                        <input type="text" className="form-control space s_r_space"
                                               id="studentInputHome"
                                               aria-describedby="HomeHelp" placeholder="The value must be a number"/>
                                    </div>

                                    <div className="form-group s_r_form-group">
                                        <label htmlFor="studentEmail">Student E-Mail (Enter One Primary E-mail Address
                                            that
                                            you use)</label><br/>
                                        <small id="studentEmailHelp" className="form-text text-muted s_r_form-text">Students
                                            are strongly recommended use SLIIT e-mail address e.g it17051456@my.sliit.lk
                                            and
                                            it will be the primary e-mail address
                                            SLIIT industry placement unit will correspond with the student</small>
                                        <input type="email" className="form-control space s_r_space"
                                               id="studentInputEmail"
                                               aria-describedby="emailHelp" placeholder="Enter your answer"/>
                                    </div>

                                    <div className="form-group s_r_form-group">
                                        <label htmlFor="date">What is the date you started or plan to start your
                                            internship?</label>
                                        <input type="date" className="form-control space s_r_space"
                                               id="studentInputEmail"
                                               aria-describedby="dateHelp"
                                               placeholder="Please input date (dd/MM/yyyy)"/>
                                    </div>

                                    <div className="form-group s_r_form-group">
                                        <label htmlFor="supervisorEmail">Specify Supervisor E-Mail address for the
                                            supervisor to fill his/her information</label><br/>
                                        <small id="supervisorEmailHelp" className="form-text text-muted s_r_form-text">Enter
                                            supervisor's organizational e-mail address where it will be the e-mail
                                            address
                                            SLIIT industry placement unit will correspond with the supervisor
                                        </small>
                                        <input type="email" className="form-control space s_r_space"
                                               id="studentInputEmail"
                                               aria-describedby="emailHelp" placeholder="Enter your answer"/>
                                    </div>
                                </div>

                                <button type="submit" className="btn btn-primary">Submit</button>
                            </div>


                        </form>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Student_registration;
