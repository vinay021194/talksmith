import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { loginUser } from "../../actions/authActions";
import classnames from "classnames";

class Login extends Component {
    constructor() {
        super();
        this.state = {
            email: "",
            password: "",
            errors: {}
        };
    }
    componentWillReceiveProps(nextProps) {
        if (nextProps.auth.isAuthenticated) {
            this.props.history.push("/carrier"); // push user to dashboard when they login
        }
        if (nextProps.errors) {
            this.setState({
                errors: nextProps.errors
            });
        }
    }

    componentDidMount() {
        // If logged in and user navigates to Login page, should redirect them to dashboard
        if (this.props.auth.isAuthenticated) {
            this.props.history.push("/carrier");
        }
    }

    onChange = e => {
        this.setState({ [e.target.id]: e.target.value });
    };

    onSubmit = e => {
        e.preventDefault();
        const userData = {
            email: this.state.email,
            password: this.state.password
        };
        console.log(userData)
        this.props.loginUser(userData); // since we handle the redirect within our component, we don't need to pass in this.props.history as a parameter
    };
    render() {
        const { errors } = this.state;
        console.log(errors)
        return (
            <div className="container-login100">
                <div className="error-pagewrap">
                    <div className="error-page-int">
                        <div className="text-center m-b-md custom-login">


                        </div>
                        <div className="content-error">

                            <div className="hpanel">
                                <div className="panel-body" >

                                    <img className="login-logo" src="img/logo/LOGO.png" alt="" />

                                    <h3 className="Header">LOG-IN</h3>

                                   
                                    <div class="mt-2 col-md-12">
                                    </div>
                                    <form noValidate onSubmit={this.onSubmit}>

                                        <div className="form-group">
                                            <label className="control-label" for="username">Email</label>
                                            <input
                                                onChange={this.onChange}
                                                value={this.state.email}
                                                error={errors.email}
                                                id="email"
                                                type="email"
                                                placeholder="example@gmail.com"
                                                className="form-control"
                                                required=""
                                            />
                                              <div className="invalid-feedback">
                                       
                                       {errors.email}
                                       {errors.emailnotfound}
                                       
                                   </div>
                                        </div>
                                     


                                        <div className="form-group">
                                            <label className="control-label" for="password">Password</label>
                                            <input
                                                onChange={this.onChange}
                                                value={this.state.password}
                                                error={errors.password}
                                                id="password"
                                                type="password"
                                                placeholder="******"
                                                className="form-control"
                                                required=""
                                            />
                                        <div className="invalid-feedback">
                                        {errors.password}
                                        {errors.passwordincorrect}
                                    
                                        
                                    </div>
                                        </div>
                                      
                                        <button className="btn btn-success btn-block loginbtn">Log In</button>
                                        <p className="help"><a href="password-recovery.html">Forgot Password?</a></p>
                                        <p className="registered">Don't have an account? Create one<Link to="/register">here</Link></p>
                                

                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

Login.propTypes = {
    loginUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
    auth: state.auth,
    errors: state.errors
});
export default connect(
    mapStateToProps,
    { loginUser }
)(Login);



