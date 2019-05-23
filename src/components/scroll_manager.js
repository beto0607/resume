import React, { Component } from 'react';

import scrollStyles from "../scss/scroll.module.scss"
import { FaAngleDoubleDown } from 'react-icons/fa';


class ScrollManager extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.nextElem = document.getElementById(this.props.next);
    }
  
    handleClick() {
        document.getElementById(this.props.next).scrollIntoView();
    }
    
    render() {
        return (
            <div className={scrollStyles.scrollButtonsContainer} onClick={this.handleClick}>
                <p>{this.props.title || "Scroll Down"}</p>
                <FaAngleDoubleDown className={scrollStyles.scrollDownIcon}/>
            </div>
        )
    }
}
export default ScrollManager;