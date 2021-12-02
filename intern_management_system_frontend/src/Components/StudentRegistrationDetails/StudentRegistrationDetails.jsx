import React from "react";
import "./StudentRegistrationDetails.css"


const StudentRegistrationDetails = (props) => {
    return (
        <div>
            <table className="table table-striped">
                <thead>
                <tr>
                    <th scope="col"></th>
                    <th scope="col">ID</th>
                    <th scope="col">Student Name</th>
                    <th scope="col">Current Year</th>
                    <th scope="col">planning to complete second year(Year)</th>
                    <th scope="col">planning to complete second year(Period)</th>
                    <th scope="col">Specialization</th>
                    <th scope="col">Mobile Number</th>
                    <th scope="col">Home Number</th>
                    <th scope="col">Intern Started Date </th>
                    <th scope="col">Supervisor E-Mail</th>
                    <th scope="col">Student E-Mail</th>
                    <th scope="col">Status</th>
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


    );
};

export default StudentRegistrationDetails;
