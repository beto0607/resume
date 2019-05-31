import React, {Component} from "react"

import "../scss/header.module.scss"


class Header extends Component{
    constructor(props){
        super(props);
        this.sections = props.sections || [];
        this._onClick = this._onClick.bind(this);

    }
    _onClick({target}){
        console.log(target.href);
    }
    render(){
        return (
            <header>
                {
                    this.sections.map((element, index)=>(
                        <a href={"#"+element.id} onClick={this._onClick} key={"header#"+index}>{element.name}</a>
                    ))
                }
            </header>
        )
    }
}

export default Header;