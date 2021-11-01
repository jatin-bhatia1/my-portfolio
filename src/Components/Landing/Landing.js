import React from "react";
import {Container, Button, Row, Col} from "reactstrap";
import CoverImage from "../../Assets/Img/Cover_Landing_Image.jpg"

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
                        <Container className="">
                            <div className="col px-0">
                                <Row>
                                    <Col lg="5">
                                        <h1 className="text-white">Jatin Bhatia</h1>
                                        <p className="lead text-white">
                                            Full-stack Developer, AI Aspirant, Big-Data Aspirant                                        
                                        </p>
                                    </Col>
                                    <Col lg="7">
                                        <img src={CoverImage}/>
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