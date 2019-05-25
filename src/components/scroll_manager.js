import React, { Component } from 'react';

import scrollStyles from "../scss/scroll.module.scss"
import { FaAngleDoubleDown, FaAngleDoubleUp } from 'react-icons/fa';
import {sleep} from '../utils/utils'

class ScrollManager extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.handleWheel = this.handleWheel.bind(this);
        this._setNextElement();
        this._setPreviousElement();
        this._setConfigs();
    }
    _setPreviousElement(){
        this.previous = this.props.previous
        this.previousDom = document.getElementById(this.previous.id);
    }
    _setNextElement(){
        this.next = this.props.next
        this.nextDom = document.getElementById(this.next.id);
    }
    _setConfigs(){
        this.deltaShow = this.props.deltaShow || 50;
        this.deltaClick = this.props.deltaClick || 200;
        this.showDuration = this.props.showDuration || 1500;
        this.showDelay = this.props.showDelay || 350;
        this.state = {
            isShown: false
        }
    }
    componentDidMount() {
        this.previousDom = document.getElementById(this.props.previousElement.id);
        this.nextDom = document.getElementById(this.props.nextElement.id);
        this.parentDom = document.getElementById(this.props.parent);
        if(this.parentDom){
            this.parentDom.addEventListener("wheel", this.handleWheel);
            this.domObject = this.parent.querySelector("."+scrollStyles.scrollButtonsContainer)
        }
    }
  
    handleClick() {
        this.hide(false, true);
        document.getElementById(this.props.nextDom).scrollIntoView();
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
        var up = null, down = null;
        if(this.previous){
            up =<div className={scrollStyles.scrollUpContainer}>
                    <div>
                        <FaAngleDoubleUp className={scrollStyles.scrollUpIcon}/>
                        <p>{this.previous.title}</p>
                    </div>
                </div>;
        }
        if(this.next){
            down = <div>
                <p>{this.next.title || "Scroll Down"}</p>
                <FaAngleDoubleDown className={scrollStyles.scrollDownIcon}/>
            </div>
        }
        return (
            <div className={scrollStyles.scrollButtonsContainer +" scroll_container"} onClick={this.handleClick}>
                {up}
                {down}
            </div>
        )
    }
}
export default ScrollManager;