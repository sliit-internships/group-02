import React from "react";
import "./StudentProfile.css"


const StudentProfile = (props) => {
    return (
        <div className="background">

            <div class="container rounded bg-white mt-5 mb-5">
                <div class="row profileRowStyle">
                    <div class="col-md-3 border-right">
                        <div class="d-flex flex-column align-items-center text-center p-3 py-5"><img
                            class="rounded-circle mt-5" width="150px"
                            src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg"/>

                            <span
                                class="text-black-50">it12345678@my.sliit.lk</span><span> </span></div>
                    </div>
                    <div class="col-md-5 border-right">
                        <div class="p-3 py-5">
                            <div class="d-flex justify-content-between align-items-center mb-3">
                                <h4 class="text-right">Student Profile </h4>
                            </div>
                            <div class="row mt-2">
                                <h6>Name </h6>
                                <p>Perera A.X.Z</p>
                                <h6>SLIIT Identification Number </h6>
                                <p>IT12345678</p>
                                <h6>Specialization</h6>
                                <p>B.Sc (Hons) Information Technology</p>
                                <h6>Registered Date For Internship</h6>
                                <p>06/06/2020</p>


                            </div>

                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="p-3 py-5">

                            <div className="d-flex justify-content-between align-items-center mb-3">
                                <h4 className="text-right">Student Profile </h4>
                            </div>
                            <div className="row mt-2">
                                <h6>SLIIT Identification Number </h6>
                                <p>IT12345678</p>
                                <h6>Specialization</h6>
                                <p>B.Sc (Hons) Information Technology</p>
                                <h6>Registered Date For Internship</h6>
                                <p>06/06/2020</p>


                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>


    )
        ;
};

export default StudentProfile;
