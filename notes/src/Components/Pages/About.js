import React, { Component } from 'react';

class About extends Component {

    render() {
        return (
            <div>
                <section id="about" className="team-boxed">
                    <div className="container">
                        <div className="intro">
                            <h2 className="text-center">Team </h2>
                        </div>
                        <div className="row people">
                            <div className="col-md-6 col-lg-4 mx-auto item">
                                <div className="box">
                                    <img className="rounded-circle" src="../assets/img/varun.PNG" alt="" />
                                    <h3 className="name">Varun Borar</h3>
                                    <p className="title">DEVELOPER</p>
                                    <p className="description"> </p>
                                    <div className="social">
                                        <a href="https://github.com/varunborar">
                                            <i className="fa fa-github"></i>
                                        </a>
                                        <a href="https://www.instagram.com/mr.varunn/">
                                            <i className="fa fa-instagram"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-4 mx-auto item">
                                <div className="box">
                                <img className="rounded-circle" src="../assets/img/nishika.PNG" alt=""/>
                                    <h3 className="name">Nishika Khatri</h3>
                                    <p className="title">DEVELOPER</p>
                                    <p className="description"></p>
                                    <div className="social">
                                        <a href="https://github.com/nishika-khatri">
                                            <i className="fa fa-github"></i>
                                        </a>
                                        <a href="https://www.instagram.com/nishika_khatri/">
                                            <i className="fa fa-instagram"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>

        )
    }
}

export default About;