import React from "react";
import "./Student_registration.css"
import {Link} from "react-router-dom";


const Student_registration = (props) => {
    return (
        <div>

            <img className="sr_sideImage" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMxIrhnZo5xm0a_lcNg3MAz1r9IrP_NvA2S3DW6Ti72tKkwDIQ"/>


            <div><h1 className="s_r_h2 shead2">STUDENT REGISTRATION FORM</h1></div>

            <div className="cStyle">
                <div className="card s_r_studentRegCard ">
                    <div className="card-body s_r_card-body">

                        <form>
                            <div className="row">
                                <div className="col STcolStyle" >
                                    <div className="form-group s_r_form-group">
                                        <label htmlFor="studentIdNumber">1. SLIIT Student Identification
                                            Number</label><br/>
                                        <small id="studentIdNumberHelp" className="form-text text-muted s_r_form-text">Please
                                            enter your student id number without any spaces, e.g IT17121966</small>
                                        <input type="email" className="form-control space s_r_space" id="studentInputId"
                                               aria-describedby="emailHelp" placeholder="Enter your answer"/>
                                    </div>
                                    <div className="form-group s_r_form-group">
                                        <label htmlFor="studentCurrentYear">2. Current Year of Registration at
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
                                        <label htmlFor="studentPlaningYear">3. Which calendar year have you completed or
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
                                        <label htmlFor="studentYearPeriod">4. Which period of the year are you planning to
                                            complete or completed your second year?</label>
                                        <select className="form-select space s_r_space"
                                                placeholder="Example input placeholder">
                                            <option>Jan - Jun</option>
                                            <option>Jul - Nov</option>

                                        </select>
                                    </div>
                                    <div className="form-group s_r_form-group">
                                        <label htmlFor="Specialization">5. Specialization</label>
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
                                        <label htmlFor="studentName">6. Student Name with Initials</label><br/>
                                        <small id="studentNameHelp" className="form-text text-muted s_r_form-text">e.g.
                                            Rathnayaka M.H.K.R.</small>
                                        <input type="text" className="form-control space s_r_space"
                                               id="studentInputName"
                                               aria-describedby="nameHelp" placeholder="Enter your answer"/>
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="form-group s_r_form-group">
                                        <label htmlFor="studentMobile">7. Student Mobile Phone Number</label><br/>
                                        <small id="studentMobileHelp" className="form-text text-muted s_r_form-text">e.g.
                                            94772269563</small>
                                        <input type="text" className="form-control space s_r_space"
                                               id="studentInputMobile"
                                               aria-describedby="mobileHelp" placeholder="The value must be a number"/>
                                    </div>

                                    <div className="form-group s_r_form-group">
                                        <label htmlFor="studentHome">8. Student Home Phone Number</label><br/>
                                        <small id="studentHomeHelp" className="form-text text-muted s_r_form-text">e.g.
                                            94112590558</small>
                                        <input type="text" className="form-control space s_r_space"
                                               id="studentInputHome"
                                               aria-describedby="HomeHelp" placeholder="The value must be a number"/>
                                    </div>

                                    <div className="form-group s_r_form-group">
                                        <label htmlFor="studentEmail">9. Student E-Mail (Enter One Primary E-mail Address
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
                                        <label htmlFor="date">10.What is the date you started or plan to start your
                                            internship?</label><br/>
                                        <small id="studentEmailHelp" className="form-text text-muted s_r_form-text">dd/MM/yyyy</small>
                                        <input type="date" className="form-control space s_r_space"
                                               id="studentInputEmail"
                                               aria-describedby="dateHelp"
                                               placeholder="Please input date (dd/MM/yyyy)"/>
                                    </div>

                                    <div className="form-group s_r_form-group">
                                        <label htmlFor="supervisorEmail">11. Specify Supervisor E-Mail address for the
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




                            </div>

                            <button className="skewBtn purple buttonPosition"><Link to="/registered_student_home">REGISTER</Link></button>


                        </form>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Student_registration;
