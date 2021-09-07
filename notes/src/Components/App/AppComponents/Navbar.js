import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import store from '../../../store';
import { logoutUser } from '../../../actions/authActions';
import PropTypes from "prop-types";
import { connect } from "react-redux";

class Navbar extends Component {

    logOut = ()=>{
        store.dispatch(logoutUser());
    }

    render() {
        return (
            <div>
                <nav className="navbar navbar-light navbar-expand-md navigation-clean-button">
                    <div className="container-fluid">
                        <Link className="navbar-brand text-center" to="/">
                            <img className="logo" src="assets/img/icon-filled.png" alt="logo" /> Notes
                        </Link>
                        <button data-bs-toggle="collapse" className="navbar-toggler" data-bs-target="#navcol-1">
                            <span className="visually-hidden">Toggle navigation</span>
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse justify-content-end" id="navcol-1">
                            <hr className="d-md-none d-lg-none"/>
                            <ul className="navbar-nav">
                                <li className="nav-item"><Link className="nav-link" to="/" >{this.props.auth.user.name}</Link></li>
                                <li className="nav-item"><Link onClick={this.logOut} className="nav-link" to="/">Log Out</Link></li>
                            </ul>
                        </div>
                    </div>
                </nav>
                <div className="theme-switch">
                    <div id="theme-icon" className="fas fa-moon-o" data-theme="light"></div>
                </div>
                {this.props.children}
            </div>
        )
    }
}

Navbar.propTypes = {
    auth: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    auth: state.auth
});

export default connect(mapStateToProps)(Navbar);