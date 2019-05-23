import React, { Component } from 'react';

import scrollStyles from "../scss/scroll.module.scss"
import { FaAngleDoubleDown } from 'react-icons/fa';


class ScrollManager extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.handleWheel = this.handleWheel.bind(this);
        this.nextElem = document.getElementById(this.props.next);

        this.parent = document.getElementById(this.props.parent);
        console.log(this.props.parent);
    }
  
    handleClick() {
        document.getElementById(this.props.next).scrollIntoView();
    }
    handleWheel(e){
        console.log("e")
    }
    
    render() {
        return (
            <div className={scrollStyles.scrollButtonsContainer +" scroll_container"} onClick={this.handleClick} onWheel={this.handleWheel}>
                <div>
                    <p>{this.props.title || "Scroll Down"}</p>
                    <FaAngleDoubleDown className={scrollStyles.scrollDownIcon}/>
                </div>
            </div>
        )
    }
}
export default ScrollManager;