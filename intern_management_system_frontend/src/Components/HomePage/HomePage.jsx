import React from "react";
import "./HomePage.css"
import home_png1 from "../../Asserts/—Pngtree—friends gathering social scene vector_5768981.png"


const HomePage = (props) => {
    return (
        <div className="row home_row">


            <div className="card home_card">
                <div className="card-body">

                    <div className="row">
                        <div className="col">
                            <img className="home_img_1" src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQuDHNr2ZwQ4goVRQ26csnS-W1GHz7ko6nsdanpLdj0dS42FVcx"/>

                            <img className="sliit_logo" src="https://static.sliit.lk/wp-content/uploads/2017/12/sliit-web-logo.png"/>
                            <h1 className="home_h1_2">INTERNSHIP MANAGEMENT PORTAL</h1>
                            <img className="home_svg2" src="https://www.ykuan.com.tw/images/shp1.png"/>



                        </div>
                        <div className="col">
                            <img className="home_nav_image" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKwzQZEXqKHj_vnEyse8JFW5CZBK-5FurIKbrglg3t3voOxpMP"/>
                            <ul className="nav justify-content-end home_nav_style">
                                <li className="nav-item">
                                    <a className="nav-link home_nav_link" aria-current="page" href="/login">SIGNIN / SIGNUP</a>
                                </li></ul>
                            <img className="home_png2"src="https://preview.colorlib.com/theme/sierra/img/3d-slider-shap.png.webp"/>
                            <img className="home_png3" src={home_png1}/>

                        </div>


                    </div>
                </div>
            </div>


        </div>
    );
};

export default HomePage;
