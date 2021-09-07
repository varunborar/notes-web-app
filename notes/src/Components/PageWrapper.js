import React, { Component } from 'react';

import { Link } from 'react-router-dom';

class PageWrapper extends Component {

    render() {
        return (
            <div>
                <nav className="navbar navbar-light navbar-expand-md navigation-clean-button">
                    <div className="container-fluid">
                        <Link className="navbar-brand text-center" to="/">
                            <img className="logo" src="../assets/img/icon-filled.png" alt="logo" /> Notes
                        </Link>
                        <button data-bs-toggle="collapse" className="navbar-toggler" data-bs-target="#navcol-1"><span className="visually-hidden">Toggle navigation</span><span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navcol-1">
                            <ul className="navbar-nav me-auto">
                                <li className="nav-item"><Link className="nav-link active" to="/">Home</Link></li>
                                <li className="nav-item"><Link className="nav-link" to="/about">About</Link>
                                </li>
                                <li className="nav-item"><Link className="nav-link" to="/contribute">Contribute</Link>
                                    <hr className="d-md-none d-lg-none" />
                                </li>
                            </ul>
                            <span className="navbar-text actions">
                                <Link data-bss-hover-animate="jello" className="login btn btn-light btn-outline-primary" to="/login" role="button">Log In</Link>
                                <Link className="btn btn-light action-button" role="button" data-bss-hover-animate="jello" to="/signup">Sign Up</Link>
                            </span>

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

export default PageWrapper;