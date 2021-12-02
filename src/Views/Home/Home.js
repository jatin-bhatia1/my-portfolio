import React from "react";
import Menu from "../../Components/Shared/Menu";
import Landing  from "../../Components/Landing/Landing";
import About  from "../../Components/About/About";
import Skills  from "../../Components/Skills/skills";

class Home extends React.Component {
    render() { 
        return <div>
            <Menu/>
            <Landing/>
            <About/>
            <Skills/>
        </div>;
    }
}
 
export default Home;