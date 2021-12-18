import React from "react";
import Menu from "../../Components/Shared/Menu";
import Landing  from "../../Components/Landing/Landing";
import About  from "../../Components/About/About";

class Home extends React.Component {
    render() { 
        return <div>
            <Menu/>
            <Landing/>
            <About/>
        </div>;
    }
}
 
export default Home;