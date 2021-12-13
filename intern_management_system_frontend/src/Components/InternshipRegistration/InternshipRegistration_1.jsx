import React from "react";
import "./InternshipRegistration_1.css"

const InternshipRegistration_1 = (props) => {
    return (

        <div>



        <div className="ir1_cardStyle" >
            <div className="card i_r_studentRegCard">
                <div className="card-body i_r_card-body">

                    <form >
                        <div className="form-group i_r_form-group">
                            <label htmlFor="studentIdNumber">1. SLIIT Student ID Number</label><br/>
                            <small id="studentIdNumberHelp" className="form-text text-muted i_r_form-text">Please enter your student id number without any spaces, e.g IT17121966</small>
                            <input type="email" className="form-control space i_r_space" id="studentInputId" aria-describedby="emailHelp" placeholder="Enter your answer"/>
                        </div>

                        <div className="form-group i_r_form-group">
                            <label htmlFor="companyName">2. Company Name</label>
                            <input type="text" className="form-control space i_r_space" id="companyInputcompany" aria-describedby="nameHelp" placeholder="Enter your answer"/>
                        </div>
                        <div className="form-group i_r_form-group">
                            <label htmlFor="exampleFormControlTextarea1">3. Company Address</label>
                            <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                        </div>
                        <div className="form-group i_r_form-group">
                            <label htmlFor="studentMobile">4. Supervisor Name</label>
                            <input type="text" className="form-control space i_r_space" id="studentInputMobile" aria-describedby="mobileHelp" placeholder="Enter your answer"/>
                        </div>
                        <div className="form-group i_r_form-group">
                            <label htmlFor="studentHome">5. Student Home Phone Number</label><br/>
                            <small id="studentHomeHelp" className="form-text text-muted i_r_form-text">e.g. 94112590558</small><br/>
                            <input type="text" className="form-control space i_r_space" id="studentInputHome" aria-describedby="HomeHelp" placeholder="The value must be a number"/>
                        </div>
                        <div className="form-group i_r_form-group">
                            <label htmlFor="studentEmail">6. Supervisor Title (Organizational Designation)</label>

                            <input type="text" className="form-control space i_r_space" id="studentInputEmail" aria-describedby="emailHelp" placeholder="Enter your answer"/>
                        </div>

                        <div className="form-group i_r_form-group">
                            <label htmlFor="date">
                                7. Supervisor Contact Number
                            </label>
                            <input type="text" className="form-control space i_r_space" id="studentInputEmail" aria-describedby="mobileHelp" placeholder="The value must be a number"/>
                        </div>

                        <div className="form-group i_r_form-group">
                            <label htmlFor="supervisorEmail">8. Supervisor E-Mail Address (Enter One Valid Company E-mail Address)</label>

                            <input type="email" className="form-control space i_r_space" id="studentInputEmail" aria-describedby="emailHelp" placeholder="Enter your answer"/>
                        </div>

                        <div className="form-group i_r_form-group">
                            <label htmlFor="date">9. Internship Start Date</label>
                            <input type="date" className="form-control space i_r_space" id="studentInputEmail" aria-describedby="dateHelp" placeholder="Please input date (dd/MM/yyyy)"/>
                        </div>

                        <div className="form-group i_r_form-group">
                            <label htmlFor="date">10. Internship End Date</label>
                            <input type="date" className="form-control space i_r_space" id="studentInputEmail" aria-describedby="dateHelp" placeholder="Please input date (dd/MM/yyyy)"/>
                        </div>

                        <div className="form-group i_r_form-group">
                            <label htmlFor="studentMobile">11. Expected Number of Hours Per Week that the student needs to work</label>
                            <input type="text" className="form-control space i_r_space" id="studentInputMobile" aria-describedby="mobileHelp" placeholder="Please enter a number less than or equal to 45"/>
                        </div>

                        <div className="form-group i_r_form-group">
                            <label htmlFor="exampleFormControlTextarea1">12. Describe the tasks student needs to complete</label><br/>
                            <small id="studentHomeHelp" className="form-text text-muted i_r_form-text">Each task should be separated by a comma and spacing e.g. Task 1, Task 2, </small>
                            <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                        </div>

                        <div className="form-group i_r_form-group">
                            <label htmlFor="exampleFormControlTextarea1">13. Describe what student will learn</label><br/>
                            <small id="studentHomeHelp" className="form-text text-muted i_r_form-text">Each item should be separated by a comma and spacing
                            </small>
                            <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                        </div>



                        <div className="form-group">
                            <label htmlFor="Specialization">14. Student Specialization</label><br/>
                            <small id="studentHomeHelp" className="form-text text-muted i_r_form-text">Select the specialization student has registered for his degree program at SLIIT
                            </small>
                            <select className="form-select space i_r_space" placeholder="Example input placeholder">
                                <option>IT</option>
                                <option>DS</option>
                                <option>SE</option>
                                <option>IM</option>
                                <option>CS</option>
                                <option>CSNE</option>
                                <option>ISE</option>

                            </select>
                        </div>
                        <br/>
                        <button type="submit" className="skewBtn purple">SAVE</button>
                    </form>
                </div>
            </div>

        </div>

        </div>
    );
};

export default InternshipRegistration_1;
