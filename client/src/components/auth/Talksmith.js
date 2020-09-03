import React, { Component } from "react";
import classnames from "classnames";


class Talksmith extends Component {
    constructor() {
        super();

    }

    render() {
        return (
            <div className="container-login100">

                <div className="error-pagewrap">
                    <div className="error-page-int">
                        <div className="text-center m-b-md custom-login">

                        </div>
                        <div className="content-error">
                            <div className="hpanel">
                                <div className="panel-body">
                                    <img class="login-logo" src="img/logo/LOGO.png" alt="" />
                                    <form action="#" id="loginForm">
                                        <div className="form-group">
                                            <label className="control-label" for="username">Username</label>
                                            <input type="text" placeholder="example@gmail.com" title="Please enter you username" required="" value="" name="username" id="username" className="form-control" />
                                            <span className="help-block small">Your unique username to app</span>

                                        </div>
                                        <div className="form-group">
                                            <label className="control-label" for="password">Password</label>
                                            <input type="password" title="Please enter your password" placeholder="******" required="" value="" name="password" id="password" className="form-control" />
                                            <span className="help-block small">Yur strong password</span>
                                        </div>
                                        <div className="checkbox login-checkbox">
                                            <label>
                                                <input type="checkbox" className="i-checks" /> Remember me </label>
                                            <p className="help-block small">(if this is a private computer)</p>
                                        </div>
                                        <button className="btn btn-success btn-block loginbtn">Login</button>
                                        {/* <a className="btn btn-default btn-block" href="#">Register</a> */}
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div className="text-center login-footer">
                            <p>Copyright © 2018. All rights reserved. Template by <a href="https://colorlib.com/wp/templates/">Colorlib</a></p>
                        </div>
                    </div>
                </div>
            </div >
        );
    }
}



export default Talksmith;