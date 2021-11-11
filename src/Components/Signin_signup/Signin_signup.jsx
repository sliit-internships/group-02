import React from "react";
import "./Signin_signup.css"
import {} from "react-router-dom";

const Signin_signup = (props) => {
    return (

        <div className="pageBody">


            <div className="card mb-10 cardStyle">

                <div className="row no-gutters">

                    <div className="col-md-6">

                        <img src="https://static.sliit.lk/wp-content/uploads/2018/01/Course-Web.jpg"
                             className="card-img signImage" alt="..."/>
                    </div>
                    <div className="col-md-6">
                        <div className="card-body signInBody">

                            <div className="login-wrap">
                                <div className="login-html">
                                    <input
                                        id="tab-1"
                                        type="radio"
                                        name="tab"
                                        className="sign-in"
                                        checked
                                    />
                                    <label
                                        htmlFor="tab-1"
                                        className="tab"

                                    >
                                        Sign In
                                    </label>
                                    <input id="tab-2" type="radio" name="tab" className="sign-up"/>
                                    <label
                                        htmlFor="tab-2"
                                        className="tab"
                                        style={{marginLeft: "25px"}}
                                    >
                                        Sign Up
                                    </label>
                                    <div className="login-form">
                                        <div className="sign-in-htm">
                                            <div className="group">
                                                <label htmlFor="user" className="label">
                                                    Email
                                                </label>
                                                <input id="user" type="text" className="input"/>
                                            </div>
                                            <div className="group">
                                                <label htmlFor="pass" className="label">
                                                    Password
                                                </label>
                                                <input
                                                    id="pass"
                                                    type="password"
                                                    className="input"
                                                    datatype="password"
                                                />
                                            </div>
                                            <div className="group">
                                                <input id="check" type="checkbox" className="check"/>
                                                <label htmlFor="check">
                                                    <span className="icon"></span> Keep me Signed in
                                                </label>

                                            </div>

                                            <div className="group">
                                                <input type="submit" className="button" value="Sign In"/>
                                            </div>

                                        </div>

                                        <div className="sign-up-htm">
                                            <div className="group">
                                                <label htmlFor="user" className="label">
                                                    Email
                                                </label>
                                                <input id="user" type="text" className="input"/>
                                            </div>
                                            <div className="group">
                                                <label htmlFor="pass" className="label">
                                                    Password
                                                </label>
                                                <input
                                                    id="pass"
                                                    type="password"
                                                    className="input"
                                                    datatype="password"
                                                />
                                            </div>
                                            <div className="group">
                                                <label htmlFor="pass" className="label">
                                                    Repeat Password
                                                </label>
                                                <input
                                                    id="pass"
                                                    type="password"
                                                    className="input"
                                                    datatype="password"
                                                />
                                            </div>

                                            <div className="group">
                                                <input type="submit" className="button" value="Sign Up"/>
                                            </div>

                                            <div className="foot-lnk">
                                                <label htmlFor="tab-1">Already Member?</label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

        </div>


    );
};

export default Signin_signup;
