import React from "react";
import {Container, Row, Col} from "reactstrap";
import CoverImage from "../../Assets/Img/Coding.jpg"
import Typewriter from 'typewriter-effect';
import Button from "@material-ui/core/Button";
import Delete from "@material-ui/icons/Delete";

class Landing extends React.Component {
    render() { 
        return <div>
            <main ref="main">
                <div className="position-relative">
                    <section className="section section-lg section-shaped pb-250">
                        <div className="shape shape-style-1 shape-default">
                                <span />
                                <span />
                                <span />
                                <span />
                                <span />
                                <span />
                                <span />
                                <span />
                                <span />
                        </div>
                        <div className="separator separator-bottom separator-skew">
                            <svg
                                viewBox="0 0 2560 100"
                            >
                                <polygon
                                    className="fill-white"
                                    points="2560 0 2560 100 0 100"
                                />
                            </svg>
                        </div>
                        <Container>
                            <div className="hero-wrapper">
                                <Row className="align-items-center">
                                        <Col lg="5">
                                            <div className="hero-content">
                                                <div className="hero-text">
                                                    <p className="text-white">Hello, I'm</p>
                                                    <h1 className="text-white">Jatin Bhatia</h1>
                                                    <h2 className="lead">
                                                        <Typewriter
                                                            options={{
                                                                autoStart: true,
                                                                loop: true,
                                                                delay: 200
                                                            }}
                                                            onInit={(typewriter) => {
                                                                typewriter.typeString('Full-stack Developer')
                                                                .pause(10)
                                                                .deleteAll()
                                                                typewriter.typeString('AI Enthusiast')
                                                                .deleteAll()
                                                                typewriter.typeString('Data-Science Aspirant')
                                                                .start();
                                                            }}
                                                        />                                       
                                                    </h2> 
                                                </div>
                                                <div className="hero-btn">
                                                    <Button className="btn"
                                                        startIcon={<Delete />}
                                                        endIcon={<Delete />}
                                                    >
                                                        LINKEDIN
                                                    </Button>
                                                    <Button className="btn">
                                                        <span className="btn-inner--icon mr-5">
                                                            <i className="fa fa-github"></i>
                                                        </span>GITHUB
                                                    </Button>
                                                </div>
                                            </div>                                                                               
                                        </Col>
                                        <Col lg="7">
                                            <img className="coverImage" src={CoverImage} alt="Image"/>
                                        </Col>
                                    </Row> 
                            </div>
                        </Container> 
                    </section>
                </div>
            </main>
        </div>;
    }
}
 
export default Landing;