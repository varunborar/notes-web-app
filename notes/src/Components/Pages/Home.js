import React, { Component } from 'react';

class Home extends Component {

    render() {
        return (
            <div>
                <section id="home" className="features-boxed">
                    <div className="container">
                        <div className="intro">
                            <h2 className="text-center">Features </h2>
                            <p className="text-center">A fully functional web-application created using react.js</p>
                        </div>
                        <div className="row justify-content-center features">
                            <div className="col-sm-6 col-md-5 col-lg-4 item">
                                <div className="box"><i className="fa fa-clock-o icon"></i>
                                    <h3 className="name">Always available</h3>
                                    <p className="description">Deployed on cloud.</p>
                                </div>
                            </div>
                            <div className="col-sm-6 col-md-5 col-lg-4 item">
                                <div className="box"><i className="fa fa-leaf icon"></i>
                                    <h3 className="name">Responsive</h3>
                                    <p className="description">Use on any device.</p>
                                </div>
                            </div>
                            <div className="col-sm-6 col-md-5 col-lg-4 item">
                                <div className="box"><i className="fa fa-plane icon"></i>
                                    <h3 className="name">Fast </h3>
                                    <p className="description">Faster access, faster response.</p>
                                    {/* <a className="learn-more" href="#">Learn more »</a> */}
                                </div>
                            </div>
                        </div>
                        <h2 className="text-center">Caution</h2>
                        <p className="text-center">
                            This project was built as a educational project and is in development. It may lack certain security features.
                            Do not use it to save any personal/sensitive information.
                        </p>
                    </div>
                </section>
            </div>
        )
    }
}

export default Home;