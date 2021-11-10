import React from "react";
import './App.css';
import Signin_signup from "./Components/Signin_signup/Signin_signup";
import Student_registration from "./Components/Student_registration/Student_registration";
import HomePage from "./Pages/HomePage";
import { Switch, Route, Redirect } from "react-router-dom";

function App() {
  return (
    <div className="App">

       <HomePage />



    </div>
  );
}

export default App;
