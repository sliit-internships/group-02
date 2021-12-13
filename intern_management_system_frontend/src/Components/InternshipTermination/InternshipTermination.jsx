import React from "react";
import "./InternshipTermination.css"

const InternshipTermination = (props) => {
    return (

        <div>
           <div>

               <img className="IT_image" src="https://www.dectar.com/images/home/dectar-banner3.jpg"/>
           </div>

            <h1 className="IT_h1">Internship Termination and Re-registration of New Internship</h1><br/>
            <p className="IT_p1"> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry'
                s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to
                make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting,
                remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset
                sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker
                including versions of Lorem Ipsum.
            </p>

            <div className="card IT_cardStyle">
                <div className="card-body">

                    <form>
                        <div className="mb-3">
                            <label htmlFor="exampleInputSt-id" className="form-label">1.
                                SLIIT Student Identification Number</label>
                            <div id="emailHelp" className="form-text smallText">Please enter your student id number without any spaces, e.g IT17121966</div>
                            <input type="st-id" className="form-control" id="exampleInputSt-id" aria-describedby="St-idHelp" placeholder="Enter your answer"/>

                        </div>

                        <div className="mb-3">
                            <label htmlFor="exampleInputSt-id" className="form-label">2.
                                Current Year of Registration at SLIIT</label>
                            <select className="form-select" aria-label="Default select example">
                                <option> Choose.. </option>
                                <option>Year 1</option>
                                <option>Year 2</option>
                                <option>Year 3</option>
                                <option>Year 4</option>
                                <option>Year 4 completed - Prorata registered</option>
                            </select>


                        </div>

                        <div className="mb-3">
                            <label htmlFor="exampleInputSt-id" className="form-label">3.
                                Specialization</label>
                            <select className="form-select" aria-label="Default select example">
                                <option> Choose.. </option>
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

                        <div className="mb-3">
                            <label htmlFor="example" className="form-label">1.
                                SLIIT Student Identification Number</label>
                            <div id="emailHelp" className="form-text smallText">e.g. 94772269563</div>
                            <input type="text" className="form-control" id="exampleInputSt-id" aria-describedby="St-idHelp" placeholder="The value must be a number"/>

                        </div>

                        <div className="mb-3">
                            <label htmlFor="exampleFormControlTextarea1" className="form-label">5.
                                Specify the reason for Termination of the already registered internship</label>
                            <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Enter your answer"></textarea>
                        </div>

                        <div className="form-group s_r_form-group">
                            <label htmlFor="date">6. What is the date you started or plan to start your
                                internship?</label>
                            <input type="date" className="form-control space s_r_space"
                                   id="studentInputEmail"
                                   aria-describedby="dateHelp"
                                   placeholder="Please input date (dd/MM/yyyy)"/>
                        </div>

                        <div className="mb-3">
                            <label htmlFor="exampleInput" className="form-label">7.
                                Specify Supervisor E-Mail address for the  new supervisor to fill his/her information</label>
                            <div id="emailHelp" className="form-text smallText">Enter supervisor's organizational e-mail address where it will the e-mail address SLIIT industry placement unit will correspond with the supervisor
                            </div>
                            <input type="email" className="form-control" id="example" aria-describedby="St-idHelp" placeholder="Enter your answer"/>

                        </div>

                        <button className="skewBtn purple ">REGISTER</button>
                    </form>

                </div>
            </div>



        </div>
    );
};

export default InternshipTermination;
