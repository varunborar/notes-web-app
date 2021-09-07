import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { loginUser } from "../../actions/authActions";


class Login extends Component {

    constructor() {
        super();
        this.state = {
            "email": "",
            "password": "",
            "errors": ""
        }
    }

    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    onSubmit = async (e) => {
        e.preventDefault();
        
        const userData = {
            "email": this.state.email,
            "password": this.state.password
        }

        this.props.loginUser(userData);
        this.forceUpdate();
    }

    componentDidMount() {
        if (this.props.auth.isAuthenticated) {
            this.props.history.push("/notes");
        }
    }

    componentDidUpdate() {
        if (this.props.auth.isAuthenticated) {
            this.props.history.push("/notes");
        }
    }

    render() {
        return (
            <div>
                <section className="login-clean">
                    <form method="post" onSubmit={this.onSubmit}>
                        <h2 className="visually-hidden">Login Form</h2>
                        <div className="illustration">
                            {/* <i className="icon ion-ios-navigate"></i> */}
                            <div className="logo"></div>
                        </div>
                        <div className="error-box">{this.props.errors["error"]}</div>
                        <div className="mb-3"><input onChange={this.onChange} className="form-control" type="email" name="email" placeholder="Email" /></div>
                        <div className="mb-3"><input onChange={this.onChange} className="form-control" type="password" name="password" placeholder="Password" /></div>
                        <div className="mb-3"><button className="btn btn-primary d-block w-100" type="submit">Log In</button>
                        </div><Link className="new" to="/signup">Here for the first time? Create a new account</Link>
                    </form>
                </section>
            </div>
        )
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