import React from "react";
import "./InternshipRegistration_2.css"

const InternshipRegistration_2 = (props) => {
    return (

        <div className="ir2_cardStyle" >




            <div className="card i_r_studentRegCard">
                <div className="card-body i_r_card-body">

                    <form>
                        <div className="form-group i_r_form-group">
                            <label htmlFor="studentIdNumber">15. IT: How would you broadly categorize type of training the IT student will get?</label><br/>
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

                        <button type="submit" className="skewBtn purple ">BACK</button>
                        <button type="submit" className="skewBtn purple save2btn">SAVE</button>
                    </form>
                </div>
            </div>



        </div>
    );
};

export default InternshipRegistration_2;
