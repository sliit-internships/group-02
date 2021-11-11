import React from "react";
import "./Student_registration.css"


const Student_registration = (props) => {
    return (

        <div className="cStyle" >
            <div className="card s_r_studentRegCard ">
                <div className="card-body s_r_card-body">
                    <h2 className="s_r_h2 shead2">Form I-1A : To be filled by the student</h2>
                    <form>
                        <div className="form-group s_r_form-group">
                            <label htmlFor="studentIdNumber">SLIIT Student Identification Number</label>
                            <small id="studentIdNumberHelp" className="form-text text-muted s_r_form-text">Please enter your student id number without any spaces, e.g IT17121966</small>
                            <input type="email" className="form-control space s_r_space" id="studentInputId" aria-describedby="emailHelp" placeholder="Enter your answer"/>
                        </div>
                        <div className="form-group s_r_form-group">
                            <label htmlFor="studentCurrentYear">Current Year of Registration at SLIIT</label>
                            <select className="form-control space s_r_space" placeholder="Example input placeholder">
                                <option>Year 1</option>
                                <option>Year 2</option>
                                <option>Year 3</option>
                                <option>Year 4</option>
                                <option>Year 4 completed - Prorata registered</option>
                            </select>
                        </div>
                        <div className="form-group s_r_form-group">
                            <label htmlFor="studentPlaningYear">Which calendar year have you completed or planning to complete your second year?</label>
                            <select className="form-control space s_r_space" placeholder="Example input placeholder">
                                <option>2018 or before</option>
                                <option>2019</option>
                                <option>2020</option>
                                <option>2021</option>
                                <option>2022</option>
                                <option>2023 and after</option>
                            </select>
                        </div>
                        <div className="form-group s_r_form-group">
                            <label htmlFor="studentYearPeriod">Which period of the year are you planning to complete or completed your second year?</label>
                            <select className="form-control space s_r_space" placeholder="Example input placeholder">
                                <option>Jan - Jun</option>
                                <option>Jul - Nov</option>

                            </select>
                        </div>
                        <div className="form-group s_r_form-group">
                            <label htmlFor="Specialization">Specialization</label>
                            <select className="form-control space s_r_space" placeholder="Example input placeholder">
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
                            <label htmlFor="studentName">Student Name with Initials</label>
                            <small id="studentNameHelp" className="form-text text-muted s_r_form-text">e.g. Rathnayaka M.H.K.R.</small>
                            <input type="text" className="form-control space s_r_space" id="studentInputName" aria-describedby="nameHelp" placeholder="Enter your answer"/>
                        </div>
                        <div className="form-group s_r_form-group">
                            <label htmlFor="studentMobile">Student Mobile Phone Number</label>
                            <small id="studentMobileHelp" className="form-text text-muted s_r_form-text">e.g. 94772269563</small>
                            <input type="text" className="form-control space s_r_space" id="studentInputMobile" aria-describedby="mobileHelp" placeholder="The value must be a number"/>
                        </div>
                        <div className="form-group s_r_form-group">
                            <label htmlFor="studentHome">Student Home Phone Number</label>
                            <small id="studentHomeHelp" className="form-text text-muted s_r_form-text">e.g. 94112590558</small>
                            <input type="text" className="form-control space s_r_space" id="studentInputHome" aria-describedby="HomeHelp" placeholder="The value must be a number"/>
                        </div>
                        <div className="form-group s_r_form-group">
                            <label htmlFor="studentEmail">Student E-Mail (Enter One Primary E-mail Address that you use)</label>
                            <small id="studentEmailHelp" className="form-text text-muted s_r_form-text">Students are strongly recommended use SLIIT e-mail address e.g it17051456@my.sliit.lk and it will be the primary e-mail address
                                SLIIT industry placement unit will correspond with the student</small>
                            <input type="email" className="form-control space s_r_space" id="studentInputEmail" aria-describedby="emailHelp" placeholder="Enter your answer"/>
                        </div>

                        <div className="form-group s_r_form-group">
                            <label htmlFor="date">What is the date you started or plan to start your internship?</label>
                            <input type="date" className="form-control space s_r_space" id="studentInputEmail" aria-describedby="dateHelp" placeholder="Please input date (dd/MM/yyyy)"/>
                        </div>

                        <div className="form-group s_r_form-group">
                            <label htmlFor="supervisorEmail">Specify Supervisor E-Mail address for the supervisor to fill his/her information</label>
                            <small id="supervisorEmailHelp" className="form-text text-muted s_r_form-text">Enter supervisor's organizational e-mail address where it will be the e-mail address SLIIT industry placement unit will correspond with the supervisor
                            </small>
                            <input type="email" className="form-control space s_r_space" id="studentInputEmail" aria-describedby="emailHelp" placeholder="Enter your answer"/>
                        </div>

                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                </div>
            </div>

        </div>
    );
};

export default Student_registration;
