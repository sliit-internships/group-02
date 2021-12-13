import React from "react";
import "./InternshipRegistration_3.css"
import {Link} from "react-router-dom";

const InternshipRegistration_3 = (props) => {
    return (

        <div className="ir3_cardStyle" >


            <div className="card i_r_studentRegCard">
                <div className="card-body i_r_card-body">

                    <form>
                        <div className="form-group i_r_form-group">
                            <h4>Agreement</h4>
                            <label htmlFor="studentIdNumber">16. Your Agreement</label>
                            <br/>


                            <div className="form-check fieldSpace">
                                <input className="form-check-input" type="checkbox" value="" id="defaultCheck1"/>
                                <label className="form-check-label" htmlFor="defaultCheck1">
                                    We accept this student and would permit leave for the student for mandatory academic
                                    activities such as examinations during week days if and when required
                                </label>
                            </div>


                        </div>

                        <button type="submit" className="skewBtn purple ">BACK</button>
                        <button type="submit" className="skewBtn purple save2btn"><Link to="/registered_supervisor_home">SUBMIT</Link></button>
                    </form>
                </div>
            </div>


        </div>
    );
};

export default InternshipRegistration_3;
