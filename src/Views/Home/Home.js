import React from "react";
import Landing  from "../../Components/Landing/Landing";
import About  from "../../Components/About/About";

class Home extends React.Component {
    render() { 
        return <div>
            <Landing/>
            <About/>
        </div>;
    }
}
 
export default Home;