import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { registerUser } from "../../actions/authActions";
import classnames from "classnames";


class Register extends Component {
    constructor() {
        super();
        this.state = {
            username: "",
            password: "",
            password2: "",
            email: "",
            errors: {}
        };
    }
    componentWillReceiveProps(nextProps) {
        if (nextProps.errors) {
            this.setState({
                errors: nextProps.errors
            });
        }
    }

    componentDidMount() {
        // If logged in and user navigates to Register page, should redirect them to dashboard
        if (this.props.auth.isAuthenticated) {
            this.props.history.push("/carrier");
        }
    }

    onChange = e => {
        this.setState({ [e.target.id]: e.target.value });
    };
    onSubmit = e => {
        e.preventDefault();
        const newUser = {
            username: this.state.username,
            password: this.state.password,
            password2: this.state.password2,
            email: this.state.email
        };
        // console.log(newUser);
        this.props.registerUser(newUser, this.props.history);
    };
    render() {
        const { errors } = this.state;
        return (
            <div className="container-login100">
                <div className="error-pagewrap">
                    <div className="error-page-int">
                        <div className="text-center custom-login"></div>
                        <div className="content-error">
                            <div className="hpanel">
                                <div className="panel-body">
                                    <img className="login-logo" src="img/logo/LOGO.png" alt="" />


                                    <h3 className="Header">Sign-in</h3>

                                    <form onSubmit={this.onSubmit}>
                                        <div className="row">
                                            <div className="form-group col-lg-10">
                                                <label>Username</label>

                                                <input
                                                    className="form-control"
                                                    onChange={this.onChange}
                                                    value={this.state.username}
                                                    error={errors.username}
                                                    id="username"
                                                    type="username"
                                                />
                                            </div>
                                            <div className="form-group col-lg-10">
                                                <label>Email</label>

                                                <input
                                                    className="form-control"
                                                    onChange={this.onChange}
                                                    value={this.state.email}
                                                    error={errors.email}
                                                    id="email"
                                                    type="email"
                                                />
                                            </div>
                                            <div className="form-group col-lg-10">
                                                <label>Password</label>
                                                <input
                                                    className="form-control"
                                                    onChange={this.onChange}
                                                    value={this.state.password}
                                                    error={errors.password}
                                                    id="password"
                                                    type="password"

                                                />
                                            </div>

                                            <div className="form-group col-lg-10">
                                                <label>Confirm Password</label>
                                                <input
                                                    className="form-control"
                                                    onChange={this.onChange}
                                                    value={this.state.password2}
                                                    error={errors.password2}
                                                    id="password2"
                                                    type="password"

                                                />
                                            </div>

                                        </div>
                                        <button className="btn btn-success btn-block register">Register</button>
                                        <p className="registered">Already have an account Sign in <Link to="/login">here</Link></p>

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


Register.propTypes = {
    registerUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
    auth: state.auth,
    errors: state.errors
});
export default connect(
    mapStateToProps,
    { registerUser }
)(withRouter(Register));