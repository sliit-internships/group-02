import React from "react";
import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import DailyDiary from "./Components/DailyDiary/DailyDiary";
import InternshipRegistration_1 from "./Components/InternshipRegistration/InternshipRegistration_1";
import ChangeSupervisor from "./Components/ChangeSupervisor/ChangeSupervisor";
import Student_registration from "./Components/Student_registration/Student_registration";
import Signin_signup from "./Components/Signin_signup/Signin_signup";
import StudentProfile from "./Components/StudentProfile/StudentProfile";
import StudentRegistrationDetails from "./Components/StudentRegistrationDetails/StudentRegistrationDetails";
import StudentRegistrationMoreDetails from "./Components/StudentRegistrationMoreDetails/StudentRegistrationMoreDetails";
import SupervisorHomePage from "./Components/SupervisorHomePage/SupervisorHomePage";
import InternshipRegistration_2 from "./Components/InternshipRegistration/InternshipRegistration_2";
import Supervisor_DD from "./Components/Supervisor_DD/Supervisor_DD";
import InternshipTermination from "./Components/InternshipTermination/InternshipTermination";
import StudentRegistration_home from "./Components/StudentRegistration_home/StudentRegistration_home";
import StudentEvaluationForm from "./Components/StudentEvaluationForm/StudentEvaluationForm";
import Horizontal_nav from "./Components/Horizontal_nav/Horizontal_nav";
import StudentHome from "./Components/StudentHome/StudentHome";
import AdminHome from "./Components/AdminHome/AdminHome";
import RegisteredSupervisorHome from "./Components/RegisteredSupervisorHome/RegisteredSupervisorHome";
import HomePage from "./Components/HomePage/HomePage";
import InternshipRegistrationPage from "./Components/InternshipRegistration/InternshipRegistrationPage";
import ResetPassword from "./Components/ResetPassword/ResetPassword";
import Footer from "./Components/Footer/Footer";






function App() {
  return (
    <div className="App">




        <Router>
            <Routes>
                <Route path='/' element={<HomePage/>} />
                <Route path='/student_home' element={<StudentRegistration_home/>} />
                <Route path='/footer' element={<Footer/>} />
                <Route path='/reset-password' element={<ResetPassword/>} />
                <Route path='/login' element={<Signin_signup/>} />
                <Route path='/supervisor_homePage' element={<SupervisorHomePage/>} />
                <Route path='/internship_registration_form' element={ <InternshipRegistrationPage />}/>
                <Route path='/registered_supervisor_home' element={<RegisteredSupervisorHome/>} />
                <Route path='/student_registration_form' element={ <Student_registration />}/>
                <Route path='/registered_student_home' element={ <StudentHome />}/>
                <Route path='/student_daily_diary' element={ <DailyDiary />}/>
                <Route path='/change_supervisor' element={ <ChangeSupervisor />}/>
                <Route path='/internship_termination' element={ <InternshipTermination />}/>
                <Route path='/internship_registration_details' element={ <StudentRegistrationDetails />}/>
                <Route path='/registered_student_details' element={ <StudentRegistrationDetails />}/>
                <Route path='/student_uploaded_dd' element={ <Supervisor_DD />}/>
                <Route path='/student_evaluation_form' element={ <StudentEvaluationForm />}/>
            </Routes>
        </Router>

    </div>
  );
}

export default App;
