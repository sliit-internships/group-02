import React from "react";

const StickyNavBar = (props) => {
    return (

        <div >
            <nav className="navbar navbar-light bg-light">
                <a className="navbar-brand">Navbar</a>
                <form className="form-inline">
                    <div className="input-group">
                        <div className="input-group-prepend mr-sm-2">
                            <span className="input-group-text" id="basic-addon1">@</span>

                        <input type="text" className="form-control navInput" placeholder="email" aria-label="Username"
                               aria-describedby="basic-addon1"/>
                        </div>
                    </div>

                    <div className="input-group">
                        <div className="input-group-prepend mr-sm-2">
                            <span className="input-group-text" id="basic-addon1">@</span>

                        <input type="text" className="form-control navInput" placeholder="password" aria-label="Username"
                               aria-describedby="basic-addon1"/>
                        </div>
                    </div>
                </form>
            </nav>



        </div>
    );
};

export default StickyNavBar;
