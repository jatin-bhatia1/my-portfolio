import React from "react";
import styled from "styled-components"

const menu = styled.div`
    & .nav:before{
        visibility: visible;
        clip-path: circle(100%);

        & .nav-tgl > span{
            height:0;
            &:after, &:before{
                top: 0px;
			    left: 0;
			    width: 34px;
            }
            &:after {
                transform: rotate(-45deg);
            }
            &:before {
                transform: rotate(45deg);
            }
        }
    }
`;

class Menu extends React.Component {
    constructor(props){
        super(props);
        this.handleClick= this.handleClick.bind(this);
        this.state={
            isActive: false
        }
    }

    GetMenu(){
        if(this.state.isActive){
            return menu;
        }
    }

    handleClick(){
        console.log("Current State : ",this.state.isActive);
        this.setState({isActive: !this.state.isActive}, ()=>{
            console.log("Changed State : ",this.state.isActive);
        })        
    }

    render() { 
        let activateMenu = this.state.isActive ? "menu-wrap active" : "menu-wrap"

        return <div className={activateMenu}>
            <button type="button" className="nav-tgl" aria-label="toggle-menu" onClick={this.handleClick}>
                <span aria-hidden="false"></span>
            </button>
            <div className="nav">
                
            </div>
        </div>;
    }
}
 
export default Menu;