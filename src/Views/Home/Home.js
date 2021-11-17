import React from "react";
import Landing  from "../../Components/Landing/Landing";
import About  from "../../Components/About/About";
import Skills  from "../../Components/Skills/skills";

class Home extends React.Component {
    render() { 
        return <div>
            <Landing/>
            <About/>
            <Skills/>
        </div>;
    }
}
 
export default Home;