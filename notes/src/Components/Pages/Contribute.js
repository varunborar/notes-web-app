import React, { Component } from 'react';


class Contribute extends Component {


    render() {
        return (
            <div>
                <section id="contribute" class="contribute-clean">
                    <div className="contribute-box">
                        <h1>Contribute to this Project</h1>
                        <div>
                            <h3>Caution</h3>
                            <p>
                                This project was built as a educational project and is in development. It may lack certain security features.
                                Do not use it to save any personal/sensitive information.
                            </p>
                            <br />
                            <p>Visit our git hub repository.</p>
                            <a href="https://github.com/varunborar/Notes">
                                <i class="fa fa-2x fa-github"></i>
                            </a>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}
export default Contribute;