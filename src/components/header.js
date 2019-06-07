import React, {Component} from "react"

import "../scss/header.module.scss"


class Header extends Component{
    constructor(props){
        super(props);
        this.sections = props.sections || [];
    }
    render(){
        return (
            <header>
                {
                    this.sections.map((element, index)=>(
                        <a href={"#"+element.id} key={"header#"+index}>{element.name}</a>
                    ))
                }
            </header>
        )
    }
}

export default Header;