import React from "react";
import "./ChangeSupervisor.css"
import csImage from "../../Asserts/—Pngtree—modern flat design concept of_5332889.png"



const ChangeSupervisor = (props) => {
    return (
        <div>
            <div className=" row">

                    <h1 className="cshead2">SUPERVISOR CHANGE FORM</h1>

            </div>

            <div className=" row ">

              <div className="col-6">
                  <img src={csImage} className="csImage"/>
              </div>


                <div className="col-6">
                    <div className="cs_Style" >
                        <div className="card cs_studentRegCard ">
                            <div className="card-body cs_card-body">

                                <form>
                                    <div className="form-group cs_form-group">
                                        <label htmlFor="studentIdNumber">1. SLIIT Student ID Number</label><br/>
                                        <small id="studentIdNumberHelp" className="form-text text-muted cs_form-text">Please enter your student id number without any spaces, e.g IT17121966</small>
                                        <input type="email" className="form-control space s_r_space" id="studentInputId" aria-describedby="emailHelp" placeholder="Enter your answer"/>
                                    </div>

                                    <div className="form-group cs_form-group">
                                        <label htmlFor="studentName">2. Company Name</label>

                                        <input type="text" className="form-control space s_r_space" id="companyInputName" aria-describedby="nameHelp" placeholder="Enter your answer"/>
                                    </div>
                                    <div className="form-group cs_form-group">
                                        <label htmlFor="studentMobile">3. Supervisor Name</label>

                                        <input type="text" className="form-control space s_r_space" id="studentInputMobile" aria-describedby="mobileHelp" placeholder="Enter your answer"/>
                                    </div>
                                    <div className="form-group cs_form-group">
                                        <label htmlFor="studentHome">4. Supervisor Title (Organizational Designation)</label>

                                        <input type="text" className="form-control space s_r_space" id="studentInputHome" aria-describedby="HomeHelp" placeholder="Enter your answer"/>
                                    </div>
                                    <div className="form-group cs_form-group">
                                        <label htmlFor="studentEmail">5. Supervisor Contact Number</label><br/>
                                        <small id="studentEmailHelp" className="form-text text-muted cs_form-text">Students are strongly recommended use SLIIT e-mail address e.g it17051456@my.sliit.lk and it will be the primary e-mail address
                                            SLIIT industry placement unit will correspond with the student</small>
                                        <input type="text" className="form-control space s_r_space" id="studentInputEmail" aria-describedby="emailHelp" placeholder="Enter your answer"/>
                                    </div>


                                    <div className="form-group cs_form-group">
                                        <label htmlFor="supervisorEmail">
                                            Supervisor E-Mail Address (Enter One Valid Company E-mail Address)</label><br/>
                                        <small id="supervisorEmailHelp" className="form-text text-muted cs_form-text">such as abc@abc.com</small>
                                        <input type="email" className="form-control space s_r_space" id="studentInputEmail" aria-describedby="emailHelp" placeholder="Enter your answer"/>
                                    </div>

                                    <div className="form-group cs_form-group">
                                        <label htmlFor="supervisorEmail">
                                            7. Your Agreement</label>
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked"
                                            />
                                            <label className="form-check-label" htmlFor="flexCheckChecked">
                                                I certify above information is correct and take the full responsibility of the information provided
                                            </label>
                                        </div>

                                    </div>

                                    <button className="skewBtn purple ">REGISTER</button>
                                </form>
                            </div>
                        </div>

                    </div>
                </div>



            </div>


        </div>
    );
};

export default ChangeSupervisor;
