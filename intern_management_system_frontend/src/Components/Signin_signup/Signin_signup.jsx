import React from "react";
import "./Signin_signup.css"


const Signin_signup = (props) => {
    return (

        <div className="loginContainer">
            <div className="row rowStyle">
                <div className="col">
                    <img src="https://preview.colorlib.com/theme/crafted/img/xvideo-bg-shape.png.pagespeed.ic.zKW0PXFzxa.webp" className="login-image1"/>
                    <img src="https://preview.colorlib.com/theme/edumark/img/banner/xedu_ilastration.png.pagespeed.ic.tbBI6STZK1.webp" className="login-image2" />
                </div>
                <div className="col">

            <div className="card loginCard">
                <div className="card-body">
                    <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
                        <li className="nav-item" role="presentation">
                            <button className="nav-link signIn-Up_font" id="pills-home-tab" data-bs-toggle="pill"
                                    data-bs-target="#pills-signIn" type="button" role="tab" aria-controls="pills-signIn"
                                    aria-selected="true">SIGNIN
                            </button>
                        </li>
                        <li className="nav-item" role="presentation">
                            <button className="nav-link signIn-Up_font" id="pills-profile-tab" data-bs-toggle="pill"
                                    data-bs-target="#pills-signUp " type="button" role="tab" aria-controls="pills-signUp"
                                    aria-selected="false">SIGNUP
                            </button>
                        </li>



                    </ul>
                    <div className="tab-content" id="pills-tabContent">
                        <div className="tab-pane fade show active" id="pills-signIn" role="tabpanel"
                             aria-labelledby="pills-signIn-tab">
                            <form className="formStyle">
                                <div className="mb-3">
                                    <label htmlFor="exampleInputEmail1" className="form-label">Email </label>
                                    <input type="email" className="form-control" id="exampleInputEmail1"
                                           aria-describedby="emailHelp"/>

                                </div>
                                <div className="mb-3">
                                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                                    <input type="password" className="form-control" id="exampleInputPassword1"/>
                                </div>

                                <button type="submit" className="btn btn-primary login-submitBtn ">SIGNIN</button>

                                <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">

                                <li className="nav-item" role="presentation">
                                    <button className="nav-link forgotBtn" id="pills-contact-tab" data-bs-toggle="pill"
                                            data-bs-target="#pills-contact" type="button" role="tab"
                                            aria-controls="pills-contact" aria-selected="false">Forgotten your password?
                                    </button>
                                </li>
                                </ul>


                            </form>
                        </div>
                        <div className="tab-pane fade" id="pills-signUp" role="tabpanel"
                             aria-labelledby="pills-signUp-tab">
                            <form className="formStyle">
                                <div className="mb-3">
                                    <label htmlFor="exampleInputEmail1" className="form-label">Email </label>
                                    <input type="email" className="form-control" id="exampleInputEmail1"
                                           aria-describedby="emailHelp"/>

                                </div>
                                <div className="mb-3">
                                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                                    <input type="password" className="form-control" id="exampleInputPassword1"/>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="exampleInputPassword1" className="form-label">Repeat Password</label>
                                    <input type="password" className="form-control" id="exampleInputPassword1"/>
                                </div>
                                <div className="mb-3 form-check">
                                    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                                    <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                                </div>
                                <button type="submit" className="btn btn-primary login-submitBtn">SIGNUP</button>
                            </form>
                        </div>

                        <div className="tab-pane fade" id="pills-contact" role="tabpanel"
                             aria-labelledby="pills-contact-tab">

                            <form className="formStyle">
                                <div className="mb-3">
                                    <label htmlFor="exampleInputEmail1" className="form-label">Email </label>
                                    <input type="email" className="form-control" id="exampleInputEmail1"
                                           aria-describedby="emailHelp"/>

                                </div>


                                <button type="submit" data-bs-target="#pills-signIn" className="btn btn-primary login-submitBtn">SUBMIT</button>
                                <p className="password_change_pTage"> After entering your email here, you will receive a rest link to set the password via your email. There you can reset the password. </p>


                            </form>
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
