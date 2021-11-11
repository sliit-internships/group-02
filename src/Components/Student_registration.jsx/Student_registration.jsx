import React, {useState}  from "react";
import axios from "axios";

const Student_registration = (props) => {

    const [id, setId] = useState("");
    const [currentYear, setCurrentYear] = useState("");
    const [planningyear, setPlanningYear] = useState("");
    const [yearperiod, setYearPeriod] = useState("");
    const [specialization, setSpecialization] = useState("");
    const [studentName, setStudentName] = useState("");
    const [mobile, setMobile] = useState("");
    const [studentHome, setStudentHome] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [date, setDate] = useState("");
    
function sendData(e){
  e.preventDefault();

  const newStudent = {

      id,
      currentYear,
      planningyear,
      yearperiod,
      specialization,
      studentName,
      mobile,
      studentHome,
      email,
      password,
      date
  }

  axios.post("http://localhost:5000/api/StudentRegister", newStudent).then(()=>{
      alert("student added")
  }).catch((err)=>{
      alert(err)
})

}


    return (




        <div className="container" style={{marginTop: "30px"}}>
            <div className="card">
                <div className="card-body">
                    <form onSubmit={sendData}>

                        <div className="form-group">
                            <label htmlFor="studentIdNumber">SLIIT Student Identification Number</label>
                            <small id="studentIdNumberHelp" className="form-text text-muted">Please enter your student id number without any spaces, e.g IT17121966</small>
                            <input type="email" className="form-control" id="studentInputId" aria-describedby="emailHelp" placeholder="Enter your answer"  onChange={(e)=>{
                                    setId(e.target.value);
                                }}/>
                        </div>



                        <div className="form-group" onChange={(e)=>{
                                    setCurrentYear(e.target.value);
                                }}>
                            <label htmlFor="studentCurrentYear">Current Year of Registration at SLIIT</label>
                            <select className="form-control" placeholder="Example input placeholder">
                                <option>Year 1</option>
                                <option>Year 2</option>
                                <option>Year 3</option>
                                <option>Year 4</option>
                                <option>Year 4 completed - Prorata registerd</option>
                           </select>
                        </div>




                            <div className="form-group" onChange={(e)=>{
                                    setPlanningYear(e.target.value);
                                }}>
                                <label htmlFor="studentPlaningYear">Which calendar year have you completed or planning to complete your second year?</label>
                                <select className="form-control" placeholder="Example input placeholder">
                                    <option>2018 or before</option>
                                    <option>2019</option>
                                    <option>2020</option>
                                    <option>2021</option>
                                    <option>2022</option>
                                    <option>2023 and after</option>
                                </select>
                            </div>



                            <div className="form-group" onChange={(e)=>{
                                    setYearPeriod(e.target.value);
                                }}>
                                <label htmlFor="studentYearPeriod">Which period of the year are you planning to complete or completed your second year?</label>
                                <select className="form-control" placeholder="Example input placeholder">
                                    <option>Jan - Jun</option>
                                    <option>Jul - Nov</option>

                                </select>
                            </div>
                            <div className="form-group" onChange={(e)=>{
                                    setSpecialization(e.target.value);
                                }}>
                                <label htmlFor="Specialization">Specialization</label>
                                <select className="form-control" placeholder="Example input placeholder">
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


                        <div className="form-group">
                            <label htmlFor="studentName">Student Name with Initials</label>
                            <small id="studentNameHelp" className="form-text text-muted">e.g. Rathnayaka M.H.K.R.</small>
                            <input type="text" className="form-control" id="studentInputName" aria-describedby="nameHelp" placeholder="Enter your answer" onChange={(e)=>{
                                    setStudentName(e.target.value);
                                }}/>

                        </div>
                        <div className="form-group">
                            <label htmlFor="studentMobile">Student Mobile Phone Number</label>
                            <small id="studentMobileHelp" className="form-text text-muted">e.g. 94772269563</small>
                            <input type="text" className="form-control" id="studentInputMobile" aria-describedby="mobileHelp" placeholder="The value must be a number" onChange={(e)=>{
                                    setMobile(e.target.value);
                                }}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="studentHome">Student Home Phone Number</label>
                            <small id="studentHomeHelp" className="form-text text-muted">e.g. 94112590558</small>
                            <input type="text" className="form-control" id="studentInputHome" aria-describedby="HomeHelp" placeholder="The value must be a number"  onChange={(e)=>{
                                    setStudentHome(e.target.value);
                                }}/>

                        </div>
                        <div className="form-group">
                            <label htmlFor="studentEmail">Student E-Mail (Enter One Primary E-mail Address that you use)</label>
                            <small id="studentEmailHelp" className="form-text text-muted">Students are strongly recommended use SLIIT e-mail address e.g it17051456@my.sliit.lk and it will be the primary e-mail address
                                SLIIT industry placement unit will correspond with the student</small>
                            <input type="email" className="form-control" id="studentInputEmail" aria-describedby="emailHelp" placeholder="Enter your answer"  onChange={(e)=>{
                                    setEmail(e.target.value);
                                }}/>
                        </div>

                        <div className="form-group">
                            <label htmlFor="exampleInputPassword1">Password</label>
                            <input type="password" className="form-control" id="exampleInputPassword1"  onChange={(e)=>{
                                    setPassword(e.target.value);
                                }}/>
                        </div>

                        <div className="form-group">
                            <label htmlFor="date">What is the date you started or plan to start your internship?</label>
                            <input type="date" className="form-control" id="studentInputEmail" aria-describedby="dateHelp" placeholder="Please input date (dd/MM/yyyy)"  onChange={(e)=>{
                                    setDate(e.target.value);
                                }}/>
                        </div>

                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                </div>
            </div>

        </div>
    );
};

export default Student_registration;