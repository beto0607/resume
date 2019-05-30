import React, { Component } from 'react';

import scrollStyles from "../scss/scroll.module.scss"
import { FaAngleDoubleDown, FaAngleDoubleUp } from 'react-icons/fa';
import {sleep} from '../utils/utils'

class ScrollManager extends Component {
    constructor(props) {
        super(props);
        this.handleWheel = this.handleWheel.bind(this);
        this._setConfigs();
        this._setNextElement();
        this._setPreviousElement();
    }
    _setPreviousElement(){
        this.previous = this.props.previous
        if(this.previous && typeof window != "undefined"){
            this.previousDom = window.document.getElementById(this.previous.id);
            this.handleClickUp = this.handleClickUp.bind(this);
        }
    }
    _setNextElement(){
        this.next = this.props.next
        if(this.next && typeof window != "undefined"){
            this.handleClickDown = this.handleClickDown.bind(this);
            this.nextDom = window.document.getElementById(this.next.id);
        }
    }
    _setConfigs(){
        this.parent = this.props.parent;
        this.deltaShow = this.props.deltaShow || 50;
        this.deltaClick = this.props.deltaClick || 200;
        this.showDuration = this.props.showDuration || 1000;
        this.showDelay = this.props.showDelay || 350;
        this.isShown = false
    }
    componentDidMount() {
        this.parentDom = window.document.getElementById(this.parent);
        if(this.parentDom){
            this.parentDom.addEventListener("wheel", this.handleWheel);
            if(this.previous && typeof window != "undefined"){
                this.previousDom = window.document.getElementById(this.previous.id);
                this.upDom = this.parentDom.querySelector("."+scrollStyles.scrollUpContainer)
            }
            if(this.next && typeof window != "undefined"){
                this.nextDom = window.document.getElementById(this.next.id);
                this.downDom = this.parentDom.querySelector("."+scrollStyles.scrollDownContainer)
            }
        }
    }
    handleClickUp() {
        if(this.previous){
            this.hide(this.upDom,false, true);
            this.previousDom.scrollIntoView();
        }
    }
    handleClickDown() {
        if(this.next){
            this.hide(this.downDom,false, true);
            this.nextDom.scrollIntoView();
        }
    }
    handleWheel(e){
        if(this.upDom && e.deltaY < -this.deltaShow){
            this.show(this.upDom);
        }
        if(this.downDom && e.deltaY > this.deltaShow){
            this.show(this.downDom);
        }
    }
    async show(option){
        option.classList.add(scrollStyles.shown);
        await sleep(this.showDelay);
        this.isShown = true
        this.hide(option);
    }
    async hide(option,withAwait = true, hideInmediatly = false){
        if(withAwait){
            await sleep(this.showDuration);
        }
        this.isShown = false
        option.classList.remove(scrollStyles.shown);
        if(hideInmediatly){
            option.style.opacity= 0;
            await sleep(350);
            option.style = "";
        }
    }  
    
    render() {
        var up = null, down = null;
        if(this.previous){
            up =
                <div className={scrollStyles.scrollUpContainer} onClick={this.handleClickUp}>
                    <div>
                        <FaAngleDoubleUp className={scrollStyles.scrollIcon}/>
                        <p>{this.previous.title}</p>
                    </div>
                </div>;
        }
        if(this.next){
            down = 
                <div className={scrollStyles.scrollDownContainer} onClick={this.handleClickDown}>
                    <div>
                        <p>{this.next.title || "Scroll Down"}</p>
                        <FaAngleDoubleDown className={scrollStyles.scrollIcon}/>
                    </div>
                </div>
        }
        return (
            <div className={scrollStyles.scrollButtonsContainer +" scroll_container"}>
                {up}
                {down}
            </div>
        )
    }
}
export default ScrollManager;