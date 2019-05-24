import React, { Component } from 'react';

import scrollStyles from "../scss/scroll.module.scss"
import { FaAngleDoubleDown } from 'react-icons/fa';

const sleep = ms => {
    return new Promise(resolve => setTimeout(resolve, ms))
   }
   

class ScrollManager extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.handleWheel = this.handleWheel.bind(this);
        this.nextElem = document.getElementById(this.props.next);
        this.deltaShow = props.deltaShow || 50;
        this.deltaClick = props.deltaClick || 200;
        this.showDuration = props.showDuration || 1500;
        this.showDelay = props.showDelay || 350;
        this.state = {
            isShown: false
        }
    }
    componentDidMount() {
        this.parent = document.getElementById(this.props.parent);
        if(this.parent){
            this.parent.addEventListener("wheel", this.handleWheel);
            this.domObject = this.parent.querySelector("."+scrollStyles.scrollButtonsContainer)
        }
    }
  
    handleClick() {
        this.hide(false, true);
        document.getElementById(this.props.next).scrollIntoView();
    }
    handleWheel(e){
        if(this.state.isShown && e.deltaY > this.deltaClick){
            this.hide(false,true);
            this.handleClick();
        }
        if(!this.state.isShown && e.deltaY > this.deltaShow){
            this.show();
            this.hide();
            return;
        }
    }
    async show(){
        this.domObject.classList.add(scrollStyles.shown);
        await sleep(this.showDelay);
        this.state.isShown = true;
    }
    async hide(withAwait = true, hideInmediatly = false){
        if(withAwait){
            await sleep(this.showDuration);
        }
        this.state.isShown = false;
        this.domObject.classList.remove(scrollStyles.shown);
        if(hideInmediatly){
            this.domObject.style.opacity= 0;
            await sleep(350);
            this.domObject.style = "";
        }
    }  
    
    render() {
        return (
            <div className={scrollStyles.scrollButtonsContainer +" scroll_container"} onClick={this.handleClick}>
                <div>
                    <p>{this.props.title || "Scroll Down"}</p>
                    <FaAngleDoubleDown className={scrollStyles.scrollDownIcon}/>
                </div>
            </div>
        )
    }
}
export default ScrollManager;