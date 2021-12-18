<<<<<<< HEAD
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
=======
import React, { cloneElement } from "react";
import { Component } from "react";
import {Container, Button, Row, Col} from "reactstrap";
import Progress from "./ProgressBar";
import aboutImage from "../../Assets/Img/Cover_Landing_Image.jpg";

class About extends React.Component {

    render() { 
        return <div>
            <main ref="main">
                <div className="position-relative">
                    <section className="section section-lg">
                        <Container className="about">
                            <Row className="align-items-center">
                                <Col className="col-lg-6">
                                    <div className="about-img">
                                        <img src={aboutImage} alt="Image"/>
                                    </div>
                                </Col>
                                <Col className="col-lg-6">
                                    <div className="about-content">
                                        <div class="section-header text-left">
                                            <h2>About</h2>
                                        </div>
                                        <div className="about-text">
                                            <p>My name is Jatin Bhatia, based In Lyon, France. I'm a Full-stack developer</p>
                                        </div>
                                    </div>
                                    <div className="skills">
                                        <div class="skill-name">
                                            <p>HTML5</p>
                                        </div>
                                        <div>
                                            <Progress done={60} />
                                        </div>
                                    </div>                                    
                                </Col>
                                
                            </Row>
                        </Container>                        
                    </section>
                </div>                
            </main>
        </div>
>>>>>>> 4aedc75ffc7cc4bde42752261771ad2e2f1b0132
    }
}

export default About;