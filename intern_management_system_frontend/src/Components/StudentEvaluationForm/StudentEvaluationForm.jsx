import React from "react";
import "./StudentEvaluationForm.css"


const StudentEvaluationForm = (props) => {
    return (
        <div>
            <img className="se_image" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcETt1jMt6MMygbbRiIHlAIfyoK7_8JVvLgMO-qpto2f-ds1ge"/>

            <div className="se_topic" >
                <h1>Student Final Performance Evaluation</h1>
                <p className="se_topic_pTag">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                    industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of
                    type and scrambled it to make a type specimen book. It has survived not only five centuries, but
                    also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in
                    the 1960s with the release of Letraset sheets containing Lorem</p>
            </div>

            <div className="card seFormCard">
                <div className="card-body seCardStyle">
                    <form>
                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label">1.
                                SLIIT Student ID Number</label>
                            <div id="emailHelp" className="form-text">Please enter student id number without any spaces, e.g IT17121966
                            </div>
                            <input type="text" className="form-control" id="exampleInputEmail1"
                                   aria-describedby="emailHelp" placeholder="Enter your answer"/>

                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputPassword1" className="form-label">2.
                                Internship Title</label>
                            <div id="emailHelp" className="form-text">The designation title given to the student during the internship
                            </div>
                            <input type="text" className="form-control" id="exampleInputPassword1" placeholder="Enter your answer"/>
                        </div>

                        <div className="mb-3">
                            <label htmlFor="exampleInputPassword1" className="form-label">3.
                                Actual Period Completed - From Date</label>
                            <div id="emailHelp" className="form-text">IMPORTANT : Be vigilant of selecting the CORRECT Year and Month from the date picker
                            </div>
                            <input type="date" className="form-control" id="exampleInputPassword1" placeholder="Enter your answer(MM/DD/YYYY)"/>
                        </div>

                        <div className="mb-3">
                            <label htmlFor="exampleInputPassword1" className="form-label">4.
                                Actual Period Completed - To Date</label>
                            <div id="emailHelp" className="form-text">The date completed OR the date to be completed if providing the feedback early
                            </div>
                            <input type="date" className="form-control" id="exampleInputPassword1" placeholder="Enter your answer(MM/DD/YYYY)"/>
                        </div>

                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label">5.
                                Company Name</label>

                            <input type="text" className="form-control" id="exampleInputEmail1"
                                   aria-describedby="emailHelp" placeholder="Enter your answer"/>

                        </div>

                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label">6.
                                Supervisor Name</label>

                            <input type="text" className="form-control" id="exampleInputEmail1"
                                   aria-describedby="emailHelp" placeholder="Enter your answer"/>

                        </div>

                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label">7.
                                Supervisor E-Mail Address</label>
                            <div id="emailHelp" className="form-text">Specify the official e-mail of the person filling this from in the format abc@abc.com
                            </div>
                            <input type="text" className="form-control" id="exampleInputEmail1"
                                   aria-describedby="emailHelp" placeholder="Enter your answer"/>

                        </div>

                        <div className="mb-3">
                            <label htmlFor="exampleFormControlTextarea1" className="form-label">8.
                                Student's Strengths</label>
                            <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Enter your answer"></textarea>
                        </div>

                        <div className="mb-3">
                            <label htmlFor="exampleFormControlTextarea1" className="form-label">9.
                                Student's weaknesses</label>
                            <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Enter your answer"></textarea>
                        </div>

                        <div className="mb-3">
                            <label htmlFor="exampleFormControlTextarea1" className="form-label">10.
                                Quality of work</label>

                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="flexRadioDefault"
                                       id="flexRadioDefault1"/>
                                    <label className="form-check-label" htmlFor="flexRadioDefault1">
                                        Above Average
                                    </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="flexRadioDefault"
                                       id="flexRadioDefault2" />
                                    <label className="form-check-label" htmlFor="flexRadioDefault2">
                                        Average
                                    </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="flexRadioDefault"
                                       id="flexRadioDefault3" />
                                <label className="form-check-label" htmlFor="flexRadioDefault3">
                                    Below average
                                </label>
                            </div>
                        </div>

                        <div className="mb-3">
                            <label htmlFor="exampleFormControlTextarea1" className="form-label">11.
                                Technical Ability</label>

                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="flexRadioDefault"
                                       id="flexRadioDefault4"/>
                                <label className="form-check-label" htmlFor="flexRadioDefault4">
                                    Above Average
                                </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="flexRadioDefault"
                                       id="flexRadioDefault5" />
                                <label className="form-check-label" htmlFor="flexRadioDefault5">
                                    Average
                                </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="flexRadioDefault"
                                       id="flexRadioDefault6" />
                                <label className="form-check-label" htmlFor="flexRadioDefault6">
                                    Below average
                                </label>
                            </div>
                        </div>

                        <div className="mb-3">
                            <label htmlFor="exampleFormControlTextarea1" className="form-label">12.
                                Communication</label>

                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="flexRadioDefault"
                                       id="flexRadioDefault7"/>
                                <label className="form-check-label" htmlFor="flexRadioDefault7">
                                    Above Average
                                </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="flexRadioDefault"
                                       id="flexRadioDefault8" />
                                <label className="form-check-label" htmlFor="flexRadioDefault8">
                                    Average
                                </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="flexRadioDefault"
                                       id="flexRadioDefault9" />
                                <label className="form-check-label" htmlFor="flexRadioDefault9">
                                    Below average
                                </label>
                            </div>
                        </div>

                        <div className="mb-3">
                            <label htmlFor="exampleFormControlTextarea1" className="form-label">13.
                                Leadership</label>

                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="flexRadioDefault"
                                       id="flexRadioDefault10"/>
                                <label className="form-check-label" htmlFor="flexRadioDefault10">
                                    Above Average
                                </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="flexRadioDefault"
                                       id="flexRadioDefault11" />
                                <label className="form-check-label" htmlFor="flexRadioDefault11">
                                    Average
                                </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="flexRadioDefault"
                                       id="flexRadioDefault12" />
                                <label className="form-check-label" htmlFor="flexRadioDefault12">
                                    Below average
                                </label>
                            </div>
                        </div>

                        <div className="mb-3">
                            <label htmlFor="exampleFormControlTextarea1" className="form-label">14.
                                Provide some points on how student can develop his/her career after internship</label>
                            <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Enter your answer"></textarea>
                        </div>

                        <div className="mb-3">
                            <label htmlFor="exampleFormControlTextarea1" className="form-label">15.
                                How effective has the Internship Program been in meeting the needs of your organization?</label>
                            <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Enter your answer"></textarea>
                        </div>

                        <div className="mb-3">
                            <label htmlFor="exampleFormControlTextarea1" className="form-label">16.
                                Please suggest ways you feel we could make our program more meaningful to the student and you, the employer.</label>
                            <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Enter your answer"></textarea>
                        </div>

                        <div className="mb-3">
                            <label htmlFor="exampleFormControlTextarea1" className="form-label">17.
                                Overall feedback comments about the student</label>
                            <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Enter your answer"></textarea>
                        </div>

                        <div className="mb-3">
                            <label htmlFor="exampleFormControlTextarea1" className="form-label">18.
                                Any other comments about the student for the Faculty Advisory</label>
                            <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Enter your answer"></textarea>
                        </div>

                        <div className="mb-3">
                            <label htmlFor="exampleFormControlTextarea1" className="form-label">19.
                                Overall Students performance</label>

                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="flexRadioDefault"
                                       id="flexRadioDefault13"/>
                                <label className="form-check-label" htmlFor="flexRadioDefault13">
                                    Outstanding
                                </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="flexRadioDefault"
                                       id="flexRadioDefault14" />
                                <label className="form-check-label" htmlFor="flexRadioDefault14">
                                    Very Good
                                </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="flexRadioDefault"
                                       id="flexRadioDefault15" />
                                <label className="form-check-label" htmlFor="flexRadioDefault15">
                                    Good
                                </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="flexRadioDefault"
                                       id="flexRadioDefault16" />
                                <label className="form-check-label" htmlFor="flexRadioDefault16">
                                    Marginal
                                </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="flexRadioDefault"
                                       id="flexRadioDefault17" />
                                <label className="form-check-label" htmlFor="flexRadioDefault17">
                                    Unsatisfactory
                                </label>
                            </div>
                        </div>

                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label">20.
                                Your percentage rating (out of 100) on student's overall performance as an intern</label>

                            <input type="text" className="form-control" id="exampleInputEmail1"
                                   aria-describedby="emailHelp" placeholder="Number must be between 0~100"/>

                        </div>

                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label">21.
                                Your Agreement</label>

                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                                    <label className="form-check-label" htmlFor="flexCheckDefault">
                                        I certify that above information is correct and genuine feedback of mine
                                    </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked"
                                       />
                                    <label className="form-check-label" htmlFor="flexCheckChecked">
                                        I have given this feedback to the student
                                    </label>
                            </div>



                        </div>


                        <button className="skewBtn purple ">SUBMIT</button>
                    </form>
                </div>
            </div>



        </div>


    );
};

export default StudentEvaluationForm;
