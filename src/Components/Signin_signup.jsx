import React, {useState}  from "react";
import axios from "axios";
import "./Signin_signup.css"

const Signin_signup = (props) => { 
    
      const [email, setEmail] = useState("");
      const [password, setPassword] = useState("");
      const [repeatpassword, setRepeatPassword] = useState("");

function sendData(e){
    e.preventDefault();

    const newUser = {

        email,
        password,
        repeatpassword
    }

    axios.post("http://localhost:5000/api/register", newUser).then(()=>{
        alert("user added")
    }).catch((err)=>{
        alert(err)
})

}

    return (

        <div className="container">
            <div className="login-wrap" >
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
                        style={{ cursor: "pointer" }}
                    >
                        Sign In
                    </label>
                    <input id="tab-2" type="radio" name="tab" className="sign-up" />
                    <label
                        htmlFor="tab-2"
                        className="tab"
                        style={{ marginLeft: "25px", cursor: "pointer" }}
                    >
                        Sign Up
                    </label>
                    <div className="login-form">
                        <div className="sign-in-htm">
                            <div className="group">
                                <label htmlFor="user" className="label">
                                    Email
                                </label>
                                <input id="user" type="text" className="input" />
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
                                <input id="check" type="checkbox" className="check"  />
                                <label htmlFor="check">
                                    <span className="icon"></span> Keep me Signed in
                                </label>

                            </div>

                            <div className="group">
                                <input type="submit" className="button" value="Sign In" />
                            </div>

                        </div>

                        <div className="sign-up-htm">
                            <form onSubmit={sendData}>


                            <div className="group">
                                <label htmlFor="user" className="label">
                                    Email
                                </label>
                                <input id="user" type="text" className="input" 
                                onChange={(e)=>{
                                    setEmail(e.target.value);
                                }}/>
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
                                
                                    onChange={(e)=>{
                                        setPassword(e.target.value);
                                    }}/>
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
                                    onChange={(e)=>{
                                        setRepeatPassword(e.target.value);
                                    }}/>
                            </div>




                            <div className="group">
                                <input type="submit" className="button" value="Sign Up" />
                            </div>

                            <div className="foot-lnk">
                                <label htmlFor="tab-1">Already Member?</label>
                            </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Signin_signup;
