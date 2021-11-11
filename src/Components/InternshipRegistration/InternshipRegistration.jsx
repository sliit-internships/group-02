import React from "react";
import "./InternshipRegistration.css"

const InternshipRegistration = (props) => {
    return (

        <div className="cStyle" >
            <div className="card i_r_studentRegCard">
                <div className="card-body i_r_card-body">
                    <div className="row head2">
                    <h1 className="i_r_h2">Form I-1B : To be filled by the supervisor</h1>
                    </div>
                    <form className="form2">
                        <div className="form-group i_r_form-group">
                            <label htmlFor="studentIdNumber">SLIIT Student ID Number</label>
                            <small id="studentIdNumberHelp" className="form-text text-muted i_r_form-text">Please enter your student id number without any spaces, e.g IT17121966</small>
                            <input type="email" className="form-control space i_r_space" id="studentInputId" aria-describedby="emailHelp" placeholder="Enter your answer"/>
                        </div>

                        <div className="form-group i_r_form-group">
                            <label htmlFor="companyName">Company Name</label>
                            <input type="text" className="form-control space i_r_space" id="companyInputcompany" aria-describedby="nameHelp" placeholder="Enter your answer"/>
                        </div>
                        <div className="form-group i_r_form-group">
                            <label htmlFor="exampleFormControlTextarea1">Company Address</label>
                            <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                        </div>
                        <div className="form-group i_r_form-group">
                            <label htmlFor="studentMobile">Supervisor Name</label>
                            <input type="text" className="form-control space i_r_space" id="studentInputMobile" aria-describedby="mobileHelp" placeholder="Enter your answer"/>
                        </div>
                        <div className="form-group i_r_form-group">
                            <label htmlFor="studentHome">Student Home Phone Number</label>
                            <small id="studentHomeHelp" className="form-text text-muted i_r_form-text">e.g. 94112590558</small>
                            <input type="text" className="form-control space i_r_space" id="studentInputHome" aria-describedby="HomeHelp" placeholder="The value must be a number"/>
                        </div>
                        <div className="form-group i_r_form-group">
                            <label htmlFor="studentEmail">Supervisor Title (Organizational Designation)</label>

                            <input type="text" className="form-control space i_r_space" id="studentInputEmail" aria-describedby="emailHelp" placeholder="Enter your answer"/>
                        </div>

                        <div className="form-group i_r_form-group">
                            <label htmlFor="date">
                                Supervisor Contact Number
                            </label>
                            <input type="text" className="form-control space i_r_space" id="studentInputEmail" aria-describedby="mobileHelp" placeholder="The value must be a number"/>
                        </div>

                        <div className="form-group i_r_form-group">
                            <label htmlFor="supervisorEmail">Supervisor E-Mail Address (Enter One Valid Company E-mail Address)</label>

                            <input type="email" className="form-control space i_r_space" id="studentInputEmail" aria-describedby="emailHelp" placeholder="Enter your answer"/>
                        </div>

                        <div className="form-group i_r_form-group">
                            <label htmlFor="date">Internship Start Date</label>
                            <input type="date" className="form-control space i_r_space" id="studentInputEmail" aria-describedby="dateHelp" placeholder="Please input date (dd/MM/yyyy)"/>
                        </div>

                        <div className="form-group i_r_form-group">
                            <label htmlFor="date">Internship End Date</label>
                            <input type="date" className="form-control space i_r_space" id="studentInputEmail" aria-describedby="dateHelp" placeholder="Please input date (dd/MM/yyyy)"/>
                        </div>

                        <div className="form-group i_r_form-group">
                            <label htmlFor="studentMobile">Expected Number of Hours Per Week that the student needs to work</label>
                            <input type="text" className="form-control space i_r_space" id="studentInputMobile" aria-describedby="mobileHelp" placeholder="Please enter a number less than or equal to 45"/>
                        </div>

                        <div className="form-group i_r_form-group">
                            <label htmlFor="exampleFormControlTextarea1">Describe the tasks student needs to complete</label>
                            <small id="studentHomeHelp" className="form-text text-muted i_r_form-text">Each task should be separated by a comma and spacing e.g. Task 1, Task 2, </small>
                            <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                        </div>

                        <div className="form-group i_r_form-group">
                            <label htmlFor="exampleFormControlTextarea1">Describe what student will learn</label>
                            <small id="studentHomeHelp" className="form-text text-muted i_r_form-text">Each item should be separated by a comma and spacing
                            </small>
                            <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                        </div>



                        <div className="form-group">
                            <label htmlFor="Specialization">Student Specialization</label>
                            <small id="studentHomeHelp" className="form-text text-muted i_r_form-text">Select the specialization student has registered for his degree program at SLIIT
                            </small>
                            <select className="form-control space i_r_space" placeholder="Example input placeholder">
                                <option>IT</option>
                                <option>DS</option>
                                <option>SE</option>
                                <option>IM</option>
                                <option>CS</option>
                                <option>CSNE</option>
                                <option>ISE</option>

                            </select>
                        </div>

                        <button type="submit" className="btn btn-primary nextBtn">Next</button>
                    </form>
                </div>
            </div>


            <div className="card i_r_studentRegCard">
                <div className="card-body i_r_card-body">

                    <form>
                        <div className="form-group i_r_form-group">
                            <label htmlFor="studentIdNumber">IT: How would you broadly categorize type of training the IT student will get?</label>
                            <small id="studentIdNumberHelp" className="form-text text-muted i_r_form-text space1">You could select more than one option. Please select most appropriate choice or list of choices</small>
                            <div className="form-check fieldSpace">
                                <input className="form-check-input" type="checkbox" value="" id="defaultCheck1"/>
                                    <label className="form-check-label" htmlFor="defaultCheck1">
                                        01. Front end software development
                                    </label>
                            </div>
                            <div className="form-check fieldSpace">
                                <input className="form-check-input" type="checkbox" value="" id="defaultCheck1"/>
                                <label className="form-check-label" htmlFor="defaultCheck2">
                                    02. Back end software development
                                </label>
                            </div>
                            <div className="form-check fieldSpace">
                                <input className="form-check-input" type="checkbox" value="" id="defaultCheck1"/>
                                <label className="form-check-label" htmlFor="defaultCheck2">
                                    03. Full stack software development
                                </label>
                            </div>
                            <div className="form-check fieldSpace">
                                <input className="form-check-input" type="checkbox" value="" id="defaultCheck1"/>
                                <label className="form-check-label" htmlFor="defaultCheck2">
                                    04. Mobile application development
                                </label>
                            </div>
                            <div className="form-check fieldSpace">
                                <input className="form-check-input" type="checkbox" value="" id="defaultCheck1"/>
                                <label className="form-check-label" htmlFor="defaultCheck2">
                                    05. Data Science
                                </label>
                            </div>
                            <div className="form-check fieldSpace">
                                <input className="form-check-input" type="checkbox" value="" id="defaultCheck1"/>
                                <label className="form-check-label" htmlFor="defaultCheck2">
                                    06. Data Engineering (collecting, storing and processing data)
                                </label>
                            </div>
                            <div className="form-check fieldSpace">
                                <input className="form-check-input" type="checkbox" value="" id="defaultCheck1"/>
                                <label className="form-check-label" htmlFor="defaultCheck2">
                                    07. Software Testing - Manual
                                </label>
                            </div>
                            <div className="form-check fieldSpace">
                                <input className="form-check-input" type="checkbox" value="" id="defaultCheck1"/>
                                <label className="form-check-label" htmlFor="defaultCheck2">
                                    08. Software Testing - Automation
                                </label>
                            </div>
                            <div className="form-check fieldSpace">
                                <input className="form-check-input" type="checkbox" value="" id="defaultCheck1"/>
                                <label className="form-check-label" htmlFor="defaultCheck2">
                                    09. Robotic Process Automation
                                </label>
                            </div>

                            <div className="form-check fieldSpace">
                                <input className="form-check-input" type="checkbox" value="" id="defaultCheck1"/>
                                <label className="form-check-label" htmlFor="defaultCheck2">
                                    10. Cyber Security related
                                </label>
                            </div>
                            <div className="form-check fieldSpace">
                                <input className="form-check-input" type="checkbox" value="" id="defaultCheck1"/>
                                <label className="form-check-label" htmlFor="defaultCheck2">
                                    11. Network Engineering
                                </label>
                            </div>

                            <div className="form-check fieldSpace">
                                <input className="form-check-input" type="checkbox" value="" id="defaultCheck1"/>
                                <label className="form-check-label" htmlFor="defaultCheck2">
                                    12. Systems Engineering
                                </label>
                            </div>

                            <div className="form-check fieldSpace">
                                <input className="form-check-input" type="checkbox" value="" id="defaultCheck1"/>
                                <label className="form-check-label" htmlFor="defaultCheck2">
                                    13. Database Administration
                                </label>
                            </div>
                            <div className="form-check fieldSpace">
                                <input className="form-check-input" type="checkbox" value="" id="defaultCheck1"/>
                                <label className="form-check-label" htmlFor="defaultCheck2">
                                    14. DevOps (Development Operations)
                                </label>
                            </div>
                            <div className="form-check fieldSpace">
                                <input className="form-check-input" type="checkbox" value="" id="defaultCheck1"/>
                                <label className="form-check-label" htmlFor="defaultCheck2">
                                    15. SysOps (System Operations)
                                </label>
                            </div>
                            <div className="form-check fieldSpace">
                                <input className="form-check-input" type="checkbox" value="" id="defaultCheck1"/>
                                <label className="form-check-label" htmlFor="defaultCheck2">
                                    16. TechOps (Technical Operations)
                                </label>
                            </div>
                            <div className="form-check fieldSpace">
                                <input className="form-check-input" type="checkbox" value="" id="defaultCheck1"/>
                                <label className="form-check-label" htmlFor="defaultCheck2">
                                    17. Multi Media related
                                </label>
                            </div>
                            <div className="form-check fieldSpace">
                                <input className="form-check-input" type="checkbox" value="" id="defaultCheck1"/>
                                <label className="form-check-label" htmlFor="defaultCheck2">
                                    18. Project Management
                                </label>
                            </div>
                            <div className="form-check fieldSpace">
                                <input className="form-check-input" type="checkbox" value="" id="defaultCheck1"/>
                                <label className="form-check-label" htmlFor="defaultCheck2">
                                    19. Business Analysis
                                </label>
                            </div>
                            <div className="form-check fieldSpace">
                                <input className="form-check-input" type="checkbox" value="" id="defaultCheck1"/>
                                <label className="form-check-label" htmlFor="defaultCheck2">
                                    20. IT Support
                                </label>
                            </div>
                            <div className="form-check fieldSpace otherField">
                                <input className="form-check-input" type="checkbox" value="" id="defaultCheck1"/>
                                <input type="text" className="form-control space " id="studentInputHome" aria-describedby="HomeHelp" placeholder="Other"/>
                            </div>
                        </div>

                        <button type="submit" className="btn btn-primary backBtn">Back</button>
                        <button type="submit" className="btn btn-primary nextBtn2">Next</button>
                    </form>
                </div>
            </div>


            <div className="card i_r_studentRegCard">
                <div className="card-body i_r_card-body">

                    <form>
                        <div className="form-group i_r_form-group">
                            <h4>Agreement</h4>
                            <label htmlFor="studentIdNumber">15.Your Agreement</label>

                            <div className="form-check fieldSpace">
                                <input className="form-check-input" type="checkbox" value="" id="defaultCheck1"/>
                                <label className="form-check-label" htmlFor="defaultCheck1">
                                    We accept this student and would permit leave for the student for mandatory academic activities such as examinations during week days if and when required
                                </label>
                            </div>


                        </div>

                        <button type="submit" className="btn btn-primary backBtn">Back</button>
                        <button type="submit" className="btn btn-primary nextBtn2">Submit</button>
                    </form>
                </div>
            </div>

        </div>
    );
};

export default InternshipRegistration;
