import React from "react"
import scrollStyles from "../scss/scroll.module.scss"
import { FaAngleDoubleDown } from 'react-icons/fa';

const ScrollManager = (props) => {
    return (
        <div className={scrollStyles.scrollButtonsContainer}>
            <p>{props.title || "Scroll Down"}</p>
            <FaAngleDoubleDown className={scrollStyles.scrollDownIcon}/>
        </div>
    )
}
export default ScrollManager;