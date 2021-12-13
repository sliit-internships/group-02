import React from "react";
import "./StudentRegistrationDetails.css"



const StudentRegistrationDetails = (props) => {
    return (
        <div >
            <img className="srd_image" src="https://preview.colorlib.com/theme/edumark/img/banner/bradcam.png.webp"/>
            <h1 className="srd_h1">INTERNSHIP REGISTRATION DETAILS</h1>

            <p className="srd_p">STUDENT DETAILS</p>

            <table className="table srd_tableStyle">


                <thead>


                <tr className="srt_tr">

                    <th scope="col"> ID</th>
                    <th scope="col"> Name</th>
                    <th scope="col">Email</th>
                    <th scope="col">Specialization</th>
                    <th scope="col">Type</th>
                    <th scope="col">Start Date</th>
                    <th scope="col">End Date</th>
                </tr>
                </thead>
                <tbody>
                <tr>

                    <td>IT12345678</td>
                    <td>Perera P.K.L</td>
                    <td>it12345678@my.sliit.lk</td>
                    <td>SE</td>
                    <td>Full stack software development</td>
                    <td>2020/01/05</td>
                    <td>2020/06/05</td>
                </tr>

                </tbody>
            </table>

            <p className="srd_p">SUPERVISOR DETAILS</p>

            <table className="table srd_tableStyle">
                <thead>


                <tr className="srt_tr">

                    <th scope="col">Name</th>
                    <th scope="col">Company</th>
                    <th scope="col">Email</th>
                    <th scope="col">Title</th>
                    <th scope="col">Company Address</th>

                </tr>
                </thead>
                <tbody>
                <tr>

                    <td>Bandara A.K.I</td>
                    <td>Virtusa Pvt. Ltd.</td>
                    <td>bandara@gmail.com</td>
                    <td>Software Engineer</td>
                    <td>752 Dr Danister De Silva Mawatha, Colombo</td>

                </tr>

                </tbody>
            </table>

            <table className="table srd_tableStyle">
                <thead>

                <tr className="srt_tr">

                    <th scope="col" className="srd_tableText">Internship Manager Status</th>


                </tr>
                </thead>
                <tbody>
                <tr>

                    <td className="srd_tableText">Pending</td>


                </tr>

                </tbody>
            </table>
        </div>


    );
};

export default StudentRegistrationDetails;
