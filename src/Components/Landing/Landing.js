import React from "react";

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
                        {/* <div className="separator separator-bottom separator-skew">
                            <svg
                                viewBox="0 0 2560 100"
                            >
                                <polygon
                                    className="fill-white"
                                    points="2560 0 2560 100 0 100"
                                />
                            </svg>
                        </div>  */}
                    </section>
                </div>
            </main>
        </div>;
    }
}
 
export default Landing;