import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { registerUser } from '../../actions/authActions';


class SignUp extends Component {

    constructor() {
        super();
        this.state = {
            "name": "",
            "email": "",
            "password": "",
            "error": {}
        };
    }

    onChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    onSubmit = async (e) => {
        e.preventDefault();

        const newUser = {
            "name": this.state.name,
            "email": this.state.email,
            "password": this.state.password
        }
        this.props.registerUser(newUser, this.props.history);
    }

    componentDidUpdate(){

    }

    componentDidMount() {
        if (this.props.auth.isAuthenticated) {
            this.props.history.push("/notes");
        }
    }


    render() {
        return (
            <div>
                <section className="register-photo">
                    <div className="form-container">
                        <div className="image-holder"></div>
                        <form method="post" onSubmit={this.onSubmit}>
                            <h2 className="text-center"><strong>Create</strong> an account.</h2>
                            <div className="mb-3"><input onChange={this.onChange} className="form-control" type="text" name="name" placeholder="Full Name" required="Required" /></div>
                            <div className="mb-3"><input onChange={this.onChange} className="form-control" type="email" name="email" placeholder="Email" required="Required" /></div>
                            <div className="mb-3"><input onChange={this.onChange} className="form-control" type="password" name="password" placeholder="Password" required="Required" /></div>
                            <div className="mb-3"><button className="btn btn-primary d-block w-100" type="submit">Sign Up</button></div>
                            <Link className="already" to="/login">You already have an account? Login here.</Link>
                        </form>
                    </div>
                </section>
            </div>
        )
    }
}

SignUp.propTypes = {
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
)(withRouter(SignUp));