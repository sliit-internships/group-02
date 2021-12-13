import React from "react";
import "./InternshipRegistrationPage.css"
import InternshipRegistration_1 from "./InternshipRegistration_1";
import InternshipRegistration_2 from "./InternshipRegistration_2";
import InternshipRegistration_3 from "./InternshipRegistration_3";

const InternshipRegistrationPage = (props) => {
    return (

        <div>
            <h1 className="form1h1">INTERNSHIP REGISTRATION FORM</h1>
            <img className="ir1_image" src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iNzQzcHgiIGhlaWdodD0iNTg1cHgiIHZpZXdCb3g9IjAgMCA3NDMgNTg1IiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPgogICAgPCEtLSBHZW5lcmF0b3I6IHNrZXRjaHRvb2wgNTIuNiAoNjc0OTEpIC0gaHR0cDovL3d3dy5ib2hlbWlhbmNvZGluZy5jb20vc2tldGNoIC0tPgogICAgPHRpdGxlPjI1MEE0QUUyLTM3MzUtNDc3Qi04QkRFLTlFNjIxNzcxOUFDQzwvdGl0bGU+CiAgICA8ZGVzYz5DcmVhdGVkIHdpdGggc2tldGNodG9vbC48L2Rlc2M+CiAgICA8ZGVmcz4KICAgICAgICA8bGluZWFyR3JhZGllbnQgeDE9IjQyLjk0MTA0OTglIiB5MT0iMzQuODc1Mjk2MiUiIHgyPSI5NC4xODg3MzE1JSIgeTI9Ijg2LjY5Mzc4NTIlIiBpZD0ibGluZWFyR3JhZGllbnQtMSI+CiAgICAgICAgICAgIDxzdG9wIHN0b3AtY29sb3I9IiM5RDVDRkYiIG9mZnNldD0iMCUiPjwvc3RvcD4KICAgICAgICAgICAgPHN0b3Agc3RvcC1jb2xvcj0iIzZEMkZDQyIgb2Zmc2V0PSIxMDAlIj48L3N0b3A+CiAgICAgICAgPC9saW5lYXJHcmFkaWVudD4KICAgICAgICA8bGluZWFyR3JhZGllbnQgeDE9IjUwJSIgeTE9IjExNC4yMDUxMzklIiB4Mj0iNDMuMjc2MDEyOSUiIHkyPSItMjkuMDQ3ODQxOSUiIGlkPSJsaW5lYXJHcmFkaWVudC0yIj4KICAgICAgICAgICAgPHN0b3Agc3RvcC1jb2xvcj0iIzZEMkZDQyIgb2Zmc2V0PSIwJSI+PC9zdG9wPgogICAgICAgICAgICA8c3RvcCBzdG9wLWNvbG9yPSIjOUQ1Q0ZGIiBvZmZzZXQ9IjEwMCUiPjwvc3RvcD4KICAgICAgICA8L2xpbmVhckdyYWRpZW50PgogICAgPC9kZWZzPgogICAgPGcgaWQ9IkRlc2lnbnMiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxnIGlkPSJDaGVja291dC1UZW1wbGF0ZSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTExNzcuMDAwMDAwLCAwLjAwMDAwMCkiPgogICAgICAgICAgICA8ZyBpZD0iUHVycGxlLVNoYXBlX1RvcC1SaWdodCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTE3Ny4wMDAwMDAsIC00ODMuMDAwMDAwKSI+CiAgICAgICAgICAgICAgICA8cGF0aCBkPSJNMCwwIEwwLDQ4NS43MjgxNTMgQzAsNTYxLjIzNTk5OCAzOS44MjE2NjA3LDYzMS4xNDk1NDQgMTA0Ljc3NDc4Niw2NjkuNjgxODU5IEw4NDcsMTExMCBMODQ3LDAgTDAsMCBaIiBpZD0iRmlsbC0xIiBmaWxsPSJ1cmwoI2xpbmVhckdyYWRpZW50LTEpIj48L3BhdGg+CiAgICAgICAgICAgICAgICA8cGF0aCBkPSJNNzc5LjA4MzE1OSw2NDAuMDU0MDk5IEwwLDExMDIuMTk5NTkgTDAsMTE2NCBMNzc5LjA4MzE1OSw3MDEuODU0NTEzIEM4NTcuMTQ0NzQsNjU1LjU0OTA1OCA5MDUsNTcxLjUzNjM3OSA5MDUsNDgwLjgwMDQxNCBMOTA1LDQxOSBDOTA1LDUwOS43MzU5NjUgODU3LjE0NDc0LDU5My43NDg2NDQgNzc5LjA4MzE1OSw2NDAuMDU0MDk5IiBpZD0iRmlsbC0xLUNvcHktNCIgZmlsbD0idXJsKCNsaW5lYXJHcmFkaWVudC0yKSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNDUyLjUwMDAwMCwgNzkxLjUwMDAwMCkgc2NhbGUoLTEsIDEpIHRyYW5zbGF0ZSgtNDUyLjUwMDAwMCwgLTc5MS41MDAwMDApICI+PC9wYXRoPgogICAgICAgICAgICA8L2c+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4="/>
            <div className=" row ir_rowStyle">
                <div className="col ir_col">
                    <InternshipRegistration_1/>
                </div>
                <div className="col">
                    <InternshipRegistration_2/>
                    <br/>
                    <InternshipRegistration_3/>
                </div>
            </div>



        </div>
    );
};

export default InternshipRegistrationPage;
