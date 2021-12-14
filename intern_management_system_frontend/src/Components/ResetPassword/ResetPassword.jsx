import React from "react";
import "./ResetPassword.css"


const ResetPassword = (props) => {
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
                            <form className="formStyle">
                                <p className="resetPassword_topic">RESET PASSWORD</p>

                                <div className="mb-3">
                                    <label htmlFor="exampleInputPassword1" className="form-label">Enter New Password</label>
                                    <input type="password" className="form-control" id="exampleInputPassword5"/>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="exampleInputPassword1" className="form-label">Re-Enter Password</label>
                                    <input type="password" className="form-control" id="exampleInputPassword6"/>
                                </div>

                                <button type="submit" className="btn btn-primary reset_saveBtn">SAVE</button><br/>
                                <div className="sign_again_link"><a href="/login" className="link-primary ">Please signin again...</a></div>
                            </form>


                        </div>
                    </div>
                </div>
            </div>


        </div>


    );
};

export default ResetPassword;
