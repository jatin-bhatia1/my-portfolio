import React from "react";
import aboutImage from "../../Assets/Img/Cover_Landing_Image.jpg";

class About extends React.Component {

    render() {
        return <section className="about">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6">
                        <div className="about-img">
                            <img src={aboutImage} alt=""/>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="about-content">
                            <div class="section-header text-left">
                                <h1>About</h1>
                            </div>
                            <div className="about-text">
                                <p>My name is Jatin Bhatia, based In Lyon, France. I'm a Full-stack developer.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    }
}

export default About;