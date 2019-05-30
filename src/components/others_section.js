import React from "react"

import SectionContainer from "./section"
import othersSectionStyles from "../scss/others_section.module.scss"

const OthersSection = (props)=>{
    return (
        <SectionContainer name="others_section"  id={props.id} {...props}>
            <div className={othersSectionStyles.wrapper}>

            </div>
        </SectionContainer>
    )
}
export default OthersSection;