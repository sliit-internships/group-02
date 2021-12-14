import React from "react";
import "./StudentRegistrationMoreDetails.css"


const StudentRegistrationMoreDetails = (props) => {
    return (
        <div>


            <div className="purpleBtn">
                <button className="btn btn-outline px-4" data-bs-toggle="modal"
                        data-bs-target="#exampleModal">More
                </button>

            </div>


            <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel"
                 aria-hidden="true">
                <div className="modal-dialog modal-dialog modal-xl">
                    <div className="modal-content modal-dialog modal-xl">

                        <div className="modal-body">
                            <table className="table table-striped">
                                <thead>
                                <tr>
                                    <th scope="col"></th>
                                    <th scope="col">ID</th>
                                    <th scope="col">Student Name</th>
                                    <th scope="col">Current Year</th>
                                    <th scope="col">planning to complete second year</th>
                                    <th scope="col">Intake</th>
                                    <th scope="col">Specialization</th>
                                    <th scope="col">Mobile Number</th>
                                    <th scope="col">Home Number</th>
                                    <th scope="col">Intern Started Date</th>
                                    <th scope="col">Supervisor E-Mail</th>
                                    <th scope="col">Student E-Mail</th>

                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <th scope="row">1</th>
                                    <td>Mark</td>
                                    <td>Otto</td>
                                    <td>@mdo</td>
                                    <td>Mark</td>
                                    <td>Otto</td>
                                    <td>@mdo</td>
                                    <td>Mark</td>
                                    <td>Otto</td>
                                    <td>@mdo</td>
                                    <td>Mark</td>
                                    <td>Otto</td>

                                </tr>
                                <tr>
                                    <th scope="row">2</th>
                                    <td>Mark</td>
                                    <td>Otto</td>
                                    <td>@mdo</td>
                                    <td>Mark</td>
                                    <td>Otto</td>
                                    <td>@mdo</td>
                                    <td>Mark</td>
                                    <td>Otto</td>
                                    <td>@mdo</td>
                                    <td>Mark</td>
                                    <td>Otto</td>
                                </tr>

                                </tbody>
                            </table>
                        </div>

                    </div>
                </div>
            </div>


        </div>


    );
};

export default StudentRegistrationMoreDetails;
