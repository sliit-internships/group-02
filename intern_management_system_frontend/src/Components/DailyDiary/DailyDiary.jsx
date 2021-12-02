import React from "react";
import "./DailyDiary.css"


const DailyDiary = (props) => {
    return (
        <div >
            <div className="container">
                <div className="row">
                    <div className="col topicCol">
                        <h1 className="h1tag">INTERN’S DAILY DIARY</h1><br/>
                        <h4 className="h4tag">Please be sure to upload the completed form to the folder provided once a week and until the end of the internship period of six months.</h4>
                    </div>
                    <div className="col imageCol">
                        <img src="https://web-revenue.ru/wp-content/uploads/2020/02/elementy-veb-sayta.jpg" className="diaryImage"/>
                    </div>

                </div>
            </div>



            <div className="container accordion accordion-flush accordionStyle" id="accordionFlushExample">
                <div className="accordion-item itemStyle">
                    <h2 className="accordion-header" id="flush-headingOne">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                data-bs-target="#flush-collapseOne" aria-expanded="false"
                                aria-controls="flush-collapseOne">
                            Month 1
                        </button>
                    </h2>
                    <div id="flush-collapseOne" className="container accordion-collapse collapse"
                         aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">


                        <table className=" table">
                            <tr>
                                <th scope="row">Week 1</th>
                                <td>Upload the diary daily for the first week of the first month</td>

                                <td>< input type="file"/></td>
                            </tr>
                            <tr>
                                <th scope="row">Week 2</th>
                                <td>Upload the diary daily for the second week of the first month</td>

                                <td>< input type="file"/></td>
                            </tr>
                            <tr>
                                <th scope="row">Week 3</th>
                                <td>Upload the diary daily for the third week of the first month</td>

                                <td>< input type="file"/></td>
                            </tr>
                            <tr>
                                <th scope="row">Week 4</th>
                                <td>Upload the diary daily for the forth week of the first month</td>

                                <td>< input type="file"/></td>
                            </tr>

                        </table>

                    </div>
                </div>

                <div className="accordion-item itemStyle">
                    <h2 className="accordion-header" id="headingTwo">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            Month 2
                        </button>
                    </h2>
                    <div id="collapseTwo" className="container accordion-collapse collapse" aria-labelledby="headingTwo"
                         data-bs-parent="#accordionExample">
                        <table className=" table">
                            <tr>
                                <th scope="row">Week 1</th>
                                <td>Upload the diary daily for the first week of the second month</td>

                                <td>< input type="file"/></td>
                            </tr>
                            <tr>
                                <th scope="row">Week 2</th>
                                <td>Upload the diary daily for the second week of the second month</td>

                                <td>< input type="file"/></td>
                            </tr>
                            <tr>
                                <th scope="row">Week 3</th>
                                <td>Upload the diary daily for the third week of the second month</td>

                                <td>< input type="file"/></td>
                            </tr>
                            <tr>
                                <th scope="row">Week 4</th>
                                <td>Upload the diary daily for the forth week of the second month</td>

                                <td>< input type="file"/></td>
                            </tr>

                        </table>
                    </div>
                </div>

                <div className="accordion-item itemStyle">
                    <h2 className="accordion-header" id="heading3">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                data-bs-target="#collapse3" aria-expanded="false" aria-controls="collapse3">
                            Month 3
                        </button>
                    </h2>
                    <div id="collapse3" className="container accordion-collapse collapse" aria-labelledby="heading3"
                         data-bs-parent="#accordionExample">
                        <table className=" table">
                            <tr>
                                <th scope="row">Week 1</th>
                                <td>Upload the diary daily for the first week of the third month</td>

                                <td>< input type="file"/></td>
                            </tr>
                            <tr>
                                <th scope="row">Week 2</th>
                                <td>Upload the diary daily for the second week of the third month</td>

                                <td>< input type="file"/></td>
                            </tr>
                            <tr>
                                <th scope="row">Week 3</th>
                                <td>Upload the diary daily for the third week of the third month</td>

                                <td>< input type="file"/></td>
                            </tr>
                            <tr>
                                <th scope="row">Week 4</th>
                                <td>Upload the diary daily for the forth week of the third month</td>

                                <td>< input type="file"/></td>
                            </tr>

                        </table>
                    </div>
                </div>

                <div className="accordion-item itemStyle">
                    <h2 className="accordion-header" id="heading4">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                data-bs-target="#collapse4" aria-expanded="false" aria-controls="collapse4">
                            Month 4
                        </button>
                    </h2>
                    <div id="collapse4" className="container accordion-collapse collapse" aria-labelledby="heading4"
                         data-bs-parent="#accordionExample">
                        <table className=" table">
                            <tr>
                                <th scope="row">Week 1</th>
                                <td>Upload the diary daily for the first week of the forth month</td>

                                <td>< input type="file"/></td>
                            </tr>
                            <tr>
                                <th scope="row">Week 2</th>
                                <td>Upload the diary daily for the second week of the forth month</td>

                                <td>< input type="file"/></td>
                            </tr>
                            <tr>
                                <th scope="row">Week 3</th>
                                <td>Upload the diary daily for the third week of the forth month</td>

                                <td>< input type="file"/></td>
                            </tr>
                            <tr>
                                <th scope="row">Week 4</th>
                                <td>Upload the diary daily for the forth week of the forth month</td>

                                <td>< input type="file"/></td>
                            </tr>

                        </table>
                    </div>
                </div>

                <div className="accordion-item itemStyle">
                    <h2 className="accordion-header" id="heading5">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                data-bs-target="#collapse5" aria-expanded="false" aria-controls="collapse5">
                            Month 5
                        </button>
                    </h2>
                    <div id="collapse5" className="container accordion-collapse collapse" aria-labelledby="heading5"
                         data-bs-parent="#accordionExample">
                        <table className=" table">
                            <tr>
                                <th scope="row">Week 1</th>
                                <td>Upload the diary daily for the first week of the fifth month</td>

                                <td>< input type="file"/></td>
                            </tr>
                            <tr>
                                <th scope="row">Week 2</th>
                                <td>Upload the diary daily for the second week of the fifth month</td>

                                <td>< input type="file"/></td>
                            </tr>
                            <tr>
                                <th scope="row">Week 3</th>
                                <td>Upload the diary daily for the third week of the fifth month</td>

                                <td>< input type="file"/></td>
                            </tr>
                            <tr>
                                <th scope="row">Week 4</th>
                                <td>Upload the diary daily for the forth week of the fifth month</td>

                                <td>< input type="file"/></td>
                            </tr>

                        </table>
                    </div>
                </div>

                <div className="accordion-item itemStyle">
                    <h2 className="accordion-header" id="heading6">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                data-bs-target="#collapse6" aria-expanded="false" aria-controls="collapse6">
                            Month 6
                        </button>
                    </h2>
                    <div id="collapse6" className="container accordion-collapse collapse" aria-labelledby="heading6"
                         data-bs-parent="#accordionExample">
                        <table className=" table">
                            <tr>
                                <th scope="row">Week 1</th>
                                <td>Upload the diary daily for the first week of the sixth month</td>

                                <td>< input type="file"/></td>
                            </tr>
                            <tr>
                                <th scope="row">Week 2</th>
                                <td>Upload the diary daily for the second week of the sixth month</td>

                                <td>< input type="file"/></td>
                            </tr>
                            <tr>
                                <th scope="row">Week 3</th>
                                <td>Upload the diary daily for the third week of the sixth month</td>

                                <td>< input type="file"/></td>
                            </tr>
                            <tr>
                                <th scope="row">Week 4</th>
                                <td>Upload the diary daily for the forth week of the sixth month</td>

                                <td>< input type="file"/></td>
                            </tr>

                        </table>
                    </div>
                </div>





            </div>
        </div>

    );
};

export default DailyDiary;
